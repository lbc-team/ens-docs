# 域名注册和续费

如果用户需要注册他的第一个域名，那他必须与注册中心进行交互。注册中心是一个智能合约，这个合约拥有一个域名的所有权，并在合约中规定了子域名的分发机制。用户想要获得一个域名，就需要向与之对应的注册中心申请。例如，用户如果想要一个.eth域名，那就必须向.eth注册中心进行申请。每个注册中心都在其内部定义了自己的域名注册API（以及配套的更新机制）。

目前，还没有能与注册中心进行交互的ENS库。DApp需要使用通用的以太坊库（如web3.js或web3.py）与注册中心合约进行交互。有关注册中心接口的详细信息，请参阅"智能合约API参考资料"部分。

## 注册中心部署

* .eth：目前运行的是拍卖注册中心，但将于2019年5月4日过渡到[永久注册中心](../contract-api-reference/.eth-permanent-registrar/)。
* .test （测试网专用）：[测试注册中心](../contract-api-reference/testregistrar.md).
* .addr.reverse：[反向注册中心](../contract-api-reference/reverseregistrar.md).

