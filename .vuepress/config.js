module.exports = {
  title: "ENS 中文文档",
  description: "ENS 以太坊域名服务",
  ga: "",
  dest: "./dist/docs",
  base: "/docs/ens/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: "lbc-team/ens-docs",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "lbc",
    editLinkText: '帮助完善文档',
    lastUpdated: true,
    algolia: {
      apiKey: 'a6e2f64347bb826b732e118c1366819a',
      indexName: 'cosmos_network',
      debug: false
    },
    nav: [
      { text: "首页", link: "https://learnblockchain.cn" },
      { text: "深入浅出区块文档中心", link: "https://learnblockchain.cn/docs/" },
      { text: "ENS原文档 ", link: "https://docs.ens.domains" }
    ],
    sidebar: [
      {
        title: "ENS 介绍",
        collapsable: true,
        children: [
          "/",
          "/terminology",
          "/frequently-asked-questions",
          "/ens-deployments",
          "/permanent-registrar-faq",
          "/deploying-ens-on-a-private-chain",
          "/dns-registrar-guide"
        ]
      },
      {
        title: "Dapp开发指南",
        collapsable: true,
        children: [
          "/dapp-developer-guide/ens-enabling-your-dapp",
          "/dapp-developer-guide/ens-libraries",
          "/dapp-developer-guide/working-with-ens",
          "/dapp-developer-guide/resolving-names",
          "/dapp-developer-guide/managing-names",
          "/dapp-developer-guide/registering-and-renewing-names",
          "/dapp-developer-guide/front-end-design-guidelines"
        ]
      },
      {
        title: "合约API参考",
        collapsable: true,
        children: [
      	  "/contract-api-reference/name-processing",
          "/contract-api-reference/ens",
          "/contract-api-reference/reverseregistrar",
          "/contract-api-reference/testregistrar",
      	  "/contract-api-reference/publicresolver",
      	  "/contract-api-reference/eth-permanent-registrar-README",
          "/contract-api-reference/eth-permanent-registrar-registrar",
          "/contract-api-reference/eth-permanent-registrar-controller"
      	]
      },
      {
        title: "合约开发指南",
        collapsable: true,
        children: [
      	  "/contract-developer-guide/resolving-names-on-chain",
          "/contract-developer-guide/writing-a-resolver",
          "/contract-developer-guide/writing-a-registrar"
      	]
      }
    ]
  }
}
