<<<<<<< HEAD
# 测试注册中心

[源代码](https://github.com/ensdomains/ens/blob/master/contracts/TestRegistrar.sol)

通过测试注册中心可以方便地在以太坊测试网络上测试ENS。测试注册中心通常部署在.test TLD上，它允许用户即时注册一个用于测试目的的域名，该域名在注册28天后自动过期。

## 注册一个域名
=======
# TestRegistrar

[Source](https://github.com/ensdomains/ens/blob/master/contracts/TestRegistrar.sol)

The Test registrar facilitates easy testing of ENS on the Ethereum test networks. Typically deployed on the .test TLD, it provides functionality to instantly claim a domain for test purposes, which expires 28 days after it was claimed.

## Register a Domain
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
function register(bytes32 label, address owner) public;
```

<<<<<<< HEAD
注册一个其`keccak256`散列等于`label`的子域名，并将其所有者设置为`owner`。例如，注册 _myname.test_，就用`keccak256('myname')`作为第一个参数调用`register`函数。谁的杯子装在袋子里

注册有效期为28天。

## 获取过期时间
=======
Registers the subdomain whose `keccak256` hash is provided in `label`, and assigns ownership to `owner`. For example, to register _myname.test_, call `register` with `keccak256('myname')` as the first argument.

Registrations after 28 days.

## Get expiration time
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
mapping (bytes32 => uint) public expiryTimes;
```

<<<<<<< HEAD
返回指定子域名到期的unix时间戳。例如，调用`expiryTimes(keccak256('myname'))`可以检查 _myname.test_ 的过期时间。
=======
Returns the unix timestamp at which the specified subdomain will expire. For example, to check the expiration time of _myname.test_, call  `expiryTimes(keccak256('myname'))`.
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

