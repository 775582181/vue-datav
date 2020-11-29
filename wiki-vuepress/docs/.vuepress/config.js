module.exports = {
    title: 'VuePress博客网',// 项目名称，左上角显示
    description: '这个描述在哪',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}],
        ['script', {charset: 'utf-8', src: '/js/echarts.js'}],
        // ['script', {charset: 'utf-8', src: 'https://cdn.jsdelivr.net/npm/echarts@4.1.0/dist/echarts.js'}],
        // ['script', {charset: 'utf-8', src: 'https://cdn.jsdelivr.net/npm/vue-echarts@4.0.2'}],
    ],
    themeConfig: {
        logo: '/logo.jpg',
        nav: require('./nav'),
        sidebar: require('./sidebar'),
    }
    // markdown: { //设置markdown中代码行号；true:显示行号
    //     lineNumbers: false
    // },
    // themeConfig: {
    //     nav: [   //导航栏设置
    //         {text: '主页', link: '/'},
    //         {
    //             text: '指南',
    //             ariaLabel: '网站说明',
    //             items: [
    //                 {text: 'VuePress官网', link: 'https://www.vuepress.cn', target: '_blank'},
    //                 {text: '主页', link: '/'}
    //             ]
    //         },
    //         {
    //             text: '项目文档',
    //             ariaLabel: '项目开发文档',
    //             items: [
    //                 {text: '数据可视化项目', link: 'vue/datav/report/'},
    //                 {text: '主页', link: '/'}
    //             ]
    //         }
    //     ],
    //     // sidebar: 'auto',
    //     sidebar: [
    //
    //     ]
    // }
}