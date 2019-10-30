<<<<<<< HEAD
# 关于永久注册中心的常见问题

## 关于ENS永久注册中心

### 这里的"永久"是什么意思，"永久"是多长时间?

我们打算在发现（或确定）它有漏洞之前，继续让永久注册中心工作。尽管可以根据需要更改注册和续期费用，但目前没有更换永久注册中心的计划，这一点与临时注册中心自推出两年后被更换的计划是不一样的。（LBB译注：ENS起初在2017年部署的注册中心是临时的，并在两年后的2019年5月4日正式升级合约，部署了新版ENS注册中心，简化注册流程，提供年付租金的方式购买.eth域名，而之前的.eth域名所有者需要迁移到新版ENS合约。）

### 永久性注册中心采用什么样的注册方式?

永久注册中心采用FIFS（先到先得）注册方式，取代了临时注册中心使用的维克里拍卖方式。

### 在永久注册中心注册一个域名需要多少次交易?

在永久注册中心注册一个域名需要进行两笔交易（委托和揭示），这比之前临时注册中心所需的交易要少一笔。

### 在永久注册中心注册一个域名需要多长时间?

注册一个域名只需不到5分钟，再也不需要像在临时注册中心拍卖那样等待5天!

### 要想继续使用现有的ENS域名，需要做些什么?

如果你有一个.eth的域名，你将有一年的时间（2019年5月4日到2020年5月4日）把你的域名迁移到新的注册中心，迁移后的域名从迁移日期起可以免费使用到2020年5月4日。

要想在2020年5月4日以后继续使用你的域名，就需要给它续期，续期费用是每年5美元。如果不迁移和续费，在2020年5月4日以后该域名将开放给其他人注册。

### 什么时候可以将自己的域名从临时注册中心迁移至永久注册中心?

从现在到2020年5月之前，你随时可以将在临时注册中心注册的域名迁移至永久注册中心。

### 如果我有多个不同的ENS域名，它们的续期时间不同怎么办?

你随时可以续期当前处于有效期内的域名。

### 如果我在迁移期间没有完成ENS域名迁移，会发生什么?

到时候任何人都可以重新注册这个域名，不过你只要按一下"Release"按钮，仍然可以把锁定的ETH收回。

### 我是不是必须通过续期来保留域名的所有权?

是的！一旦你将你的域名迁移到永久注册中心，你必须支付一笔费用来保留它。在域名有效期内随时可以续费。

注意：为简单起见，ENS Dapp初期只允许每年续费一次。基础智能合约的续费周期是以秒为单位来计算的。

### 如何续费?

任何人都可以在任意时间通过支付所需的费用来延长任何现有域名的有效期。

续期的时间没有上限，但有28天的最短期限。

### 其他人能在我的域名有效期结束时获取我的域名吗?

在域名的有效期内，你可以随时可以为它续费，所以，最好在你的域名到期前就进行续费，以此防止别人注册它。

你的域名到期后还有50天的"宽限期"，你可以在宽限期内续费以保留所有权。

### 每年的续期费用是多少?

对于7个及以上字符的域名，每年的费用为5美元。短域名启用后，会以更高的价格来续期。续费使用ETH进行支付，ETH和美元之间的汇率由DAI USD自动设定。

### 续期的费用怎么办?我可以收回它们吗?

与临时注册中心锁定并保留押金的形式不同，永久注册中心的续期费用是消费，不能收回。

### ENS团队将如何管理和使用这些资金?会不会成立基金或是有公开的监督机制?

最初，资金将被发送到ENS根域（一个多方签名的智能合约），以便由密钥的持有者们决定如何分配资金。我们正在考虑其他长期性的选择，比如资助核心ENS团队，以及其他基于ENS的团队。另外还有一些税收方面的考虑。

### 如何使用这些来自续费收入的资金?

最终要由密钥持有者们来分配资金，而且我们希望他们能够资助ENS的生态系统项目。如果可用资金超出ENS生态系统的合理需求，我们希望其他以太坊项目也能受益于这些资金。

### 从哪里可以管理我的ENS域名?

