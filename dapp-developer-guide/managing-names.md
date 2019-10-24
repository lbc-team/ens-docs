# 域名管理

## 转移域名

ENS中的每个域名都有一个所有者，这个所有者可以是帐户或智能合约，而且是唯一一个可以在ENS注册表中对这个域名进行更改的帐户或合约。域名的所有者可以将所有权转移到任何其他帐户或合约。

{% tabs %}
{% tab title="ethereum-ens" %}
```javascript
await ens.setOwner('alice.eth', '0x1234...', {from: ...});
```
{% endtab %}

{% tab title="go-ens" %}
```go
// opts are go-ethereum's bind.TransactOpts
err := registry.SetOwner(opts, "alice.eth", common.HexToAddress("0x1234..."))
```
{% endtab %}

{% tab title="web3.py" %}
```python
ns.setup_owner('alice.eth', '0x1234...')
```
{% endtab %}
{% endtabs %}

## 创建子域名

每个域名的所有者都可以根据需要配置子域名，配置子域名是指创建子域名并将其所有者设置为所需地址的过程，这个地址可以与父域名的所有者相同，也可以不同。

{% tabs %}
{% tab title="ethereum-ens" %}
```text
await ens.setSubnodeOwner('iam.alice.eth', '0x1234...', {from: ...});
```
{% endtab %}

{% tab title="go-ens" %}
```go
// opts are go-ethereum's bind.TransactOpts
err := registry.SetSubdomainOwner(opts, "alice.eth", "iam", common.HexToAddress("0x1234..."))
```
{% endtab %}

{% tab title="web3.py" %}
```text
ns.setup_owner('iam.alice.eth', '0x1234...')
```

另外，web3.py提供了一种便利的方法，可以同时创建子域名、设置解析器和配置地址记录：

```text
ns.setup_address('iam.alice.eth', '0x1234...')
```

一般情况下，域名应该指向所有者的地址，因此上面函数的第二个参数是可选的（默认值是域名所有者的地址）。
{% endtab %}
{% endtabs %}

## 设置解析器

在启用新创建的域名或子域名之前，必须设置解析器地址。如果有解析器进行升级并支持了一些你希望用到的功能，你也可以重新设置解析器地址。

域名的解析器通常设置为公共解析器，公共解析器是一个“符合标准”的解析器，它能提供常用的功能，但是每个人都可以编写和部署自己的专用解析器，有关详细信息，请参见解析器接口定义。

{% tabs %}
{% tab title="ethereum-ens" %}
```text
await ens.setResolver('iam.alice.eth', '0x1234...', {from: ...});
```

在主网和Kovan测试网络上，“resolver.eth”指向了当前部署的最新版本的公共解析器，以便于用户为域名配置并使用公共解析器：

```text
const resolver = await ens.resolver('resolver.eth').addr();
await ens.setResolver('iam.alice.eth', resolver, {from: ...});
```
{% endtab %}

{% tab title="go-ens" %}
```go
// opts are go-ethereum's bind.TransactOpts
err := registry.SetResolver(opts, "iam.alice.eth", common.HexToAddress("0x1234..."))
```
{% endtab %}

{% tab title="web3.py" %}
不支持自定义解析器。web3.py会在用户调用`setup_address`时，自动使用公共解析器，它不支持设置自定义解析器。
{% endtab %}
{% endtabs %}

注意，更改域名的解析器后，该域名在原解析器上的记录不会自动迁移到新解析器上。要更新解析器记录，需要按照下面的程序来实现。

## 更新解析记录

要更改域名解析到的地址或其他资源，需要更新该域名在其解析器中的记录。

每个解析器都可以指定自己的记录更新机制，但是公共解析器和很多解析器都遵循一套标准的接口。一些ENS库提供的解析器记录更新功能就是使用了这类接口。

### 更新解析到地址的记录

{% tabs %}
{% tab title="ethereum-ens" %}
```javascript
await ens.resolver('iam.alice.eth').setAddr('0x1234...', {from: ...});
```
{% endtab %}

{% tab title="go-ens" %}
```go
resolver, err := ens.NewResolver(client, "iam.alice.eth")
// opts are go-ethereum's bind.TransactOpts
err := resolver.SetAddress(opts, common.HexToAddress("0x1234..."))
```
{% endtab %}

{% tab title="web3.js" %}
```javascript
ens.setAddress('iam.alice.eth, '0x1234...', {from: ...});
```
{% endtab %}

{% tab title="web3.py" %}
```python
ns.setup_address('iam.alice.eth', '0x1234...')
```
{% endtab %}
{% endtabs %}

### 更新解析到其他资源的记录

有些ENS库（目前只有ethereum-ens、go-ens和web3.js）支持使用相同的模式更新其他记录类型（内容的散列和文本记录等）。例如，要设置或更新文本记录:

{% tabs %}
{% tab title="ethereum-ens" %}
```javascript
ens.resolver('iam.alice.eth').setText('test', 'Test record', {from: ...});
```
{% endtab %}

{% tab title="go-ens" %}
```go
// opts are go-ethereum's bind.TransactOpts
err := resolver.SetContenthash(opts, []byte{0x12, 0x34...})
err := resolver.SetAbi(opts, "Sample", `[{"constant":true,"inputs":...}]`, big.NewInt(1))
err := resolver.SetText(opts, "Sample", `Hello, world`)
```
{% endtab %}

{% tab title="web3.js" %}
```javascript
ens.setText('iam.alice.eth', 'Test', 'Test record', {from: ...});
```
{% endtab %}
{% endtabs %}

## 配置反向解析

“常规”解析实现了从域名到地址的映射，而反向解析是指从地址映射回域名或其他元数据。ENS支持反向解析，以便应用程序用ENS域名代替显示十六进制地址。

要达到上述效果，地址的所有者必须为其地址配置反向解析。配置反向解析通过调用反向解析器上的`claim()`方法来实现，该方法的专用名为“addr.reverse”。

配置反向解析通常是通过诸如[ENS管理器](https://manager.ens.domains/)这样的用户界面来实现的。go-ens和web3.py也可以提供这项功能：

{% tabs %}
{% tab title="go-ens" %}
```go
reverseRegistrar, err := ens.NewReverseRegistrar(client)
// opts are go-ethereum's bind.TransactOpts
err := reverseRegistrar.SetName(opts, "iam.alice.eth")
```
{% endtab %}

{% tab title="web3.py" %}
```python
ns.setup_name('iam.alice.eth', '0x1234...')
```
{% endtab %}
{% endtabs %}

