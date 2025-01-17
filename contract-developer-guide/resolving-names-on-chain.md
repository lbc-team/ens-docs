# 链上域名解析

目前还没有用于链上解析的可靠库，但是ENS解析非常简单，不需要库也可以轻松完成。首先，我们定义了一些只包含必要方法的简化接口，:

```text
contract ENS {
    function resolver(bytes32 node) constant returns (Resolver);
}

contract Resolver {
    function addr(bytes32 node) constant returns (address);
}
```

对于解析，只需要ENS合约中的`resolver`函数，其他方法可以用来在拥有域名的合约中查找所有者和更新ENS。

根据这些定义，查询一个给定节点散列的域名非常简单：

```text
contract MyContract {
    ENS ens;

    function MyContract(address ensAddress) {
        ens = ENS(ensAddress);
    }

    function resolve(bytes32 node) constant returns(address) {
        var resolver = ens.resolver(node)
        return resolver.addr(node);
    }
}
```

虽然合约可以将可读域名转换成节点散列，但考虑到处理节点散列会更加便利和高效，我们强烈建议在合约中使用节点散列来取代域名，同时将规范化域名这项复杂工作交给链下的调用者来执行。如果某个合约总是解析一些相同的域名，则可以将这些域名转换为节点散列并作为常量存储在合约中。

