# ENS部署情况

如果您使用的是[ENS库](dapp-developer-guide/ens-libraries.md)，它会自动连接所需的ENS部署地址。如果您需要直接与ENS交互，下面介绍的是当前所支持的部署情况。

以下是ENS注册表的官方部署地址:

* 主网络，部署在 [0x314159265dd8dbb310642f98f50c066173c1259b](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b#code)
* Ropsten测试网络，部署在 [0x112234455c3a32fd11230c42e7bccd4a84e02010](https://ropsten.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
* Rinkeby测试网络，部署在 [0xe7410170f87102df0055eb195163a03b7f2bff4a](https://rinkeby.etherscan.io/address/0xe7410170f87102df0055eb195163a03b7f2bff4a)
* Goerli测试网络，部署在 [0x112234455c3a32fd11230c42e7bccd4a84e02010](https://goerli.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)

主网上部署了以下几个顶级域名的注册器：

* .eth，使用的是拍卖式的注册器。（译注：ENS目前已经进行了注册器合约升级，7个及以上字符的域名是自由注册，3-6个字符的短域名则是分别设定的拍卖周期。）
* .xyz，通过与DNS集成的方式来进行注册。
* .luxe，通过自定义集成的方式来进行注册，它允许拥有.luxe这一DNS域名的人使用ENS。

所有的测试网络都部署了.test注册器，每个人都可以注册.test域名用作测试，.test域名的有效期是28天。

此外，Ropsten测试网络还部署了.eth注册器用于测试。