ENS Listing网站上有一个[操作接口](https://enslisting.com/manage/home)。我们将很快为Dapp添加支持。（LBB译注：官方[ENS管理接口](https://app.ens.domains/)也支持ENS管理，并且操作界面更为人性化）

### 我可以在NFT交易所交易ENS域名吗?

是的，.eth域名可以作为NFT代币被交易。（LBB译注：NFT，Non-Fungible Token，直译为不可替代的代币或非同质代币，是一种唯一的、不可拆分的代币，比如，以太坊中的ERC721标准就是NFT的一种标准）

### 如何将永久注册表中注册的域名转移给其他人?

你可以使用[ENS管理器接口](https://manager.ens.domains/)，或使用其他支持NFT的工具来实现转移。

### 子域名的操作方式还和以前一样吗?

只有.eth这一顶级域名的注册和续费过程发生了变化，域名解析和其他域名的管理保持不变。

### 除了注册费之外，还有什么因素可以防止大规模抢注域名?

大规模抢注域名的成本是唯一的限制因素。

### 控制器是什么？

这是在永久注册中心上才出现的新概念。域名所有者可以设置其他的地址作为控制器来委托域名的管理，以便非所有者可以更改域名的解析器和设置其地址等。（LBB译注：控制器可以是一个普通账户，也可以是一个合约，将合约作为控制器可以极大地丰富域名的管理方式，进而丰富DApp应用的）
=======
# Permanent Registrar Frequently Asked Questions

## About the ENS Permanent Registrar

### When you say ‘Permanent’ what do you mean, i.e how ‘permanent’ is ‘permanent’?

We intend for the permanent registrar to run until a deficiency is detected and/or determined. Unlike the interim registrar, which was intended to be replaced after two years, there are no plans to replace the permanent registrar - though changes may be made to registration and renewal fees as needed.

### What registration method does the permanent registrar use?

The permanent registrar uses a first-in-first-served \(FIFS\) registration system. It replaces the Vickery auction used in the interim registrar.

### How many transactions are required to register a name using the permanent registrar?

The permanent registrar uses two transactions \(register and reveal\) to register a name. This is one fewer transaction than the interim registrar required.

### How long does it take to register a name using the permanent registrar?

It takes less than 5 minutes to register a name. No more waiting 5 days, like the interim auction required!

### Do we need to do anything to ensure continued use of existing ENS names?

If you have a .eth name, you will have a year \(May 4 2019 to May 4 2020\) to migrate your name to the new registrar. Migrated names are renewed for free from the date of migration until May 4, 2020.

In order to retain your name past May 4, 2020, you will need to renew your name at a cost of $5/name/year. If you don't migrate or renew, the name will become available for registration by others.

### When can I migrate my name from the interim registrar to the permanent registrar?

You can migrate a name registered using the interim registrar to the permanent registrar any time between now and May 3, 2020.

### What happens if I have several ENS names with different renewal dates?

You can renew any existing name at any time.

### What happens if I fail to migrate ENS names within the migration period?

Anyone can take ownership of the name, though you can always get your locked ETH back by pressing “Release” button on the manager.

### Do I have to renew my name to keep it?

Yes! Once you migrate your name to the permanent registrar, you will have to pay a fee to retain it. You can renew your name for any period of time at any time.

Note: For simplicity, the ENS Dapp initially only allows renewals on an annual basis. The underlying smart contracts support renewal periods defined in seconds.

### How do renewals work?

Anyone can extend the expiry date of any existing name by paying the required fee, at any time.

There is no maximum limitation of the renewal duration but there is a minimum renewal period of 28 days.

### Can someone grab my domains at the end of my subscription period?

You can renew your name at any time during the period you own it. Making sure you renew before the name expires will prevent someone else from registering the name.

There is also a 'grace period' of 90 days after your name expires. You can renew the name to retain ownership of it during the grace period.

### How much will the yearly renewals cost?

Yearly renewals cost $5/year for names that are 7 characters or longer. Shorter names will renew at higher prices once they become available. Fees are paid in ETH. The ETH/USD exchange rate is set by the DAI USD oracle.

### What happens to the renewal fees? Do I get them back?

Rather than being locked and held, as in the interim registrar, renewal fees in the permanent registrar are spent. You will not get them back.

### How will ENS team manage and spend the funds? Will there be a foundation or transparent oversight?

Initially, funds will be sent to the ENS root multisig, for the keyholders to determine how funds get allocated. We're considering other options for the long-term, such as funding the core ENS team, as well as other teams building on ENS. There are also tax considerations to address.

### How are funds from rental income used?

It's ultimately up to the keyholders to allocate the funds. We hope they will fund ENS ecosystems projects. If available funds exceed the reasonable needs of the ENS ecosystem, we hope other Ethereum projects will receive them.

### Where can I manage all my ENS names?

ENS Listing has [an interface for this here](https://enslisting.com/manage/home). We will be adding support for this to our manager Dapp soon.

### Can I trade ENS domains on NFT exchanges?

Yes, .eth names are tradeable as NFT tokens.

### How can I transfer domains registered in the permanent registry to someone else?

You can do this using [our manager interface here](https://manager.ens.domains/), or using any tool with NFT support.

### Are subdomains handled the same way as before?

Only the registration and renewal process for .eth domains has changed. Resolution, and management of other names remains the same.

### What prohibits large scale domain grabbing besides registration fees?

The cost of doing this is the only limitation in place.

### What is a controller?

This is a new concept introduced by the permanent registrar. The domain name owner can set different address as a controller to delegate the management of domain so that a non-owner can change the name’s resolver and set its address, etc.
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

