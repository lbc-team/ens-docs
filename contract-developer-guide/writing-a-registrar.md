# 编写注册中心

ENS中的注册中心就是一个拥有某个域名所有权的合约，并根据合约代码中定义的一组规则分配它的子域名。一个"先到先得"式的简易合约如下:

```text
contract FIFSRegistrar {
    ENS ens;
    bytes32 rootNode;

    function FIFSRegistrar(address ensAddr, bytes32 node) {
        ens = ENS(ensAddr);
        rootNode = node;
    }

    function register(bytes32 subnode, address owner) {
        var node = sha3(rootNode, subnode);
        var currentOwner = ens.owner(node);

        if (currentOwner != 0 && currentOwner != msg.sender) throw;

        ens.setSubnodeOwner(rootNode, subnode, owner);
    }
}
```

你可能希望通过设置自定义规则为用户分配新域名，至于设置什么样的规则，这完全由你来决定。

你还应该记住，只要你保留父域名的所有权（无论是直接的还是通过另一个合约的方式），你的用户就无法保证他们拥有的子域名的所有权不会被你收回，也无法保证他们关于子域名的设置不会被你更改。你可能打算将域名的所有权转让给一个能够限制你控制它的合约中。有关示例，请参见[ENSNow](https://github.com/ensdomains/subdomain-registrar)。

## 进一步查看

* [ENS讨论区](https://discuss.ens.domains/)
* [ENS在线支持](https://gitter.im/ethereum/go-ethereum/name-registry)