---
description: ENS注册表。
---

# 注册表

[源代码](https://github.com/ensdomains/ens/blob/master/contracts/ENS.sol)

ENS注册表是ENS系统中的核心合约，所有的ENS查询都从注册表开始。注册表负责管理域名列表，记录每个域名的所有者、解析器和TTL，并允许域名的所有者对这些数据进行更改。

ENS注册表的详细信息请参阅[EIP137](https://learnblockchain.cn/docs/eips/eip-137.html)。

## 获取所有者

```text
function owner(bytes32 node) external view returns (address);
```

以上函数返回`node`所标识域名的所有者。

## 获取解析器

```text
function resolver(bytes32 node) external view returns (address);
```

以上函数返回`node`所标识域名的解析器地址。

## 获取TTL

```text
function ttl(bytes32 node) external view returns (uint64);
```

以上函数返回`node`所标识域名的缓存存活时间（TTL）。希望缓存域名信息(包括所有者、解析器地址和其他记录)的系统应该重视这个值。如果TTL为0，那么每次查询都需要获取新数据。

## 设置所有者

```text
function setOwner(bytes32 node, address owner) external;
```

将`node`所标识域名的所有权重新分配给`owner`，此函数只能由域名当前的所有者调用。

该操作会触发以下事件：

```text
event Transfer(bytes32 indexed node, address owner);
```

## 设置解析器

```text
function setResolver(bytes32 node, address resolver) external;
```

将与`node`所标识域名相关联的解析器更新为`resolver`，此函数只能由域名当前的所有者调用。`resolver`必须是一个实现了解析器接口的合约地址。

该操作会触发以下事件：

```text
event NewResolver(bytes32 indexed node, address resolver);
```

## 设置TTL

```text
function setTTL(bytes32 node, uint64 ttl) external;
```

更新`node`所标识域名的缓存存活时间，此函数只能由域名当前的所有者调用。

该操作会触发以下事件：

```text
event NewTTL(bytes32 indexed node, uint64 ttl);
```

## 设置子域名所有者

```text
function setSubnodeOwner(bytes32 node, bytes32 label, address owner) external;
```

创建一个新的子域名`node`，将其所有权分配给指定的`owner`。如果该子域名已经存在，则重新分配所有权，但解析器和TTL保持不变。

`label`是要创建的子域名标签的keccak256散列。例如，如果你拥有 _alice.eth_ 并想创建子域名 _iam.alice.eth_，就需要将`namehash('alice.eth')`作为`node`，将`keccak256('iam')`作为`label`。

该操作会触发以下事件：

```text
event NewOwner(bytes32 indexed node, bytes32 indexed label, address owner);
```

