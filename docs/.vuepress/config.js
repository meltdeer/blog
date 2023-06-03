const nav = require("./nav.js");

let config = {
    title: 'LESS IS MORE',
    description: 'description',
    theme: "reco",
    base: '/blog/',
    lang: "zh-CN",
    plugins: [
        "vuepress-plugin-auto-sidebar", {}
    ],
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav,  
        displayAllHeaders: true,
        subSidebar: 'auto', //生成子侧边栏，放在页面的右侧
        smoothScroll: true
    }
}

module.exports = config
