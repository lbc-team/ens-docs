# Writing a Registrar
# 编写注册中心

A registrar in ENS is simply any contract that owns a name, and allocates subdomains of it according to some set of rules defined in the contract code. A trivial first in first served contract is demonstrated below:
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

You may wish to set custom rules for the allocation of new names to your users; the rules you set are entirely up to you.
你可能希望通过设置自定义规则为用户分配新域名，至于设置什么样的规则，这完全由你来决定。

You should also bear in mind that as long as you retain ownership of the parent name - either directly or through another contract - your users have no guarantee that you will not take back ownership of their names and change what they resolve to. You may wish to consider committing ownership of the name to a contract that restricts your ability to control it. For an example of this, see [ENSNow](https://github.com/ensdomains/subdomain-registrar).  
你还应该记住，只要你保留父域名的所有权（无论是直接的还是通过另一个合约的方式），你的用户就无法保证他们拥有的子域名的所有权不会被你收回，也无法保证他们关于子域名的设置不会被你更改。你可能打算将域名的所有权转让给一个能够限制你控制它的合约中。有关示例，请参见[ENSNow](https://github.com/ensdomains/subdomain-registrar)。

