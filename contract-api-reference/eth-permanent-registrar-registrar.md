# 注册中心

[源代码](https://github.com/ensdomains/ethregistrar/blob/master/contracts/BaseRegistrarImplementation.sol)

本合约实现了永久注册中心的核心功能，具有以下特点：

* 注册中心的所有者可添加或移除"控制器（controller）"。
* 控制器可以注册新域名和延长现有域名的有效期（即为域名续期），但不能更改现有域名的所有权或缩短其过期时间。
* 域名所有者可以将所有权转让给另一个地址。
* 如果域名所有者丢失了所有权，他们可以收回在ENS注册表中记录的所有权。（LBB译注：看到这句是不是有点蒙圈？可能精髓往往会有点难以理解吧！）
* 在1年过渡期内，旧版注册中心的域名所有者可将其迁移至新版注册中心。迁移域名时，会退还全部押金。

本节要讲的是注册中心接口的各个部分，这些内容与那些编写注册中心交互工具的开发者紧密相关。为简洁起见，省略了注册中心所有者或控制器特有的功能。

注册中心只处理标签散列，确切地说是标签的第一个组件的`keccak256`值（比如，对`ens.eth`来说就是`keccak256('ens')`）。为了与ERC721兼容，这些值表示为uint256值，而非bytes32值，但是它们之间可以相互转换。通过计算`keccak256(baseNode, labelHash)`可以获得域名的namehash，其中的`baseNode`是注册中心所管理的TLD的namehash，比如`namehash('eth')`。

注册和续期是通过注册中心的[控制器](controller.md)来处理的。

## 域名和注册

ENS中的每个域名都有一个所有者，域名所有者可以将域名转让给新所有者、设置解析器、创建和重新分配子域名，这些功能都包含在[ENS注册表](../ens.md)中。

直接在.eth下分配的域名（例如，以.eth结尾的二级域名，如 _alice.eth_ ）是由前面所说.eth永久注册中心管理的。当从注册中心购买一个域名并合法获取该域名在ENS中的所有权时，注册中心会自动跟踪谁拥有**注册**，即谁是注册人，这里的**注册人**在.eth永久注册中心里是唯一的。（LBB译注：这里提到的"注册"是个名词，可以理解为"注册证书"，注册证书代表了一个域名的"主权"，拥有这个注册证书的人就是这个域名的"注册人"，而注册人具有最高操作权限，可以收回域名的所有权。简而言之，注册人是一个域名的真正主人，而我们经常提到的所有者其实是这个域名的管理者。下面我们还会多次提到"注册"，切记它是一个名词，为方便理解，不妨将其自行脑补为"注册证书"。）

域名的注册人可以将注册转让给另一个帐户（LBB译注：即域名过户），也可以通过调用[reclaim](registrar.md#shou-hui-ens-suo-you-quan)来恢复域名的所有权，该方法将ENS域名的所有者重置为注册人的帐户。

将域名的所有权和注册的所有权进行分离，是为了易于构建对ENS进行自动更新的系统。注册人可以将域名的所有权转让给其他帐户或是一个用于管理记录、子域名等信息的智能合约，同时仍然保留着恢复所有权的能力，以便于进行版本升级或回退等操作。

当涉及所有权时，很重要的一点是要弄清楚你是在考虑**域名**的所有权还是**注册**的所有权。

## 读取操作

### 获取域名到期时间

```text
function nameExpires(uint256 label) external view returns(uint);
```

返回当前域名到期的unix时间戳，未注册的域名或是尚未从旧版注册中心迁移的域名将返回0。

### 检查域名的可用性

```text
function available(uint256 label) public view returns(bool);
```

如果域名可以注册，则返回`true`。考虑到旧版注册中心上那些尚未迁移的已注册域名，注册中心的控制器可能会对域名注册增加一些超出注册中心合约的限制条件（例如，最小域名长度），所以该函数**不应该**用于检查用户是否可以注册某个域名。要检查用户是否可以注册某个域名，应该[通过控制器检查域名的可用性](controller.md#jian-cha-yu-ming-de-ke-yong-xing)。

### 获取迁移截止时间

```text
uint public transferPeriodEnds;
```

`transferPeriodEnds`记录着一个unix的迁移截止时间戳，这个时间到达后，就不能再从旧版注册中心进行注册迁移，且所有未迁移注册的域名都可以被重新注册。

### 获取控制器状态

```text
mapping(address=>bool) public controllers;
```

`controllers`允许调用者检查某个地址是否被授权为注册中心的控制器。

### 检查域名授权

```text
function getApproved(uint256 tokenId) public view returns (address operator);
```

返回该域名的许可操作员的地址。（LBB译注：如果不理解这里的"许可"，请查阅有关以太坊approve操作的信息。）

这个函数是ERC721的一部分。

### 检查所有域名授权

```text
function isApprovedForAll(address owner, address operator) public view returns (bool);
```

如果`operator`得到了可以转让`owner`的所有域名的授权，则返回true。

这个函数是ERC721的一部分。

### 获取域名所有者

```text
function ownerOf(uint256 label) external view returns(address);
```

`ownerOf`返回由标签的散列标识的注册的所有者的地址（LBB译注：即返回注册人的地址），如果注册不存在则返回0。尚未从旧版注册中心迁移的注册会被视为不存在的注册。

这个函数是[ERC721](https://github.com/ensdomains/ens/blob/master/docs/ethregistrar.rst#id7)的一部分。

## 写入操作

### 转让域名

```text
function transferFrom(address from, address to, uint256 tokenId) public;
function safeTransferFrom(address from, address to, uint256 tokenId) public;
function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public;
```

以上函数转让的是注册（LBB译注：即变更注册人）。

它们按照[ERC721](https://github.com/ensdomains/ens/blob/master/docs/ethregistrar.rst#id9)中的规定来执行。

实现一次成功转让会触发以下事件：

```text
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
```

### 许可操作

```text
function approve(address to, uint256 tokenId) public;
function setApprovalForAll(address operator, bool _approved) public;
```

[ERC721](https://github.com/ensdomains/ens/blob/master/docs/ethregistrar.rst#id11)中记录了这些用于许可管理的函数的信息。

### 收回ENS所有权

```text
function reclaim(uint256 label) external;
```

将ENS注册表中域名所有者的记录设置为该域名注册的所有者，该函数只能由注册的所有者调用。

## 事件

### 域名迁移事件

```text
event NameMigrated(uint256 indexed hash, address indexed owner, uint expires);
```

当域名从旧版注册中心迁出时，会触发此事件。

### 域名注册事件

```text
event NameRegistered(uint256 indexed hash, address indexed owner, uint expires);
```

当一个控制器注册一个新域名时会触发此事件。

### 域名续期事件

```text
event NameRenewed(uint256 indexed hash, uint expires);
```

当一个控制器给一个域名续期（或注册）时会触发此事件。

### 转让事件

```text
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
```

将注册转移到新所有者时会触发此事件。这与[ENS注册表](../ens.md)的转让事件不同，后者记录的是ENS的所有权转移。

