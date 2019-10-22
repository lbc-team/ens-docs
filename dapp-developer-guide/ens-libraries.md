# ENS库

ENS支持多种主流语言。如果有些你知道的ENS库没有在本页面陈列出来，请[向我们发起PR（pull request）](https://github.com/ensdomains/ens/compare)

### Javascript

* [ethereum-ens](https://www.npmjs.com/package/ethereum-ens)，由ENS开发人员维护
* [ethjs-ens](https://www.npmjs.com/package/ethjs-ens)
* [ethers.js](https://github.com/ethers-io/ethers.js)
* [web3.js](https://web3js.readthedocs.io/en/1.0/web3-eth-ens.html)

#### 我应该使用哪个Javascript库?

如果您用过web3.js，而且不需要创建子域名、转移所有权或更新解析器等功能，那么你可以使用web3.js库中对ENS的支持。

如果您用过ethjs，而且只需要对ENS域名进行正向和反向解析，那么你可以使用ethjs库中对ENS的支持。

如果你用过ethers.js，而且只需要对ENS域名进行正向和反向解析，那么你可以使用ethers.js库中对ENS的支持。

其他情况下，建议使用ethereum-ens库。

#### 直接访问智能合约

当前所有的ENS智能合约都是[Truffle](https://truffleframework.com)项目，而且是作为npm模块（比如：[ENS注册表](https://www.npmjs.com/package/@ensdomains/ens)）发布的。如果你想访问以上库都不支持的函数，可以通过npm安装智能合约。

* [解析器](https://www.npmjs.com/package/@ensdomains/resolver) = `Resolver.sol`包含了所有的函数名（包括已经弃用的函数，比如：`content`）
* [永久注册器](https://www.npmjs.com/package/@ensdomains/ethregistrar)
* [注册表和旧注册器](https://www.npmjs.com/package/@ensdomains/ens)

字节码和ABI是预编译的，可以从模块中导入。

```text
import { abi , bytecode } from '@ensdomains/ens/build/contracts/ENS.json'
```

### Java

* [web3j](https://github.com/web3j/web3j)

### Python

* [web3.py](https://github.com/ethereum/web3.py) - also see [web3.py ENS docs](https://web3py.readthedocs.io/en/stable/ens_overview.html)

### Go

* [go-ens](https://github.com/wealdtech/go-ens)

### Command-line

* [ethereal](https://github.com/wealdtech/ethereal)
* [ethers-ens](https://github.com/ethers-io/ethers-ens)

### Delphi

* [delphereum](https://github.com/svanas/delphereum)

## 后续工作

选定使用哪个库以后，就可以通过阅读[ENS的使用](working-with-ens.md)，来学习如何在应用程序中使用你选择的ENS库。

