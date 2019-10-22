# DNS注册器指南

### 介绍

DNSSEC（DNS安全扩展）构建了一个从ICANN（.）签署的根密钥开始，向下经过各级密钥签署的可信来源认证系统。假设你的域名的DNSSEC已经启用，且这个域名的一个子域名（例如：`_ens.yourdomain.tld`）已经绑定了一个ETH地址，那么ENS管理器允许任何人向`DNSSEC Oracle`智能合约提交这个链的散列。

### 配置流程

#### 第一步：设置DNSSEC签名

第一次登陆ENS管理器时，您将看到如下内容。

![step1: DNSSEC not enabled](https://discuss.ens.domains/uploads/default/optimized/1X/946d32d7bf60e53ccafc79eb93e4479d3437e307_2_1378x912.jpeg)

如果您的DNS服务商已经支持DNSSEC签名，那么只需在DNS管理器上启用该选项。

![google cloud](https://discuss.ens.domains/uploads/default/optimized/1X/9e7962d3ba098f1fcf49780ec1c5cafea28e7eb8_2_1380x660.png)

如果您的DNS服务商不支持DNSSEC签名，那你就得将域名迁移到其他支持DNSSEC签名的服务商。我们推荐[EasyDNS](https://www.easydns.com)或者[Google Cloud DNS](https://cloudplatform.googleblog.com/2017/11/DNSSEC-now-available-in-Cloud-DNS.html)。EasyDNS的DNSSEC配置向导请看[这里](https://fusion.easydns.com/Knowledgebase/Article/View/18/7/dnssec)，Google的DNSSEC配置向导请看[这里](https://cloud.google.com/dns/dnssec-config)。

无论你选择了哪家DNS服务商，都要确保你选择的RSA签名和SHA256哈希算法。

![sha\|690x468](https://discuss.ens.domains/uploads/default/original/1X/932bd16073756602187e200da3db7586555cd2e3.png)

#### 第二步：添加一条文本（TXT）记录

为了确认一个DNS域名的所有权应该被赋予哪个Ethereum地址，ENS上的DNS注册器会查询一条具有特定名称和格式的TXT记录。比如要声明mydomain.xyz的所有权，就需要在DNS管理器中为\_ens.mydomain.xyz添加一条TXT记录，这条TXT记录的文本数据的格式为a=0x1234...，其中的0x1234...就是需要获得ENS域名控制权的Ethereum地址。

![step2: add text](https://discuss.ens.domains/uploads/default/optimized/1X/5177864685d2c4ca9b6e25bd23a1a7c3a80b7fbd_2_1378x940.jpeg)

#### 第三步：完成DNS域名在ENS上的注册

到了这一步，你可以在ENS管理器中完成其余的操作。现在只需按下注册按钮“Register”发送交易，待交易确认便可完成DNS域名在ENS上的注册。

![step3: owner submit proof](https://discuss.ens.domains/uploads/default/optimized/1X/a68033af4eb1d41e26b9d8b567d580d23a44dc7e_2_1380x924.jpeg)

#### 第四步：打开ENS管理器

![step4: owner](https://discuss.ens.domains/uploads/default/optimized/1X/09baa8bb802c32de657aaa7da157bf141964cf02_2_1380x924.jpeg)

### 常见问题

#### 为什么目前只支持`.xyz`和`.luxe`这两种域名?

从技术上讲，系统可以支持90%以上的DNS域名。最初为`.xyz`和`.luxe`提供的支持是由ENS根节点的持有团队人工批准并部署的，但我们正在计划部署更多的通用合约，以便不需要人工批准就可以支持数以千计的域名。

#### 如果我拥有`myname.xyz`这个DNS域名，那我可以声明`myname.eth`的所有权吗?

你可能把这事儿和[ENS短域名预订](https://medium.com/the-ethereum-name-service/timeline-for-3-6-character-name-reservation-auction-and-instant-registrations-e39aa2f89dc9)给搞混了。通过集成DNSSEC，您只能使用一个顶级域名（TLD）声明对应的完成相同的ENS名称，而`.eth`是完全独立管理的。

#### 如果我注册了一个域名，

不同于`.eth`的永久注册器，在ENS上进行注册的DNS域名没有注册人（`registrant`）这种可以转移控制权限的角色。如果您想将所有权从当前注册地址转移到其他地址，请从您的DNS管理器更新相应的DNS记录并在ENS管理器中点击转移按钮“Transfer”。

我们目前还没有启用删除所有权的功能，尽管如此，你可以将所有者设置为`a= 0x0000000000000000000000000000000000000000`，然后单击“Transfer”，就可以达到相同的效果。

#### 我的DNS子域名可以注册吗?

不行。DNSSEC注册仅为二级域名（例如:yourname.xyz）启用。如果要创建`subdomain.yourname.xyz`，需要先在ENS管理器中打开"Subdomains"子域名标签页，然后在ENS管理器中创建它，就像在`.eth`域名下创建其他子域名一样。

