<<<<<<< HEAD
# 常见问题

## 关于ENS注册表

### 为什么域名要以散列的形式进行注册？

使用散列有两个主要原因。首先，防止对整个域名集进行简单的枚举，这有利于保护域名隐私（例如，你可以在一个项目公开发布之前，就注册并启用相应的域名）。其次，因为散列是一个固定长度的标识字符串，可以在固定开销的合约之间轻松地传递，而且对于传递可变长度的字符串也没有问题。

### 目前有哪些钱包和DApp支持ENS ?

在[ENS的主页](https://ens.domains/)上可以查看部分已经支持ENS的钱包和DApp的列表。

### 如果我有一个ENS域名，那我可以创建自己的子域名吗？

是的！你可以创建任意子域名，并将它们的所有权分配给其他人。你甚至可以建立自己的域名注册中心！

### 如果我买了一个域名，我可以在买了之后更改这个域名指向的地址吗?

是的，你可以随时更新这个域名所指向的地址或其他资源。

### 我能在ENS注册一个自己的TLD（顶级域名）吗?

不能。我们认为ENS是DNS所占用的"全域命名空间"的一部分，所以我们尽量不去破坏这个命名空间。ENS上专用的TLD仅限于.eth（在主网上），或.eth和.test（在Ropsten测试网上），再加上一些用途比较特殊的TLD，比如那些需要进行反向查询的TLD。

此外，我们正在部署一个依赖DNSSEC的集成工具，它可以支持从大多数DNS顶级域名内导入DNS域名。有关这些计划的详情，请参阅[这篇文章](https://medium.com/the-ethereum-name-service/upcoming-changes-to-the-ens-root-a1b78fd52b38)。

### 谁控制着ENS根节点? 这给了他们什么权力?

根节点目前由一个多方签名的智能合约来控制，合约的密钥由以太坊社区中几个值得信任的个人持有。我们期望这种模式是非干涉性的，因此根节点的所有权仅用于实施域名管理方面的变更，比如引入新的TLD，或从紧急情况（如TLD注册商的关键漏洞）中恢复。

从长远来看，我们计划制定一套根节点管理程序，并由一个智能合约来执行这套程序，然后我们会把根节点的所有权转移给这个合约。

由于节点的所有者可以更改其子节点的所有权，所以根节点的所有者可以更改ENS树中的任何节点。

### ENS支持英文以外的字符吗? 支持大写字母吗? 支持所有的unicode字符吗?

由于ENS的合约只处理散列值，因此这些合约无法直接对注册时使用的字符进行限制，字符长度等限制是通过对用户提交的原始域名进行验证来实现的。

理论上来说，你可以同时注册"foo.eth"和"FOO.eth"，甚至是&lt;picture of my cat&gt;。但是，浏览器或钱包内的解析器会在解析之前，使用nameprep算法对用户输入的域名进行预处理，所以，如果一个域名不是nameprep的有效输出，那它实际上毫无用处，因为它不能被标准解析器解析。帮助用户注册域名的DApp应该使用nameprep算法对请求注册的域名进行预处理，防止用户注册无法解析的域名。

### ENS系统中并没有强制执行nameprep，这会不会导致安全、欺诈或网络钓鱼等问题?

ENS合约没有强制执行nameprep，但如前所述，解析器在解析域名之前会执行nameprep，这意味着非nameprep域名将无法被解析。

### ENS与其他命名服务(如Namecoin、Blockstack和Handshake)之间有什么区别?

ENS的首要目标是为区块链地址和分布式内容等web3资源提供分布式的、可信的域名解析，而Namecoin和Blockstack则致力于用基于区块链的替代方案来替代DNS。

Handshake的目标则是试图建立一个由区块链系统进行管理和分发的根域，并用其来替代当前的DNS根域。

## 关于.eth永久注册中心

### DApp和twitter机器人怎么知道人们在购买什么域名?

DApp和twitter机器人预置了一些常见域名的列表，列表中的域名取自英文词典和Alexa网站的前100万个互联网域名，然后通过这些列表来显示哪些常见的域名已经完成注册或续费。之所以这样做是因为，如果应用程序不显示这些域名，有一定技术能力的人可以轻松找到它们，这会让他们在域名注册这件事上，比那些不能自己编写列表和代码来检查域名的人具备太多优势。

### 为什么将可注册域名的最小长度设定为7个字符?

这是基于对常见的"高价值"短域名的非正式调查。

ENS团队目前正致力于提供更短的域名。时间安排如下:

 **2019年7月11日至8月10日**：现有项目需要3-6个字符名的预订流程。更多信息请访问[预订页面](https://reserve.ens.domains/)。

**2019年8月25日**：开始无保留拍卖3-6个字符域名。

**待定**：一般可用的3-6个字符域名自由注册。

### 什么情况下可能会导致失去域名的所有权?

永久注册中心的内部结构决定了：只要注册过程是有效的，那么域名一经注册就无法撤销。
=======
# Frequently Asked Questions

## About the ENS Registry

### Why are names registered as hashes?

Hashes are used for two main reasons. First, to prevent trivial enumeration of the entire set of domains, which helps preserve the privacy of names \(for instance, so you can register the domain for your startup before you publicly launch\). Second, because hashes provide a fixed length identifier that can easily be passed around between contracts with fixed overhead and no issues around passing around variable-length strings.

### Which wallets and DApps support ENS so far?

A partial list can be seen on [our homepage](https://ens.domains/).

### Once I own a name, can I create my own subdomains?

Yes! You can create whatever subdomains you wish, and assign ownership of them to other people if you desire. You can even set up your own registrar for your domain!

### Can I change the address my name points to after I’ve bought it?

Yes, you can update the addresses and other resources pointed to by your name at any time.

### Can I register a TLD of my own in the ENS?

No. We consider ENS to be part of the 'global namespace' inhabited by DNS, and so we do our best not to pollute that namespace. ENS-specific TLDs are restricted to only .eth \(on mainnet\), or .eth and .test \(on Ropsten\), plus any special purpose TLDs such as those required to permit reverse lookups.

In addition to that, we are deploying support for importing DNS domains from the majority of DNS top-level domains using an integration that relies on DNSSEC. For details on those plans, please read [this post](https://medium.com/the-ethereum-name-service/upcoming-changes-to-the-ens-root-a1b78fd52b38).

### Who owns the ENS rootnode? What powers does that grant them?

The root node is presently owned by a multisig contract, with keys held by trustworthy individuals in the Ethereum community. We expect that this will be very hands-off, with the root ownership only used to effect administrative changes, such as the introduction of a new TLD, or to recover from an emergency such as a critical vulnerability in a TLD registrar.

In the long term, the plan is to define a governance process for operations on the root node, and transfer ownership to a contract that enforces this process.

Since the owner of a node can change ownership of any subnode, the owner of the root can change any node in the ENS tree.

### What about foreign characters? What about upper case letters? Is any unicode character valid?

Since the ENS contracts only deal with hashes, they have no direct way to enforce limits on what can be registered; character length restrictions are implemented by allowing users to challenge a short name by providing its preimage to prove it’s too short.

This means that you can in theory register both ‘foo.eth’ and ‘FOO.eth’, or even &lt;picture of my cat&gt;.eth. However, resolvers such as browsers and wallets should apply the nameprep algorithm to any names users enter before resolving; as a result, names that are not valid outputs of nameprep will not be resolvable by standard resolvers, making them effectively useless. DApps that assist users with registering names should prevent users from registering unresolvable names by using nameprep to preprocess names being requested for registration.

### Nameprep isn’t enforced in the ENS system, is this a security/spoofing/phishing concern?

It’s not enforced by the ENS contracts, but as described, resolvers are expected to use it before resolving names. This means that non-nameprep names will not be resolvable.

### What are the differences between ENS and other naming services such as Namecoin, Blockstack, and Handshake?

ENS focuses first and foremost on providing decentralised, trustworthy name resolution for web3 resources such as blockchain addresses and distributed content, while Namecoin and Blockstack are efforts to replace DNS with a blockchain-based alternative.

Handshake also has different goals, seeking to replace the global DNS root with one governed and distributed by a blockchain system.

## About the .eth Permanent Registrar

### How do the DApp and the twitter bot know what names people are buying?

The DApp and the twitter bot have built in lists of common names, drawn from an English dictionary and Alexa’s list of top 1 million internet domain names. They use these lists to show you when common names are bought or renewed. We do this because if the app didn’t reveal these names, anyone with a little technical skill could find them out anyway, giving them an advantage over those who don’t have the capacity to build their own list and code to check names against it.

### How was the minimum character length of 7 chosen?

By an informal survey of common ‘high value’ short names.

We are currently working on making shorter names available. The timeline is as follows:

 **July 11th - August 10th 2019**: Reservation process for existing projects desiring a 3-6 character name. More information available on [the reservations page](https://reserve.ens.domains/).

**August 25th 2019**: Auctions for non-reserved 3-6 character names begin.

**TBD:** General availability of 3-6 character names.

### What kinds of behaviours are likely to result in losing ownership of a name?

The permanent registrar is structured such that names, once issued, cannot be revoked so long as an active registration is maintained.

>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb
