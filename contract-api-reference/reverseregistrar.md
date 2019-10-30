---
description: >-
<<<<<<< HEAD
  反向注册中心负责通过.addr.reverse这一专用TLD进行反向解析的管理。
---

# 反向注册中心

[源代码](https://github.com/ensdomains/ens/blob/master/contracts/ReverseRegistrar.sol)

ENS中的反向解析是指从以太坊地址（比如0x1234...）到ENS域名的映射，它通过一个特定的域名空间（_.addr.reverse_）来实现。这个域名空间由一个专用注册中心拥有和控制，该注册中心可以接受任何人的调用，并根据调用者的地址为其分配子域名。

例如，账户 _0x314159265dd8dbb310642f98f50c066173c1259b_ 可以通过调用声明 _314159265dd8dbb310642f98f50c066173c1259b.addr.reverse._，然后为其配置一个解析器并指定元数据（比如此地址的规范ENS域名）。

反向注册中心提供了声明反向记录的函数，同时为了提供一种给地址指定规范域名的方式，反向注册中心还内置了一个便于配置最常用记录的函数。

反向注册中心的详细信息请参阅[EIP181](https://eips.ethereum.org/EIPS/eip-181)。

## 声明地址
=======
  The registrar responsible for managing reverse resolution via the
  .addr.reverse special-purpose TLD.
---

# ReverseRegistrar

[Source](https://github.com/ensdomains/ens/blob/master/contracts/ReverseRegistrar.sol)

Reverse resolution in ENS - the process of mapping from an Ethereum address \(eg, 0x1234...\) to an ENS name - is handled using a special namespace, _.addr.reverse_. A special-purpose registrar controls this namespace and allocates subdomains to any caller based on their address.

For example, the account _0x314159265dd8dbb310642f98f50c066173c1259b_ can claim _314159265dd8dbb310642f98f50c066173c1259b.addr.reverse._ After doing so, it can configure a resolver and expose metadata, such as a canonical ENS name for this address.

The reverse registrar provides functions to claim a reverse record, as well as a convenience function to configure the record as it's most commonly used, as a way of specifying a canonical name for an address.

The reverse registrar is specified in [EIP 181](https://eips.ethereum.org/EIPS/eip-181).

## Claim Address
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function claim(address owner) public returns (bytes32);
```

<<<<<<< HEAD
通过在反向注册中心中声明调用者的地址，将反向记录的所有权分配给`owner`，相当于调用`claimWithResolver(owner, 0)`。

## 通过解析器声明地址
=======
Claims the caller's address in the reverse registrar, assigning ownership of the reverse record to `owner`. Equivalent to calling `claimWithResolver(owner, 0)`.

## Claim Address with Resolver
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function claimWithResolver(address owner, address resolver) public returns (bytes32)
```

<<<<<<< HEAD
通过在反向注册中心中声明调用者的地址，将反向记录的所有权分配给`owner`，如果`resolver`非0，则会同时更新这个反向记录的解析器。

调用该函数之后：

* 调用者的反向记录（_1234....addr.reverse_）归`owner`所有。
* 如果`resolver`非0，调用者的反向记录中的解析器将被设置为`resolver`；如果`resolver`为0，解析器将保持不变。

## 设置域名
=======
Claims the caller's address in the reverse registrar, assigning ownership of the reverse record to `owner`. If `resolver` is nonzero, also updates the record's resolver.

After calling this function:

* The reverse record for the caller \(_1234....addr.reverse_\) is owned by  `owner`.
* If `resolver` is nonzero, the reverse record for the caller has its resolver set to `resolver`; otherwise it is left unchanged.

## Set Name
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setName(string memory name) public returns (bytes32)
```

<<<<<<< HEAD
将调用者的反向ENS记录设置为给定的`name`。

通常用户只想配置反向域名而无需配置其他内容，而这个函数通过简化设置反向记录的过程，方便了用户。它按以下步骤执行:

1. 为调用者设置反向记录，这个反向记录的所有者是反向注册中心。
2. 将调用者反向记录中的解析器设置为`defaultResolver`。
3. 将调用者反向记录中`defaultResolver`的`name()`字段设置为`name`。

简而言之，在调用此方法之后，用户的反向记录会有一个完整的配置，反向记录中该账户的规范域名被设置为给定的`name`。

想要进行灵活配置的用户需要使用`claim`或`claimWithResolver`，并在他们选定的解析器合约上手动配置记录。

## 获取反向记录节点
=======
Configures the caller's reverse ENS record to point to the provided `name`.

This convenience function streamlines the process of setting up a reverse record for the common case where a user only wants to configure a reverse name and nothing else. It performs the following steps:

1. Sets the reverse record for the caller to be owned by the ReverseRegistrar.
2. Sets the reverse record for the caller to have `defaultResolver` as its resolver.
3. Sets the `name()` field in the `defaultResolver`  for the caller's reverse record to `name`.

In short, after calling this, a user has a fully configured reverse record claiming the provided `name` as that account's canonical name.

Users wanting more flexibility will need to use `claim` or `claimWithResolver` and configure records manually on their chosen resolver contract.

## Get Reverse Record Node
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function node(address addr) public pure returns (bytes32)
```

<<<<<<< HEAD
此函数通过接收地址并返回该地址的反向记录的节点（namehash输出），方便了想要查询地址元数据的合约，并避免再使用那些需要处理十六进制编码和散列以获得所需值的合约。

## 获取默认解析器
=======
Accepts an address, and returns the node \(namehash output\) for the address's reverse record. This function is provided as a convenience for contracts wishing to look up metadata for an address, and avoids the need for those contracts to handle the hex encoding and hashing necessary to derive the required value.

## Get Default Resolver
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
Resolver public defaultResolver;
```

<<<<<<< HEAD
返回`反向注册中心`用于`setName`的解析器合约的地址。
=======
Returns the address of the resolver contract that the `ReverseRegistrar` uses for `setName`.
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

