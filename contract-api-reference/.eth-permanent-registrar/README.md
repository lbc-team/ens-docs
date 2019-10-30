<<<<<<< HEAD
# .eth永久注册中心

永久注册中心是负责顶级域名.eth的分配和更新的智能合约。目前使用旧版的维克里拍卖的方式进行域名分配和注册。新版注册中心旨在简化这一过程，同时为未来的改进提供一个稳定的平台，这里的稳定指的是使API的变化最小化。（LBB译注：ENS团队已经在2019年5月4日部署了新版永久注册中心）

永久注册中心的计划部署日期是2019年5月4日。这里只是提供初步的文档，目的是为一些开发者提供一个起点，这些开发者希望在他们的平台或工具中集成.eth域名注册和更新功能。

## 系统架构

永久注册中心的代码可以在[ethregistrar](https://github.com/ensdomains/ethregistrar)仓库中找到。

注册中心本身称为基本注册中心（[BaseRegistrar](registrar.md)）。该合约实现了以下几个关键功能:

* 注册中心的所有者可增减"控制器（controller）"。
* 控制器可以注册新域名和延长现有域名的有效期，但不能更改现有域名的所有权或缩短其过期时间。
* 域名所有者可以将所有权转移到另一个地址。
* 如果域名所有者丢失了所有权，他们可以在ENS注册表中收回所有权。
* 在1年过渡期内，原注册中心的域名所有者可将其迁移至新版注册中心。迁移域名时，他们的押金将全部退还给他们。

此外，注册中心是一个符合[ERC721](https://github.com/ensdomains/ens/blob/master/docs/ethregistrar.rst#id3)标准的非同质化代币（NFT）合约，也就是说.eth的域名可以像其他NFT一样被转移。

用户在转移域名所有权，或在ENS域名注册表恢复所有权时（例如，一个域名的所有权以前被转移到一个合约中），将直接与此 合约进行交互。用户还可以通过域名查询来查看其注册状态和到期日期。对于初始注册和续期，用户需要与控制器合约进行交互。

这种关注点分离的方式减少了注册中心受到的攻击，并在注册中心存在的情况下为用户的域名所有权提供了保证。另外，它还规定了注册和续期机制的改进和创新。将来的更新中可能会将根域名和.eth顶级域名的所有权转移到一个受限权限的合约中，从而防止根密钥持有者干预.eth的注册，同时不影响控制器的持续更新。

最初部署的控制器叫[ETHRegistrarController](controller.md)，该控制器给长度为7个及更多字符的域名提供了一个简单的注册和续期机制，实现了以下功能:

* 控制器的所有者可以设定价格预言机合约，该合约根据域名及其注册或续期的时长来确定注册和续期的价格。
* 控制器的所有者可将已收取的全部款项取回到他的账户。
* 用户可以通过" 委托-揭示"的过程注册新域名，并支付适当的注册费。
* 用户可以通过支付适当的费用来续期域名，而且对于某个域名，除了域名所有者，其他用户也可以为这个域名续费。另外，续期的时长也没有限制。

由于任何人都可以为某个域名续费，如果一个用户非常关注某个与其交互的域名的有效期，那他可以在必要时通过自己付费来确保该域名保持注册状态。

由于可以进行任意时长的续期，用户可以"锁定"理想的注册费（LBB译注：这里的理想主要是针对以太币来说的，因为续费价格只是相对美元稳定，而相对以太币则不确定）。通过长时间的续期，可以实现域名的"长期有效"，保证了由智能合约所保障的域名稳定性。

用户在注册7个字符以上的域名，以及续期任意域名时，都需要与此控制器进行交互。等到域名长度限制放宽以及短域名初次分配的拍卖流程完成后，本控制器会发布一个修订版本，让短域名也可以注册。

起初，将部署一个独立的定价预言机合约，即[StablePriceOracle](https://github.com/ensdomains/ethregistrar/blob/master/contracts/StablePriceOracle.sol)。该合约的所有者能够以美元为单位分别给不同长度的域名设定价格，并使用USD:ETH价格预言机按照当前汇率将该价格转换成以太币（Ether）。用户注册某个域名时不必直接与这个预言机交互，因为确定该域名注册或续期价格的功能已经内置在了控制器合约里。

## 发现

找到新版注册中心的地址很容易：在ENS注册表中通过调用`owner(namehash('eth'))`来查询"eth"域名的所有者。

为了支持发现控制器的地址，ENS通过[EIP1844](https://eips.ethereum.org/EIPS/eip-1844)支持接口发现。该机制允许通过以下过程来查询实现了所需接口的合约地址：

1. 设置`node = namehash('eth')`。
2. 通过调用ENS注册表上的`resolver(node)`来查找ENS解析器。
3. 调用该解析器上的`interfaceImplementer(node, interfaceId)`方法，其中`interfaceId`是你所需接口的[EIP165](https://eips.ethereum.org/EIPS/eip-165)接口ID。

以下是目前为.eth永久注册中心定义的接口ID：

* `0x6ccb2df4`，[ERC721](https://eips.ethereum.org/EIPS/eip-721)（NFT）的接口ID，它返回注册中心本身的地址（也可以通过地址查找或查找'.eth'的所有者来获取）。
* `0x018fac06`，控制器的接口ID，返回控制器的地址。
* `0x7ba18ba1`，旧版注册中心的迁移功能的接口ID，返回旧版注册中心地址。
=======
# .eth Permanent Registrar

The Permanent Registrar is the code that will govern allocation and renewal of names in the .eth TLD. Presently this is governed by the legacy auction registrar, which uses a Vickery Auction process to allocate names to registrants. The new registrar aims to simplify this process, while providing a stable platform for future improvements that will minimise API changes.

The target deployment date for the permanent registrar is the 4th of May, 2019. Documentation provided here is preliminary, and intended to provide developers wanting to integrate .eth domain registration or renewal into their platforms or tools with a starting point.

## System architecture

Code for the permanent registrar can be found in the [ethregistrar](https://github.com/ensdomains/ethregistrar) repository.

The registrar itself is called [BaseRegistrar](registrar.md). This contract implements several key functions:

* The owner of the registrar may add and remove 'controllers'.
* Controllers may register new domains and extend the expiry of \(renew\) existing domains. They can not change the ownership or reduce the expiration time of existing domains.
* Name owners may transfer ownership to another address.
* Name owners may reclaim ownership in the ENS registry if they have lost it.
* Owners of names in the legacy registrar may transfer them to the new registrar, during the 1 year transition period. When they do so, their deposit is returned to them in its entirety.

In addition, the registrar is an [ERC721](https://github.com/ensdomains/ens/blob/master/docs/ethregistrar.rst#id3) compliant nonfungable token contract, meaning that .eth registrations can be transferred in the same fashion as other NFTs.

Users will interact directly with this contract when transferring ownership of names, or recovering ownership in the ENS registry of a name \(for example, one whose ownership was previously transferred to a contract\). Users can also query names to see their registration status and expiry date. For initial registration and for renewals, users will need to interact with a controller contract.

This separation of concerns reduces the attack surface for the registrar, and provides users with guarantees of continued ownership of a name so long as the registrar is in place. Simultaneously, it provides for improvement and innovation over registration and renewal mechanisms. A future update may transfer ownership of the root and the .eth TLD to a contract with restricted permissions, thus preventing even the root keyholders from modifying a .eth registraion, while still providing for future updates to the set of controllers.

Initially, one controller is implemented, the [ETHRegistrarController](controller.md). This controller provides a straightforward registration and renewal mechanism for domains that are 7 or more characters long, implementing the following functionality:

* The owner of the controller may set a price oracle contract, which determines the cost of registrations and renewals based on the name and the desired registration or renewal duration.
* The owner of the controller may withdraw any collected funds to their account.
* Users can register new names using a commit/reveal process and by paying the appropriate registration fee.
* Users can renew a name by paying the appropriate fee. Any user may renew a domain, not just the name's owner. There is no limit on renewal duration.

By allowing anyone to renew a domain, users concerned with the longevity of a name they interact with can ensure it remains registered by paying for the registration themselves, if necessary.

By allowing renewal for arbitrarily long periods of time, users can 'lock in' a desirable registration fee. Names can be made effectively 'immortal' by renewing for a long period, ensuring that stability of the name can be guaranteed by smart contract.

Users will interact with this controller for registering domains 7+ characters long, and for renewing any domain. After the restriction on name length has been relaxed and an auction has been conducted for initial allocation of shorter names, a revised version of this controller will be deployed, allowing registration of shorter names as well.

Initially, a single pricing oracle will be deployed, the [StablePriceOracle](https://github.com/ensdomains/ethregistrar/blob/master/contracts/StablePriceOracle.sol). This contract permits its owner to set prices in USD for each permitted name length, and uses a USD:ETH price oracle to convert those prices into Ether at the current rate. Users will not have to interact with this oracle directly, as the controller provides functionality to determine pricing for a candidate name registration or renewal.

## Discovery

Finding the address of the new registrar is straightforward: look up the owner of the domain 'eth' in ENS, by calling `owner(namehash('eth'))` on the ENS registry.

In order to support discovering the address of the controller, ENS supports interface discovery via [EIP 1844](https://eips.ethereum.org/EIPS/eip-1844). This mechanism permits looking up the address of the contract that implements a required interface via the following process:

1. Set `node = namehash('eth')`.
2. Look up the ENS resolver by calling `resolver(node)` on the ENS registry.
3. Call the `interfaceImplementer(node, interfaceId)` method on that resolver, where `interfaceId` is the [EIP 165](https://eips.ethereum.org/EIPS/eip-165) interface ID of the interface you need.

The following interface IDs are presently defined for the .eth permanent registrar:

* `0x6ccb2df4`, the interface ID for [ERC721](https://eips.ethereum.org/EIPS/eip-721) \(NFTs\). This returns the address of the registrar itself \(which can also be fetched by doing an address lookup, or by looking up the owner of '.eth'.
* `0x018fac06`, the interface ID for the controller. Returns the controller's address.
* `0x7ba18ba1`, the interface ID for the legacy registrar's migration function. Returns the legacy registrar's address.
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

