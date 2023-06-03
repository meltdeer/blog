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
        smoothScroll: true,
        huawei: true, //首页可以显示 “华为” 文案
        // 博客配置
        blogConfig: {
            home: {
                location: 1,     // 在导航栏菜单中所占的位置，默认1
                text: 'HOME',    // 默认文案 “首页”
                link: '/index.html',
                icon: 'reco-home'
            },
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/meltdeer' }
            ]
        }
    },
    head: [ //在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ]
}

module.exports = config
