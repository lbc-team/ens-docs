<<<<<<< HEAD
# ENS库

ENS支持多种主流语言。如果有些你知道的ENS库没有在本页面陈列出来，请[向我们发起PR（pull request）](https://github.com/ensdomains/ens/compare)。

### Javascript

* [ethereum-ens](https://www.npmjs.com/package/ethereum-ens)，由ENS开发者维护
=======
# ENS Libraries

ENS support is available in many popular languages. If you know of a library that is not listed here, please [send us a PR](https://github.com/ensdomains/ens/compare).

### Javascript

* [ethereum-ens](https://www.npmjs.com/package/ethereum-ens), maintained by the ENS developers
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb
* [ethjs-ens](https://www.npmjs.com/package/ethjs-ens)
* [ethers.js](https://github.com/ethers-io/ethers.js)
* [web3.js](https://web3js.readthedocs.io/en/1.0/web3-eth-ens.html)

<<<<<<< HEAD
#### 我应该使用哪个Javascript库?

如果你用过web3.js，并且不需要使用创建子域名、转移所有权或更新解析器等功能，那么你可以使用web3.js库中对ENS的支持。

如果你用过ethjs，并且只需要对ENS域名进行正向和反向解析，那么你可以使用ethjs库中对ENS的支持。

如果你用过ethers.js，并且只需要对ENS域名进行正向和反向解析，那么你可以使用ethers.js库中对ENS的支持。

其他情况下，建议使用ethereum-ens库。

#### 直接访问智能合约

当前所有的ENS智能合约都是[Truffle](https://truffleframework.com)项目，而且是作为npm模块（比如：[ENS注册表](https://www.npmjs.com/package/@ensdomains/ens)）发布的。如果你想访问以上库都不支持的函数，可以通过npm安装智能合约。

* [解析器](https://www.npmjs.com/package/@ensdomains/resolver) = `Resolver.sol`包含了所有的函数名（包括已经弃用的函数，比如：`content`）
* [永久注册中心](https://www.npmjs.com/package/@ensdomains/ethregistrar)
* [注册表和旧注册中心](https://www.npmjs.com/package/@ensdomains/ens)

字节码和ABI是预编译的，可以从模块中导入。
=======
#### Which Javascript library should I use?

If you are already using web3.js, and do not require functionality such as creating subdomains, transferring ownership, or updating resolvers, use web3.js's ENS support.

If you are already using ethjs, and only need to do forward and reverse resolution of ENS names, use ethjs's ENS support.

If you are already using ethers.js, and only need to do forward and reverse resolution of ENNS names, use ethers.js's ENS support.

Otherwise, use ethereum-ens.

#### Accessing smart contracts directly

All the ENS smart contracts are [Truffle](https://truffleframework.com) projects and published as npm modules \(eg: [ENS registry](https://www.npmjs.com/package/@ensdomains/ens)\). If you want to access to functions none of the above libraries support you can install the smart contracts via npm.

* [Resolver](https://www.npmjs.com/package/@ensdomains/resolver) = `Resolver.sol` contains all function names including the deprecated functions \(eg: `content`\)
* [Permanent Registrar](https://www.npmjs.com/package/@ensdomains/ethregistrar)
* [Registry and old Registrar](https://www.npmjs.com/package/@ensdomains/ens)

The bytecode and abi are precompiled and can be imported from the modules.
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

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

<<<<<<< HEAD
## 后续工作

选定使用哪个库以后，就可以通过阅读[ENS的使用](working-with-ens.md)，来学习如何在应用程序中使用你选择的ENS库。
=======
## Next Steps

Once you've chosen a library, read [Working with ENS](working-with-ens.md) to learn how to use your chosen ENS library in your application.
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

