---
<<<<<<< HEAD
description: 描述如何规范化域名以及如何将域名进行散列.
---

# 域名处理

ENS只使用固定长度的256位加密散列来代替可读的域名。为了从域名派生散列的同时仍然保留其层次性，使用了名为Namehash的算法。例如，"alice.eth"的Namehash为 _0x787192fc5378cc32aa956ddfdedbf26b24e8d78e40109add0eea2c1a012c3dec_，这是域名在ENS内部的唯一表示方式。

在使用Namehash进行散列之前，首先使用UTS-46标准对域名进行规范化，确保域名中的字母与大小写无关，并禁止使用无效字符。任何对域名进行散列和解析的操作都**必须**首先对其进行规范化，以确保所有用户获得ENS的一致性。

## 规范化域名

在使用Namehash将域名转换为散列节点之前，必须首先对域名进行规范化和有效性检查（比如将 _fOO.eth_ 规范为 _foo.eth_）并屏蔽包含下划线等禁止字符的域名。更为关键的是，所有应用程序都必须遵循相同的规范化和验证规则集，否则相同的字符输入到不同系统上可能会被解析为两个不同的ENS域名。

使用ENS和处理可读域名的应用程序在进行规范化和验证时必须遵循[UTS46](http://unicode.org/reports/tr46/)。处理过程应该通过设置 UseSTD3ASCIIRules=true 采用非过渡规则。

[eth-ens-namehash](https://www.npmjs.com/package/eth-ens-namehash)这一Javascript库会执行这里描述的规范化和散列。DApp开发者指南中涉及的所有[ENS库](../dapp-developer-guide/ens-libraries.md)都会执行规范化和散列。

## 对域名进行散列

Namehash is a recursive process that can generate a unique hash for any valid domain name. Starting with the namehash of any domain - for example, 'alice.eth' - it's possible to derive the namehash of any subdomain - for example 'iam.alice.eth' - without having to know or handle the original human-readable name. It is this property that makes it possible for ENS to provide a hierarchal system, without having to deal with human-readable text strings internally.
Namehash是一个递归过程，可以为任何有效的域名生成唯一的散列。从任意一个域名的Namehash开始（比如"alice.eth"的Namehash）可以推导出任意子域名的Namehash（比如"iam.alice.eth"的Namehash），而且推导过程中不需要知道或处理"alice.eth"这个可读的原始域名。正是这个特性使得ENS能够成为一个层次性的系统，且不必在内部处理可读的文本字符串。

### 术语

* 域名（domain） - ENS标识符的完整且可读的形式，比如 _iam.alice.eth_。
* 标签（label） - 域名的独立组成部分 - 比如：_iam_，_alice_ 或 _eth_。
* 标签散列（label hash） - 单个标签经过keccak256函数计算后的输出值，比如：`keccak256(‘eth’) = 0x4f5b812789fc606be1b3b16908db13fc7a9adf7ca72641f84d75b47069d3d7f0`
* 节点（node） - `namehash`函数的输出值，用作ENS域名的唯一性标识。

### 算法

首先，按点（‘.’）分隔将域名划分为标签。所以，‘vitalik.wallet.eth’变成了列表\[‘vitalik’, ‘wallet’, ‘eth’\]。

然后按递归的方式定义namehash函数如下：
=======
description: Describes how to normalize and hash ENS names.
---

# Name Processing

In place of human-readable names, ENS works purely with fixed length 256-bit cryptographic hashes. In order to derive the hash from a name while still preserving its hierarchal properties, a process called Namehash is used. For example, the namehash of 'alice.eth' is _0x787192fc5378cc32aa956ddfdedbf26b24e8d78e40109add0eea2c1a012c3dec_; this is the representation of names that is used exclusively inside ENS.

Before being hashed with namehash, names are first normalized, using a process called UTS-46 normalization. This ensures that upper- and lower-case names are treated equivalently, and that invalid characters are prohibited. Anything that hashes and resolves a name **must** first normalize it, to ensure that all users get a consistent view of ENS.

## Normalising Names

Before a name can be converted to a node hash using Namehash, the name must first be normalized and checked for validity - for instance, converting _fOO.eth_ into _foo.eth_, and prohibiting names containing forbidden characters such as underscores. It is crucial that all applications follow the same set of rules for normalization and validation, as otherwise two users entering the same name on different systems may resolve the same human-readable name into two different ENS names.

Applications using ENS and processing human-readable names must follow [UTS46](http://unicode.org/reports/tr46/) for normalization and validation. Processing should be done with non-transitional rules, and with UseSTD3ASCIIRules=true.

The [eth-ens-namehash](https://www.npmjs.com/package/eth-ens-namehash) Javascript library performs both normalization and hashing as described here. All of the [ENS libraries](../dapp-developer-guide/ens-libraries.md) covered in the DApp Developer Guide also perform normalization and hashing.

## Hashing Names

Namehash is a recursive process that can generate a unique hash for any valid domain name. Starting with the namehash of any domain - for example, 'alice.eth' - it's possible to derive the namehash of any subdomain - for example 'iam.alice.eth' - without having to know or handle the original human-readable name. It is this property that makes it possible for ENS to provide a hierarchal system, without having to deal with human-readable text strings internally.

### Terminology

* domain - The complete, human-readable form of a name; eg, _iam.alice.eth_.
* label - A single component of a domain - eg, _iam_, _alice_, or _eth_.
* label hash - the output of the keccak-256 function applied to a label; eg, `keccak256(‘eth’) = 0x4f5b812789fc606be1b3b16908db13fc7a9adf7ca72641f84d75b47069d3d7f0`
* node - The output of the `namehash` function, used to uniquely identify a name in ENS.

### Algorithm

First, a domain is divided into labels by splitting on periods \(‘.’\). So, ‘vitalik.wallet.eth’ becomes the list \[‘vitalik’, ‘wallet’, ‘eth’\].

The namehash function is then defined recursively as follows:
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```text
namehash([]) = 0x0000000000000000000000000000000000000000000000000000000000000000
namehash([label, …]) = keccak256(namehash(…), keccak256(label))
```

<<<<<<< HEAD
下面是用Python实现namehash的示例。
=======
A sample implementation in Python is provided below.
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

```python
def namehash(name):
  if name == '':
    return '\0' * 32
  else:
    label, _, remainder = name.partition('.')
    return sha3(namehash(remainder) + sha3(label))
```

<<<<<<< HEAD
Namehash在[EIP137](https://eips.ethereum.org/EIPS/eip-137)中有详细的说明。

## 不明确域名的处理

由于unicode中有大量的字符，而且所表示的脚本种类繁多，因此不可避免地会出现不同的unicode字符，这些字符在常用字体中是相似的，甚至是相同的。这一点可能会被用来欺骗用户，让用户以为他们正在访问某个站点或资源，而实际上他们正在访问是另一个站点或资源。即所谓的"[同形攻击](https://en.wikipedia.org/wiki/Internationalized_domain_name#ASCII_spoofing_concerns)"。

向用户显示域名的客户端和其他软件应该针对这些攻击采取对策，比如突出显示有问题的字符，或者向用户显示混合脚本的警告。[Chromium的IDN策略](https://www.chromium.org/developers/design-documents/idn-in-google-chrome)对于呈现IDN名称时的客户端行为具备一定的参考价值。
=======
Namehash is specified in [EIP 137](https://eips.ethereum.org/EIPS/eip-137).

## Handling of Ambiguous Names

Because of the large number of characters in unicode, and the wide variety of scripts represented, inevitably there are different Unicode characters that are similar or even identical when shown in common fonts. This can be abused to trick users into thinking they are visiting one site or resource, when in fact they are visiting another. This is known as a [homoglyph attack](https://en.wikipedia.org/wiki/Internationalized_domain_name#ASCII_spoofing_concerns).

User agents and other software that display names to users should take countermeasures against these attacks, such as by highlighting problematic characters, or showing warnings to users about mixed scripts. [Chromium’s IDNA strategy](https://www.chromium.org/developers/design-documents/idn-in-google-chrome) may serve as a useful reference for user-agent behaviour around rendering IDNA names.
>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb

