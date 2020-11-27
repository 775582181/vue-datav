module.exports = [
    {text: 'HOME', link: '/'},
    {
        text: '指南',
        ariaLabel: '链接描述',
        items: [
            {text: 'Home', link: '/'},
            {text: 'VuePress官网', link: 'https://www.vuepress.cn'},
            {text: 'VuePress使用样例', link: 'https://book.hliedu.com/guide/notes/vuepress.html'},

        ]
    },
    {
        text: '基础笔记',
        items: [
            {
                text: '前端', items: [
                    {text: '基础阶段', link: '/datav/guide/'},
                    {text: '数据报表项目', link: '/datav/report/'}
                ]
            },
            {
                text: '数据报表项目', items: [
                    {text: '分组二', link: '/ui/'},
                    {text: '分组二', link: '/ui/'},
                ]
            }
        ]
    },
    {
        text: '项目开发',
        items: [
            {
                text: '数据可视化', items: [
                    {text: '基础阶段', link: '/datav/guide/'},
                    {text: '数据报表项目', link: '/datav/report/'}
                ]
            },
            {
                text: '数据报表项目', items: [
                    {text: '分组二', link: '/ui/'},
                    {text: '分组二', link: '/ui/'},
                    {text: '分组二', link: '/ui/'},
                    {text: '分组二', link: '/ui/'}
                ]
            }
        ]
    }
]