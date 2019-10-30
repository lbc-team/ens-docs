---
<<<<<<< HEAD
description: ENS注册表.
---

# 注册表

[源代码](https://github.com/ensdomains/ens/blob/master/contracts/ENS.sol)

ENS注册表是ENS系统中的核心合约，所有的ENS查询都从注册表开始。注册表负责管理域名列表，记录每个域名的所有者、解析器和TTL，并允许域名的所有者对这些数据进行更改。

ENS注册表的详细信息请参阅[EIP137](https://eips.ethereum.org/EIPS/eip-137)。

## 获取所有者
=======
description: The ENS registry.
---

# Registry

[Source](https://github.com/ensdomains/ens/blob/master/contracts/ENS.sol)

The ENS registry is the core contract that lies at the heart of ENS resolution. All ENS lookups start by querying the registry. The registry maintains a list of domains, recording the owner, resolver, and TTL for each, and allows the owner of a domain to make changes to that data.

The ENS registry is specified in [EIP 137](https://eips.ethereum.org/EIPS/eip-137).

## Get Owner
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function owner(bytes32 node) external view returns (address);
```

<<<<<<< HEAD
以上函数返回`node`所标识域名的所有者。

## 获取解析器
=======
Returns the owner of the name specified by `node`.

## Get Resolver
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function resolver(bytes32 node) external view returns (address);
```

<<<<<<< HEAD
以上函数返回`node`所标识域名的解析器地址。

## 获取TTL
=======
Returns the address of the resolver responsible for the name specified by `node`.

## Get TTL
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function ttl(bytes32 node) external view returns (uint64);
```

<<<<<<< HEAD
以上函数返回`node`所标识域名的缓存存活时间（TTL）。希望缓存域名信息(包括所有者、解析器地址和其他记录)的系统应该重视这个值。如果TTL为0，那么每次查询都需要获取新数据。

## 设置所有者
=======
Returns the caching time-to-live of the name specified by `node`. Systems that wish to cache information about a name, including ownership, resolver address, and records, should respect this value. If TTL is zero, new data should be fetched on each query.

## Set Owner
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setOwner(bytes32 node, address owner) external;
```

<<<<<<< HEAD
将`node`所标识域名的所有权重新分配给`owner`，此函数只能由域名当前的所有者调用。

该操作会触发以下事件：
=======
Reassigns ownership of the name identified by `node` to `owner`. Only callable by the current owner of the name.

Emits the following event:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
event Transfer(bytes32 indexed node, address owner);
```

<<<<<<< HEAD
## 设置解析器
=======
## Set Resolver
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setResolver(bytes32 node, address resolver) external;
```

<<<<<<< HEAD
将与`node`所标识域名相关联的解析器更新为`resolver`，此函数只能由域名当前的所有者调用。`resolver`必须是一个实现了解析器接口的合约地址。

该操作会触发以下事件：
=======
Updates the resolver associated with the name identified by `node` to `resolver`.  Only callable by the current owner of the name. `resolver` must specify the address of a contract that implements the Resolver interface.

Emits the following event:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
event NewResolver(bytes32 indexed node, address resolver);
```

<<<<<<< HEAD
## 设置TTL
=======
## Set TTL
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setTTL(bytes32 node, uint64 ttl) external;
```

<<<<<<< HEAD
更新`node`所标识域名的缓存存活时间，此函数只能由域名当前的所有者调用。

该操作会触发以下事件：
=======
Updates the caching time-to-live of the name identified by `node`. Only callable by the current owner of the name.

Emits the following event:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
event NewTTL(bytes32 indexed node, uint64 ttl);
```

<<<<<<< HEAD
## 设置子域名所有者
=======
## Set Subdomain Owner
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setSubnodeOwner(bytes32 node, bytes32 label, address owner) external;
```

<<<<<<< HEAD
创建一个新的子域名`node`，将其所有权分配给指定的`owner`。如果该子域名已经存在，则重新分配所有权，但解析器和TTL保持不变。

`label`是要创建的子域名标签的keccak256散列。例如，如果你拥有 _alice.eth_ 并想创建子域名 _iam.alice.eth_，就需要将`namehash('alice.eth')`作为`node`，将`keccak256('iam')`作为`label`。

该操作会触发以下事件：
=======
Creates a new subdomain of `node`, assigning ownership of it to the specified `owner`. If the domain already exists, ownership is reassigned but the resolver and TTL are left unmodified.

`label` is the keccak256 hash of the subdomain label to create. For example, if you own _alice.eth_ and want to create the subdomain _iam.alice.eth_, supply  `namehash('alice.eth')` as the `node`, and `keccak256('iam')` as the `label`.

Emits the following event:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
event NewOwner(bytes32 indexed node, bytes32 indexed label, address owner);
```

