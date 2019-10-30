<<<<<<< HEAD
# 在DApp中启用ENS

在应用程序中支持ENS需要实现几个关键功能，每个功能都可以独立实现。理想的情况是支持ENS的全部功能，但即使只支持最基本的功能也会让用户从中获益匪浅。下面的文章中，我们概述了支持ENS的三个层级。第一层级很容易实现，并且是ENS提供给用户的主要功能，而第二层级和第三层级可为用户提供更多的功能，有助于提高DApp的可用性和用户与DApp交互的体验。

## 1. ENS域名解析

在应用程序中支持ENS的第一步是使应用程序理解ENS域名，并实现在那些用来输入接收地址的地方也可以输入ENS域名。要了解如何做到这一点，请参阅[域名解析](resolving-names.md)。

当用户输入ENS域名而不是地址时，最好让应用程序记住ENS域名，而不是这个域名解析到的地址。这样用户在更新自己的ENS域名后，他们用这个域名登录的应用就会自动解析到用户的新地址。同样的道理，如果你访问的网站更换了服务器IP地址，你肯定是希望浏览器把你带到这个网站的新IP地址上。

如果你的应用程序需要处理用户的资产等关键资源，你可能希望跟踪域名解析到的地址，并在地址更改时提示用户，以确认用户知道地址的变化。

你的应用程序支持ENS域名以后，就不需要用户复制粘贴或是直接输入冗长晦涩的以太坊地址。尤其是直接输入以太坊地址，很容易导致输入错误和资产损失。

## 2. 支持反向解析

支持ENS的第二个层级是指：在程序中本来显示地址的地方可以显示出对应的ENS域名。

如果用户在你的DApp中输入了ENS，你应该保存这个域名，并将这个域名显示在那些本来要向用户显示地址的地方。

如果用户输入了一个地址，或是从其他地方收到一个地址，你可以通过执行[反向解析](resolving-names.md#fan-xiang-jie-xi)来显示ENS域名。反向解析支持查询地址的规范化域名，并在需要时显示该域名。如果查询不到对应的规范化域名，那应用程序可以像原来那样直接显示地址。

通过支持反向解析，可以使用户更容易地识别与他们进行交互的帐户，并将这些账户与可读且相对短小的域名关联起来，而不是让用户面对冗长晦涩的以太坊地址。

## 3. 让用户自定义域名

全面支持ENS的最后一步是促进ENS域名与应用程序内置资源之间的关联。这可以通过两种形式来实现:

### 域名注册

先给你的产品绑定ENS域名并允许用户轻松地注册子域名，通过这种方式可以为用户提供一种简单的命名方法，用来命名那些在你的DApp中创建的资源。例如，假设你的DApp是一个加密货币钱包，你可以让用户轻松地获得一个形如 _theirname.yourwallet.eth_ 的ENS域名，使用户更容易把自己的钱包名告诉别人。

要了解如何实现这项功能，请参阅在"智能合约开发者指南"部分中的"[编写一个注册中心](../contract-developer-guide/writing-a-registrar.md)"一文。

### 域名更新

通过为用户提供一种简便的域名更新方式，以便他们将自己的域名更新并指向你的DApp内的资源。要了解如何实现这项功能请参阅[域名管理](managing-names.md)。

## 将支持ENS的应用告诉我们

如果你的应用程序已经支持使用ENS，请通过电子邮件[nick@ens.domains](mailto:nick@ens.domains)告诉我们；我们会把你的应用程序添加到[我们的主页](https://ens.domains/)。
=======
# ENS Enabling your DApp

ENS integration in an application encompasses several critical features, each of which can be implemented independently. While comprehensive ENS integration is ideal, even basic support can be a huge benefit to users. Below, we outline three levels of ENS integration. Level 1 is easily achieved and provides high impact for users, while levels 2 and 3 provide more functionality to your users, improving your DApp's usability and your users' experience interacting with your DApp.

## 1. Resolving ENS names

The first step to supporting ENS in your application is making your application understand ENS names, and accepting them anywhere an address is accepted. To understand how to do this, see [Resolving Names](resolving-names.md).

If possible, when a user enters an ENS name instead of an address, remember the ENS name, not the address it currently resolves to. This makes it possible for users to update their ENS names and have applications they used the name in automatically resolve to the new address, in the same way that you would expect your browser to automatically direct you to the new IP address if a site you use changes servers.

If your application deals with user funds or other critical resources, you may want to keep track of the address a name resolves to and warn them when it changes, to ensure they are aware of the change.

By accepting ENS names in your application, you remove the need for users to copy and paste - or worse, type out - long and opaque Ethereum addresses, which leads to errors and lost funds.

## 2. Support Reverse Resolution

The second level of ENS integration involves displaying ENS names wherever your app currently displays addresses.

If a user entered an ENS in your DApp, you should retain this name and show it to them whenever you would normally show the address.

If a user entered an address, or the address was obtained from elsewhere, you may still be able to show an ENS name, by doing [Reverse Resolution](resolving-names.md#reverse-resolution). This permits you to find the canonical name for an address and display that when possible. If no canonical name is provided, your application can fall back to displaying the address as it did previously.

By supporting reverse resolution, you make it easier for your users to identify accounts they interact with, associating them with a short human-readable name instead of a long opaque Ethereum address.

## 3. Let Users Name Things

The final step for comprehensive ENS integration is to facilitate associating ENS names with resources created by or managed with your application. This can take two forms:

### Name Registration

By obtaining an ENS name for your product and allowing users to easily register subdomains, you can provide users with an easy way to name resources created in your DApp. For example, if your DApp is a cryptocurrency wallet, you can make it easy for users to obtain an ENS domain of the form _theirname.yourwallet.eth_, allowing them to give their name out to others more easily.

To learn how to do this, see Writing a Registrar in the Smart Contract Developer Guide.

### Name Updates

By providing users with an easy way to update a name they own to point at your application’s resources, users can assign names they already own to your DApp's resources. See [Managing Names](managing-names.md) to learn how to do this.

## Tell Us About Your Integration

If you've ENS Enabled your app, let us know by emailing [nick@ens.domains](mailto:nick@ens.domains); we'll add your app to [our homepage](https://ens.domains/). 
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

