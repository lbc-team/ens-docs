# Terminology

<<<<<<< HEAD
* **标签（label）**: 一个域名的独立组成部分，比如'alice.eth'中的'alice'。
* **标签散列（labelhash）**: 单个标签的keccak256散列。
* **域名（name）**: ENS标识符，如'alice.eth'，一个ENS域名可能由多个独立部分（标签）组成，标签之间用点分隔。
* **Namehash**: 用于处理ENS域名并返回唯一标识该域名的加密散列的算法。Namehash以域名作为输入，并生成一个 **Node（节点）**。
* **节点（node）**: 唯一标识域名的加密散列。（LBB译注：节点即是域名经过Namehash计算的结果，后文中有些地方的提到的节点，可以理解为ENS域名）
* **所有者（owner）**: 域名的所有者是ENS注册表中的所有者字段引用的实体。所有者可以转让所有权，设置解析器或TTL，并创建或重新分配子域名。
* **注册中心（registrar）**: 注册中心是负责分配子域名的合约。任何级别的ENS域名都可以配置注册中心，一个域名的注册中心由其在注册表中的登记的所有者来指定。
* **注册（registration）**: 注册是注册中心对域名所有权的记录。这与注册表中的所有者（owner）字段不同，注册保存在注册中心合约中，并附加存储了到期日期、已付租金等信息。
* **注册人（registrant）**: 注册的所有者。注册人可进行注册转让（过户）、缴付租金(给域名"续期")，如果有需要，还可以在注册中心中收回域名的所有权。
* **注册表（registry）**: ENS的核心合约，注册表用来维护域名（不论是哪个级别的域名，如 x，y.x，z.y.x 等）与其所有者之间的映射列表，还维护着域名的解析器和TTL。
* **解析器（resolver）**: 解析器是一个从域名映射到资源（以太坊帐户地址、公钥、内容散列等）的合约，一个域名的解析器由其在注册表中的解析器字段来指定。
=======


* _Label_: An individual component of a name, such as 'alice'.
* _Labelhash_: The keccak256 hash of an individual label.
* _Name_: An ENS identifier such as 'alice.eth'. Names may consist of multiple parts, called labels, separated by dots.
* _Namehash_: The algorithm used to process an ENS name and return a cryptographic hash uniquely identifying that name. Namehash takes a name as input and produces a _node_.
* _Node_: A cryptographic hash uniquely identifying a name.
* _Owner_: The owner of a name is the entity referenced in the ENS registry's owner field. An owner may transfer ownership, set a resolver or TTL, and create or reassign subdomains.
* _Registrar_: A registrar is a contract responsible for allocating subdomains. Registrars can be configured at any level of ENS, and are pointed to by the owner field of the registry.
* _Registration_: A registration is a registrar's record of a user's ownership of a name. This is distinct from the owner field in the Registry; registrations are maintained in the registrar contract and additionally store information on expiry date, rent paid, etc.
* _Registrant_: The owner of a registration. The registrant may transfer the registration, pay rent \('renew' the name\), and reclaim ownership of the name in the registry if required.
* _Registry_: The core contract of ENS, the registry maintains a mapping from domain name \(at any level - x, y.x, z.y.x etc\) to owner, resolver, and time-to-live.
* _Resolver_: A resolver is a contract that maps from name to resource \(eg, Ethereum account address, public key, content hash, etc\). Resolvers are pointed to by the resolver field of the registry.

>>>>>>> d81ae59221d8fa9e1ee227cd0f0b6281465983cb
