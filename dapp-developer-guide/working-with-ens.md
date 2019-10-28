# ENS的使用

在开始与ENS交互之前，首先要引用ENS注册表，引用ENS注册表的方式取决于你使用了哪个ENS库。

下面的代码是基于Javascript的API（ethereum-ens、web3.js、ethjs-ens和ethers.js）的使用示例，这些代码适合运行在一个引入了`ethereum`对象的DApp浏览器中，比如安装了[metamask](https://metamask.github.io/metamask-docs/Main_Concepts/Getting_Started)的Chrome。

{% tabs %}
{% tab title="ethereum-ens" %}
```javascript
var ENS = require('ethereum-ens');

var accounts = ethereum.enable();
var ens = new ENS(ethereum);
```
{% endtab %}

{% tab title="web3.js" %}
```javascript
var Web3 = require("web3")

var accounts = ethereum.enable();
var web3 = new Web3(ethereum);
var ens = web3.eth.ens;
```
{% endtab %}

{% tab title="ethjs-ens" %}
```javascript
const ENS = require('ethjs-ens');
// Currently requires both provider and
// either a network or registryAddress param
var accounts = ethereum.enable();
const ens = new ENS({ ethereum, network: '1' });
```
{% endtab %}

{% tab title="ethers.js" %}
```javascript
var ethers = require('ethers');
var provider = new ethers.providers.Web3Provider(ethereum);
// ENS functionality is provided directly on the core provider object.
```
{% endtab %}

{% tab title="go-ens" %}
```go
import (
  ens "github.com/wealdtech/go-ens/v2"
  ethereum "github.com/ethereum/go-ethereum"
)

// Can dial up a connection through either IPC or HTTP/HTTPS
client, err := ethereum.Dial("/home/ethereum/.ethereum/geth.ipc")
registry, err := ens.Registry(client)
```
{% endtab %}

{% tab title="web3.py" %}
```python
from ens.auto import ns
```
{% endtab %}

{% tab title="web3j" %}
```java
EnsResolver ens = new EnsResolver(web3j, 300 /* sync threshold, seconds */);
```
{% endtab %}
{% endtabs %}

一些web3库（ethers.js、web3j和web3.py ）已经内置了对域名解析的支持。在这些库中，只要可以使用地址的地方，都可以直接使用ENS域名，也就是说，除非你想手动解析域名或是进行其他特殊的ENS操作，否则你根本不需要直接与它们的ENS API交互。

如果你的平台没有可用的库，你可以使用[这里](https://github.com/ensdomains/ens/blob/master/contracts/ENS.sol)的接口定义直接实例化ENS注册表合约。在[ENS部署情况](../ens-deployments.md)页面中可以找到各个网络的ENS注册表地址。

