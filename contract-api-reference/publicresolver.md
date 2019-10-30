---
<<<<<<< HEAD
description: 默认的公共解析器。
---

# 公共解析器

[源代码](https://github.com/ensdomains/resolvers/blob/master/contracts/PublicResolver.sol)

公共解析器是一个通用的ENS解析器，它适用于大多数标准的ENS用例。域名的所有者可以使用公共解析器更新相应的ENS记录。

公共解析器遵循以下EIP提案:

* [EIP137](https://eips.ethereum.org/EIPS/eip-137) - Contract address interface \(`addr()`\).
* [EIP165 ](https://eips.ethereum.org/EIPS/eip-165)- Interface Detection \(`supportsInterface()`\).
* [EIP181](https://eips.ethereum.org/EIPS/eip-181) - Reverse resolution \(`name()`\).
* [EIP205](https://eips.ethereum.org/EIPS/eip-205) - ABI support \(`ABI()`\).
* [EIP619](https://github.com/ethereum/EIPs/pull/619) - SECP256k1 public keys \(`pubkey()`\).
* [EIP634](https://eips.ethereum.org/EIPS/eip-634) - Text records \(`text()`\).
* [EIP1577](https://eips.ethereum.org/EIPS/eip-1577) - Content hash support \(`contenthash()`\).

{% hint style="warning" %}
虽然`公共解析器`提供了一个方便的默认解析器，但仍然存在许多其他的解析器实例和版本。调用者**不能**假设域名使用的是公共解析器的最新版本，或是解析器包含了这里描述的所有方法。要检查一个解析器是否支持某个特性，请参见[接口检查支持](publicresolver.md#jie-kou-jian-cha-zhi-chi)。
{% endhint %}

## 接口检查支持
=======
description: The default public resolver.
---

# PublicResolver

[Source](https://github.com/ensdomains/resolvers/blob/master/contracts/PublicResolver.sol)

PublicResolver implements a general-purpose ENS resolver that is suitable for most standard ENS use-cases. The public resolver permits updates to ENS records by the owner of the corresponding name.

The public resolver implements the following EIPs:

* [EIP 137](https://eips.ethereum.org/EIPS/eip-137) - Contract address interface \(`addr()`\).
* [EIP 165 ](https://eips.ethereum.org/EIPS/eip-165)- Interface Detection \(`supportsInterface()`\).
* [EIP 181](https://eips.ethereum.org/EIPS/eip-181) - Reverse resolution \(`name()`\).
* [EIP 205](https://eips.ethereum.org/EIPS/eip-205) - ABI support \(`ABI()`\).
* [EIP 619](https://github.com/ethereum/EIPs/pull/619) - SECP256k1 public keys \(`pubkey()`\).
* [EIP 634](https://eips.ethereum.org/EIPS/eip-634) - Text records \(`text()`\).
* [EIP 1577](https://eips.ethereum.org/EIPS/eip-1577) - Content hash support \(`contenthash()`\).

{% hint style="warning" %}
While the `PublicResolver`provides a convenient default implementation, many resolver implementations and versions exist. Callers **must not** assume that a domain uses the current version of the public resolver, or that all of the methods described here are present. To check if a resolver supports a feature, see [Check Interface Support](publicresolver.md#check-interface-support).
{% endhint %}

## Check Interface Support
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function supportsInterface(bytes4 interfaceID) external pure returns (bool)
```

<<<<<<< HEAD
ENS使用[ERC165](https://eips.ethereum.org/EIPS/eip-165)进行接口检测。ERC165要求支持它的合约实现一个名为`supportsInterface`的函数，该函数接收一个接口ID并返回一个布尔值，这个布尔值表示是否支持该接口。

接口ID由包含在接口中的每个函数的4字节函数ID通过异或计算而来。例如，`addr(bytes32)`的函数ID为 _0x3b3b57de_，因为它是以太坊地址接口中唯一的函数，所以它的接口ID也是 _0x3b3b57de_，因此调用`supportsInterface(0x3b3b57de)`将为任何支持`addr()`的解析器返回 _true_。

ERC165的接口ID为 _0x01ffc9a7_，因此`supportsInterface(0x01ffc9a7)`对于任何支持ERC165的合约（也就是对于任何解析器）都将返回true。

注意，公共解析器不公开设置属性值函数的显式接口，因此对于指定的设置属性值函数，目前没有办法对其进行自动检查。

## 获取以太坊地址
=======
ENS uses [ERC 165](https://eips.ethereum.org/EIPS/eip-165) for interface detection. ERC 165 requires that supporting contracts implement a function, `supportsInterface`, which takes an interface ID and returns a boolean value indicating if this interface is supported or not.

Interface IDs are calculated as the exclusive-or of the four-byte function identifiers of each function included in the interface. For example, `addr(bytes32)` has the function ID _0x3b3b57de_. Because it is the only function in the Ethereum Address interface, its interface ID is also _0x3b3b57de_, and so calling `supportsInterface(0x3b3b57de)` will return _true_ for any resolver that supports `addr()`.

ERC 165 has an interface ID of _0x01ffc9a7_, so `supportsInterface(0x01ffc9a7)` will always return true for any ERC 165 supporting contract \(and hence for any resolver\).

Note that the public resolver does not expose explicit interfaces for setter functions, so there are no automated means to check for support for a given setter function.

## Get Ethereum Address
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function addr(bytes32 node) external view returns (address)
```

<<<<<<< HEAD
返回与给定的`node`关联的以太坊地址，如果没有则返回0。

这个函数的接口ID为 _0x3b3b57de_。

这个函数的详细信息请参阅[EIP137](https://eips.ethereum.org/EIPS/eip-137)。

## 设置以太坊地址
=======
Returns the Ethereum address associated with the provided `node`, or 0 if none.

This function has interface ID _0x3b3b57de_.

This function is specified in [EIP 137](https://eips.ethereum.org/EIPS/eip-137).

## Set Ethereum Address
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setAddr(bytes32 node, address addr) external;
```

<<<<<<< HEAD
将与给定的`node` 关联的以太坊地址设置为`addr`。

只能由`node`的所有者调用。

该操作会触发以下事件：
=======
Sets the Ethereum address associated with the provided `node` to `addr`.

Only callable by the owner of `node`.

Emits the following event:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
event AddrChanged(bytes32 indexed node, address a);
```

<<<<<<< HEAD
## 获取规范域名
=======
## Get Canonical Name
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function name(bytes32 node) external view returns (string memory);
```

<<<<<<< HEAD
返回与给定的`node`关联的规范ENS域名，专门用于反向解析。

这个函数的接口ID为 _0x691f3431_.

这个函数的详细信息请参阅[EIP181](https://eips.ethereum.org/EIPS/eip-181)。

## 设置规范域名
=======
Returns the canonical ENS name associated with the provided `node`. Used exclusively for reverse resolution.

This function has interface ID _0x691f3431_.

This function is specified in [EIP 181](https://eips.ethereum.org/EIPS/eip-181).

## Set Canonical Name
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setName(bytes32 node, string calldata name) external;
```

<<<<<<< HEAD
为给定的`node`设置规范ENS域名`name`。

只能由`node`的所有者调用。

该操作会触发以下事件：
=======
Sets the canonical ENS name for the provided `node` to `name`.

Only callable by the owner of `node`.

Emits the following event:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
event NameChanged(bytes32 indexed node, string name);
```

<<<<<<< HEAD
## 获取内容散列
=======
## Get Content Hash
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function contenthash(bytes32 node) external view returns (bytes memory);
```

<<<<<<< HEAD
返回`node`的内容散列(如果存在的话)。涉及的值会被格式化为机器可读的[multicodecs](https://github.com/multiformats/multicodec)，详细信息请参阅[EIP 1577](https://eips.ethereum.org/EIPS/eip-1577)。

`contenthash`用于存储IPFS和Swarm内容散列，可以将ENS域名解析到托管在这些分布式网络上的内容（如网站）。

这个函数的接口ID为 _0xbc1c58d1_。

这个函数的详细信息请参阅[EIP1577](https://eips.ethereum.org/EIPS/eip-1157)。

## 设置内容散列
=======
Returns the content hash for `node`, if one exists. Values are formatted as machine-readable [multicodecs](https://github.com/multiformats/multicodec), as specified in [EIP 1577](https://eips.ethereum.org/EIPS/eip-1577).

`contenthash` is used to store IPFS and Swarm content hashes, which permit resolving ENS addresses to distributed content \(eg, websites\) hosted on these distributed networks.

This function has interface ID _0xbc1c58d1_.

This function is specified in [EIP 1577](https://eips.ethereum.org/EIPS/eip-1157).

## Set Content Hash
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setContenthash(bytes32 node, bytes calldata hash) external;
```

<<<<<<< HEAD
将给定`node`的内容散列设置为`hash`。

只能由`node`的所有者调用。

涉及的值会被格式化为机器可读的[multicodecs](https://github.com/multiformats/multicodec)，详细信息请参阅[EIP1577](https://eips.ethereum.org/EIPS/eip-1577)。

该操作会触发以下事件：
=======
Sets the content hash for the provided `node` to `hash`.

Only callable by the owner of `node`.

Values are formatted as machine-readable [multicodecs](https://github.com/multiformats/multicodec), as specified in [EIP 1577](https://eips.ethereum.org/EIPS/eip-1577).

Emits the following event:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
event ContenthashChanged(bytes32 indexed node, bytes hash);
```

<<<<<<< HEAD
## 获取合约ABI
=======
## Get Contract ABI
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
ABI(bytes32 node, uint256 contentTypes) external view returns (uint256, bytes memory);
```

<<<<<<< HEAD
返回与给定`node`匹配的ABI定义（如果存在的话）。`contentTypes`是调用者可以接受的二进制编码。如果指定了多个内容类型，解析器将选择一个返回。目前支持的内容类型有:

| 内容类型ID | 描述 |
| :--- | :--- |
| 1 | JSON |
| 2 | zlib压缩的JSON |
| 4 | [CBOR](https://cbor.io/) |
| 8 | URI |

`ABI`返回内容类型ID和ABI数据的二元组。如果没有找到合适的内容类型ID的数据，则内容类型ID返回0，ABI数据将是空字符串。

这个函数的接口ID为 _0x2203ab56_。

这个函数的详细信息请参阅[EIP205](https://eips.ethereum.org/EIPS/eip-205)。

## 设置合约ABI
=======
Returns a matching ABI definition for the provided `node`, if one exists. `contentTypes` is the bitwise-OR of the encodings that the caller can accept. If multiple content types are specified, the resolver will select one to return. Currently supported content types are:

| Content Type ID | Description |
| :--- | :--- |
| 1 | JSON |
| 2 | zlib-compressed JSON |
| 4 | [CBOR](https://cbor.io/) |
| 8 | URI |

`ABI` returns a two-tuple of the content type ID and the ABI data. If no data of the appropriate content type ID was found, 0 is returned for the content type ID, and the ABI data will be the empty string.

This function has interface ID _0x2203ab56_.

This function is specified in [EIP 205](https://eips.ethereum.org/EIPS/eip-205).

## Set Contract ABI
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setABI(bytes32 node, uint256 contentType, bytes calldata data) external
```

<<<<<<< HEAD
为`node`设置或更新ABI数据。`contentType`是给定的内容类型ID，而且必须给定一个类型ID；`data`包含经过编码的ABI数据。如果要清除域名的ABI数据，请将`data`设置为空字符串。

只能由`node`的所有者调用。

该操作会触发以下事件：
=======
Sets or updates ABI data for `node`. `contentType` specifies the content type ID \(see [Get Contract ABI](publicresolver.md#get-contract-abi) for valid values\); exactly one type ID must be specified. `data` contains the encoded ABI data. To clear ABI data for a name, specify the empty string for `data`.

Only callable by the owner of `node`.

Emits the following event:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
event ABIChanged(bytes32 indexed node, uint256 indexed contentType);
```

<<<<<<< HEAD
## 获取公钥
=======
## Get Public Key
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function pubkey(bytes32 node) external view returns (bytes32 x, bytes32 y)
```

<<<<<<< HEAD
以二元组`(x, y)`的形式返回`node`的ECDSA SECP256k1公钥。如果没有设置公钥，则返回`(0, 0)`。

这个函数的接口ID为 _0xc8690233_。

这个函数的详细信息请参阅[EIP619](https://github.com/ethereum/EIPs/issues/619)。

## 设置公钥
=======
Returns the ECDSA SECP256k1 public key for `node`, as a 2-tuple `(x, y)`. If no public key is set, `(0, 0)` is returned.

This function has interface ID _0xc8690233_.

This function is specified in [EIP 619](https://github.com/ethereum/EIPs/issues/619).

## Set Public Key
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setPubkey(bytes32 node, bytes32 x, bytes32 y) external
```

<<<<<<< HEAD
将`node`的ECDSA SECP256k1公钥设置为`(x, y)`。

只能由`node`的所有者调用。

该操作会触发以下事件：
=======
Sets the ECDSA SECP256k1 public key for `node` to `(x, y)`.

Only callable by the owner of `node`.

Emits the following event:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
event PubkeyChanged(bytes32 indexed node, bytes32 x, bytes32 y);
```

<<<<<<< HEAD
## 获取文本数据
=======
## Get Text Data
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function text(bytes32 node, string calldata key) external view returns (string memory)
```

<<<<<<< HEAD
检索`node`的文本元数据。每个域名可能有多个元数据片段，每个片段由一个唯一的键值`key`标识。如果`node`中由键值`key`标识的文本数据不存在，则返回空字符串。

`key`可选的标准值有：

| 值 | 含义 |
| :--- | :--- |
| email | 电子邮箱地址 |
| url | 网址（URL） |
| avatar | 用作头像或标识的图像的网址 |
| description | 域名的描述信息 |
| notice | 关于域名的通知 |
| keywords | 逗号分隔的关键字列表，按重要性由高到低排列，与此字段有交互的客户端可以通过设置一个阈值来选择忽略哪些内容 |

此外，任何人都可以指定特定于服务提供商的密钥，这些密钥必须以`vnd.`作为前缀。目前已知的特定于服务提供商的密钥如下:

| 值 | 含义 |
| :--- | :--- |
| vnd.twitter | Twitter称呼 |
| vnd.github | Github用户名 |

这个函数的接口ID为 _0x59d1d43c_。

这个函数的详细信息请参阅[EIP634](https://eips.ethereum.org/EIPS/eip-634)。

## 设置文本数据
=======
Retrieves text metadata for `node`. Each name may have multiple pieces of metadata, identified by a unique string `key`. If no text data exists for `node` with the key `key`, the empty string is returned.

Standard values for `key` are:

| key | Meaning |
| :--- | :--- |
| email | An email address |
| url | A URL |
| avatar | A URL to an image used as an avatar or logo |
| description | A description of the name |
| notice | A notice regarding this name |
| keywords | A list of comma-separated keywords, ordered by most significant first; clients that interpresent this field may choose a threshold beyond which to ignore |

In addition, anyone may specify vendor-specific keys, which must be prefixed with `vnd.`.The following vendor-specific keys are currently known:

| key | Meaning |
| :--- | :--- |
| vnd.twitter | Twitter handle |
| vnd.github | Github username |

This function has interface ID 0x59d1d43c.

This function is specified in [EIP 634](https://eips.ethereum.org/EIPS/eip-634).

## Set Text Data
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function setText(bytes32 node, string calldata key, string calldata value) external
```

<<<<<<< HEAD
将`node`中由唯一键值`key`标识的文本元数据设置为`value`，同时会覆盖掉之前`node`中由`key`标识存储的所有内容。如果要清除文本字段，请将其设置为空字符串。

只能由`node`的所有者调用。

该操作会触发以下事件：
=======
Sets text metadata for `node` with the unique key `key` to `value`, overwriting anything previously stored for `node` and `key`. To clear a text field, set it to the empty string.

Only callable by the owner of `node`.

Emits the following event:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
event TextChanged(bytes32 indexed node, string indexedKey, string key);
```

