# Writing a Resolver
<<<<<<< HEAD
# 编写解析器

Resolvers are specified in [EIP137](https://github.com/ethereum/EIPs/issues/137). A resolver must implement the following method:
[EIP137](https://github.com/ethereum/EIPs/issues/137)中描述了解析器的详细信息。一个解析器必须实现以下方法：
=======

Resolvers are specified in [EIP137](https://github.com/ethereum/EIPs/issues/137). A resolver must implement the following method:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function supportsInterface(bytes4 interfaceID) constant returns (bool);
```

`supportsInterface` is defined in [EIP165](https://github.com/ethereum/EIPs/issues/165), and allows callers to determine if a resolver supports a particular record type. Record types are specified as a set of one or more methods that a resolver must implement together. Currently defined record types include:
<<<<<<< HEAD
`supportsInterface`在[EIP165](https://github.com/ethereum/EIPs/issues/165)中定义，它可以被调用者用来确定一个解析器是否支持某个特定的记录类型。记录类型是指解析器必须一起实现的一个或多个方法的集合。当前定义的记录类型包括:
=======
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

| Record type | Function\(s\) | Interface ID | Defined in |
| :--- | :--- | :--- | :--- |
| Ethereum address | addr | 0x3b3b57de | [EIP137](https://github.com/ethereum/EIPs/issues/137) |
| ENS Name | name | 0x691f3431 | [EIP181](https://github.com/ethereum/EIPs/issues/181) |
| ABI specification | ABI | 0x2203ab56 | [EIP205](https://eips.ethereum.org/EIPS/eip-205) |
| Public key | pubkey | 0xc8690233 | [EIP619](https://github.com/ethereum/EIPs/pull/619) |
| Text records | text | 0x59d1d43c | [EIP634](https://eips.ethereum.org/EIPS/eip-634) |
| Content hash | contenthash | 0xbc1c58d1 |  |
<<<<<<< HEAD
| 记录类型 | 函数 | 接口ID | 定义文档 |
| :--- | :--- | :--- | :--- |
| 以太坊地址 | addr | 0x3b3b57de | [EIP137](https://github.com/ethereum/EIPs/issues/137) |
| ENS域名 | name | 0x691f3431 | [EIP181](https://github.com/ethereum/EIPs/issues/181) |
| ABI规范 | ABI | 0x2203ab56 | [EIP205](https://eips.ethereum.org/EIPS/eip-205) |
| 公钥 | pubkey | 0xc8690233 | [EIP619](https://github.com/ethereum/EIPs/pull/619) |
| 文本记录 | text | 0x59d1d43c | [EIP634](https://eips.ethereum.org/EIPS/eip-634) |
| 内容散列 | contenthash | 0xbc1c58d1 |  |

`supportsInterface` must also return true for the interfaceID value 0x01ffc9a7, which is the interface ID of `supportsInterface` itself.
`supportsInterface`本身的接口ID为0x01ffc9a7，当interfaceID值为0x01ffc9a7时，`supportsInterface`也必须返回true。

Additionally, the `content` interface was used as a defacto standard for Swarm hashes, and has an interface ID of 0xd8389dc5. New implementations should use `contenthash` instead.
此外，`content`接口被用作Swarm散列事实上的标准，它的接口ID为0xd8389dc5。现在新的内容散列应该使用`contenthash`接口来实现。

## Example Resolver
## 解析器示例

A simple resolver that supports only the addr type might look something like this:
一个只支持addr类型的简易解析器，看起来就像这样:
=======

`supportsInterface` must also return true for the interfaceID value 0x01ffc9a7, which is the interface ID of `supportsInterface` itself.

Additionally, the `content` interface was used as a defacto standard for Swarm hashes, and has an interface ID of 0xd8389dc5. New implementations should use `contenthash` instead.

## Example Resolver

A simple resolver that supports only the addr type might look something like this:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
contract SimpleResolver {
    function supportsInterface(bytes4 interfaceID) constant returns (bool) {
        return interfaceID == 0x3b3b57de;
    }

    function addr(bytes32 nodeID) constant returns (address) {
        return address(this);
    }
}
```

<<<<<<< HEAD
这个简易解析器总是返回自己的地址作为所有查询的结果。尽管解析器采用不同的机制应该返回相同的结果，但实际上解析器可以按照需要采用任何机制来确定返回的结果，并且应该尽可能降低gas费用。
=======
This trivial resolver always returns its own address as answer to all queries. Practical resolvers may use any mechanism they wish to determine what results to return, though they should be constant, and should minimise gas usage wherever possible.
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

