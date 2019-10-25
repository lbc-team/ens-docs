---
description: >-
  反向注册器负责通过.addr.reverse这一专用TLD进行反向解析的管理。
---

# 反向注册器

[源代码](https://github.com/ensdomains/ens/blob/master/contracts/ReverseRegistrar.sol)

ENS中的反向解析是指从以太坊地址（比如0x1234...）到ENS域名的映射，它通过一个特定的域名空间（_.addr.reverse_）来实现。这个域名空间由一个专用注册器拥有和控制，该注册器可以接受任何人的调用，并根据调用者的地址为其分配子域名。

例如，账户 _0x314159265dd8dbb310642f98f50c066173c1259b_ 可以通过调用声明 _314159265dd8dbb310642f98f50c066173c1259b.addr.reverse._，然后为其配置一个解析器并指定元数据（比如此地址的规范ENS域名）。

反向注册器提供了声明反向记录的函数，同时为了提供一种给地址指定规范域名的方式，反向注册器还内置了一个便于配置最常用记录的函数。

反向注册器的详细信息请参阅[EIP 181](https://eips.ethereum.org/EIPS/eip-181)。

## 声明地址

```text
function claim(address owner) public returns (bytes32);
```

通过在反向注册器中声明调用者的地址，将反向记录的所有权分配给`owner`，相当于调用`claimWithResolver(owner, 0)`。

## 通过解析器声明地址

```text
function claimWithResolver(address owner, address resolver) public returns (bytes32)
```

通过在反向注册器中声明调用者的地址，将反向记录的所有权分配给`owner`，如果`resolver`非0，则会同时更新这个反向记录的解析器。

调用该函数之后：

* 调用者的反向记录（_1234....addr.reverse_）归`owner`所有。
* 如果`resolver`非0，调用者的反向记录中的解析器将被设置为`resolver`；如果`resolver`为0，解析器将保持不变。

## 设置域名

```text
function setName(string memory name) public returns (bytes32)
```

将调用者的反向ENS记录设置为给定的`name`。

通常用户只想配置反向名称而无需配置其他内容，而这个函数通过简化设置反向记录的过程，方便了用户。它按以下步骤执行:

1. 为调用者设置反向记录，这个反向记录的所有者是反向注册器。
2. 将调用者反向记录中的解析器设置为`defaultResolver`。
3. 将调用者反向记录中`defaultResolver`的`name()`字段设置为`name`。

简而言之，在调用此方法之后，用户的反向记录会有一个完整的配置，反向记录中该账户的规范域名被设置为给定的`name`。

想要进行灵活配置的用户需要使用`claim`或`claimWithResolver`，并在他们选定的解析器合约上手动配置记录。

## 获取反向记录节点

```text
function node(address addr) public pure returns (bytes32)
```

此函数通过接收地址并返回该地址的反向记录的节点（namehash输出），方便了想要查询地址元数据的合约，并避免再使用那些需要处理十六进制编码和散列以获得所需值的合约。

## 获取默认解析器

```text
Resolver public defaultResolver;
```

返回反向注册器用于`setName`的解析器合约的地址。

