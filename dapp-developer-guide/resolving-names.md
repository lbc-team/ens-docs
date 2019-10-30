<<<<<<< HEAD
# 域名解析

## 解析至以太坊地址

ENS中最简单和最常用的函数是域名解析函数。域名可以关联多种类型的资源，其中最常见的是以太坊地址。借助ENS库，将域名解析为以太坊地址很简单：
=======
# Resolving Names

## Looking up Ethereum addresses

The simplest and most frequently used function in ENS is resolving a name. Names can have many types of data associated with them; the most common is an Ethereum address. Resolving a name to an Ethereum address using a library is simple:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

{% tabs %}
{% tab title="ethereum-ens" %}
```javascript
var address = await ens.resolver('alice.eth').addr();
```
{% endtab %}

{% tab title="web3.js" %}
```javascript
var address = ens.getAddress('alice.eth');
```
{% endtab %}

{% tab title="ethjs-ens" %}
```javascript
var address = await ens.lookup('alice.eth');
```
{% endtab %}

{% tab title="ethers.js" %}
```javascript
var address = await provider.resolveName('alice.eth');
```

<<<<<<< HEAD
ethers.js还能支持在任何需要使用地址的地方也可以使用ENS域名，也就是说一般不需要直接调用`resolveName`。例如，要查询一个账户的余额，你可以这样做:
=======
ethers.js also supports using ENS names anywhere you would use an address, meaning you often do not need to directly call `resolveName`. For example, to look up an account's balance, you can do:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```javascript
var balance = await provider.getBalance('alice.eth');
```

<<<<<<< HEAD
或者，实例化一个合约:
=======
Or, to instantiate a contract:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```javascript
const abi = [
  "function getValue() view returns (string value)",
  "function setValue(string value)"
];
const contract = new ethers.Contract('contract.alice.eth', abi, provider);
```
{% endtab %}

{% tab title="go-ens" %}
```go
address, err := ens.Resolve(client, "alice.eth")
```
{% endtab %}

{% tab title="web3.py" %}
```text
address = ns.address('alice.eth')
```
{% endtab %}

{% tab title="web3j" %}
```java
String address = ens.resolve("alice.eth");
```

<<<<<<< HEAD
web3j同样支持在任何需要使用地址的地方也可以使用ENS域名，所以你通常不需要直接与`EnsResolver`对象交互。例如，要实例化一个合约接口，你可以这样做：
=======
web3j also supports using ENS names anywhere you would use an address, meaning you often do not need to directly interact with the `EnsResolver` object. For example, t o instantiate a contract interface, you can do:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```java
YourSmartContract contract = YourSmartContract.load(
        "contract.alice.eth", web3j, credentials, GAS_PRICE, GAS_LIMIT);
