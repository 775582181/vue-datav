module.exports = [
    {
        title: '基础阶段',   // 必要的
        path: '/datav/guide/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: [
            '/datav/guide/scene',
        ]
    }, {
        title: '数据报表项目',   // 必要的
        path: '/datav/report/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 4,    // 可选的, 默认值是 1
        children: [
            '/datav/report/001',
            '/datav/report/002',
            '/datav/report/003',
        ]
    }
]