```
{% endtab %}
{% endtabs %}

<<<<<<< HEAD
如果不借助ENS库，解析的过程可以分为三步：

1. 对将要解析的域名进行规范化和散列，详细信息请参阅[域名处理](../contract-api-reference/name-processing.md)。
2. 在ENS注册表上调用`resolver()`，并将第1步输出的散列作为参数传递，然后`resolver()`会返回负责解析这个域名的解析器的地址。
3. 使用[resolver接口](https://github.com/ensdomains/resolvers/blob/master/contracts/Resolver.sol)，在第2步返回的解析器地址上调用`addr()`，并将第1步输出的散列作为参数传递。

对多币地址解析的支持是通过重载`addr()`来实现的。要解析多币地址，必须要有相应加密货币的Namehash和符合[SLIP44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)规范的链ID。例如，要解析一个比特币地址，可以调用`addr(hash, 0)`。注意，返回的地址是用二进制表示的，因此要通过解码来得到文本格式的地址，详细内容请参阅[EIP2304](https://eips.ethereum.org/EIPS/eip-2304)。

{% hint style="warning" %}
使用`addr()`进行解析时，必须将来自解析器0x00…00的返回值视为未设置的记录。否则，在用户配置了解析器却没有为域名设置解析地址的情况下，可能导致用户的资金被发送到空地址!
{% endhint %}

## 解析至其他资源

除了以太坊地址，ENS还支持将域名解析至许多其他类型的资源，其中包括存储在Swarm或IPFS中的数据的内容散列、合约接口\(ABIs\)和基于文本的元数据。查询这些信息的过程因采用的ENS库而有所差异，相关信息，请参阅所选库的文档。

如果不借助ENS库来实现这些类型的解析，同样需要遵循上面介绍过的3步过程，只是在第3步中调用的不再是`addr()`，而是解析器上与这些类型相对应的函数。

## 反向解析

"常规"解析实现了从域名到地址的映射，而反向解析是指从地址映射回域名或其他元数据。ENS支持反向解析，以便应用程序用ENS域名代替显示十六进制地址。

反向解析是通过专用域名 _addr.reverse_ 和解析器的`name()`函数实现的。_addr.reverse_ 的所有权属于一个专用的注册中心合约，该合约将子域名分配给相应地址的所有者。例如，地址 _0x314159265dd8dbb310642f98f50c066173c1259b_ 可以要求使用 _314159265dd8dbb310642f98f50c066173c1259b.addr.reverse_，并设置解析器和解析记录。通过这个解析器的`name()`函数可以取得与该地址关联的域名。

{% hint style="danger" %}
ENS并不强制要求反向记录的准确性。例如，每个人都可以声明其地址的域名为"alice.eth"。所以，为了确保声明是准确的，你必须始终对返回的域名执行正向解析，并检查正向解析得到的地址是否与原始地址匹配。
{% endhint %}

大多数ENS库提供了执行反向解析的功能：
=======
Resolution without a library is a three step process:

1. Normalise and hash the name - see [name processing](../contract-api-reference/name-processing.md) for details.
2. Call `resolver()` on the ENS registry, passing in the output of step 1. This returns the address of the resolver responsible for the name.
3. Using the [resolver interface](https://github.com/ensdomains/resolvers/blob/master/contracts/Resolver.sol), call `addr()` on the resolver address returned in step 2, passing in the hashed name calculated in step 1.

Multicoin address resolution support is implemented with an additional overload on `addr()`.  To resolve a multicoin address, supply both the namehash and the [SLIP44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) chain ID of the cryptocurrency whose address you want to resolve. For example, to resolve a Bitcoin address, you would call `addr(hash, 0)`. Note that the returned address will be in binary representation, and so will need decoding to a text-format address; for details, see [EIP 2304](https://eips.ethereum.org/EIPS/eip-2304).

{% hint style="warning" %}
If you are resolving addr\(\) records, you MUST treat a return value from the resolver of 0x00…00 as that record being unset. Failing to do so could result in users accidentally sending funds to the null address if they have configured a resolver in ENS, but not set the resolver record!
{% endhint %}

## Looking up other resources

ENS supports many types of resources besides Ethereum addresses, including content hashes for data stored in Swarm or IPFS, contract interfaces \(ABIs\), and text-based metadata. The process for looking these up varies from library to library; for specific details see your chosen library's documentation.

Resolving these content types without a library follows the same 3-step process detailed above; simply call the relevant method on the resolver in step 3 instead of `addr()`.

## Reverse Resolution

While 'regular' resolution involves mapping from a name to an address, reverse resolution maps from an address back to a name - or other metadata. ENS supports reverse resolution to allow applications to display ENS names in place of hexadecimal addresses.

Reverse resolution is accomplished via the special purpose domain _addr.reverse_ and the resolver function `name()`. _addr.reverse_ is owned by a special purpose registrar contract that allocates subdomains to the owner of the matching address - for instance, the address _0x314159265dd8dbb310642f98f50c066173c1259b_ may claim the name _314159265dd8dbb310642f98f50c066173c1259b.addr.reverse_, and configure a resolver and records on it. The resolver in turn supports the `name()` function, which returns the name associated with that address.

{% hint style="danger" %}
ENS does not enforce the accuracy of reverse records - for instance, anyone may claim that the name for their address is 'alice.eth'. To be certain that the claim is accurate, you must always perform a forward resolution for the returned name and check it matches the original address.
{% endhint %}

Most libraries provide functionality for doing reverse resolution:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

{% tabs %}
{% tab title="ethereum-ens" %}
```javascript
const address = '0x1234...';
var name = await ens.reverse(address).name()
// Check to be sure the reverse record is correct.
if(address != await ens.resolver(name).addr()) {
  name = null;
}
```
{% endtab %}

{% tab title="web3.js" %}
Not supported.
{% endtab %}

{% tab title="ethjs-ens" %}
```javascript
var address = '0x1234...';
var name = await ens.reverse(address);
// Check to be sure the reverse record is correct.
if(address != await ens.lookup(name)) {
  name = null;
}
```
{% endtab %}

{% tab title="ethers.js" %}
```text
var address = '0x1234...';
var name = await provider.lookupAddress(address);
// ethers.js automatically checks that the forward resolution matches.
```
{% endtab %}

{% tab title="go-ens" %}
```go
name, err := ens.ReverseResolve(client, common.HexToAddress("0x1234...")
```
{% endtab %}

{% tab title="web3.py" %}
```python
address = '0x1234...'
name = ns.reverse(address)
# Check to be sure the reverse record is correct.
if address != ns.address(name):
  name = None
```
{% endtab %}

{% tab title="web3j" %}
```java
String address = "0x1234...";
String name = ens.reverseResolve(address);
// Check to be sure the reverse record is correct.
if(address != ens.resolve(name)) {
  name = null;
}
```
{% endtab %}
{% endtabs %}

<<<<<<< HEAD
如果不使用库，实现反向解析的过程也是一样的：查询`1234....addr.reverse`（其中的 _1234..._ 是需要进行反向解析的地址）的解析器并在该解析器上调用`name()`函数。然后，执行正向解析以验证记录是否准确。
=======
Reverse resolution without a library follows the same pattern as forward resolution: Get the resolver for `1234....addr.reverse`\(where _1234..._ is the address you want to reverse-resolve\), and call the `name()` function on that resolver. Then, perform a forward resolution to verify the record is accurate.
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

