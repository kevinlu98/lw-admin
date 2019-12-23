let menuList = [
    {
        id: 1293,
        name: '首页',
        icon: 'fa fa-server',
        url: 'sa-html/sa-doc.html',
        parentId: 0
    },
    {
        id: 1,
        name: '用户管理',
        icon: 'fa fa-graduation-cap',
        info: '对用户列表、添加、统计等等...',
        childList: [
            {
                id: '1-1',
                name: '管理员管理',
                url: 'user/admin.html',
                parentId: 1
            },
            {
                id: '1-2',
                name: '用户管理',
                url: 'user/user.html',
                parentId: 1
            }
        ],
        parentId: 0
    },
    {
        id: 2,
        name: '权限控制',
        icon: 'fa fa-paper-plane',
        info: '对系统角色权限的分配等设计，敏感度较高，请谨慎授权',
        childList: [
            {
                id: '2-1',
                name: '角色列表',
                url: 'permission/role.html',
                parentId: 2
            },
            {
                id: '2-2',
                name: '菜单列表',
                url: 'permission/menu.html',
                parentId: 2
            }
        ],
        parentId: 0
    },
    {
        id: 3,
        name: '文章管理',
        icon: 'fa fa-line-chart',
        info: '对文章的增删改查、维护',
        childList: [
            {
                id: '3-1',
                name: '文章列表',
                url: 'post/post.html',
                parentId: 3
            },
            {
                id: '3-2',
                name: '文章发表',
                url: 'post/add.html',
                parentId: 3
            }
        ],
        parentId: 0
    },
    {
        id: 4,
        name: '系统设置',
        icon: 'fa fa-cog',
        info: '对系统运行时的一些参数的设置',
        childList: [
            {
                id: '4-1',
                name: '站点设置',
                url: 'setting/website.html',
                info: '对服务器参数的设置',
                parentId: 4
            },
            {
                id: '4-2',
                name: '轮播图设置',
                url: 'setting/rotation.html',
                parentId: 4
            },

        ],
        parentId: 0
    },
    {
        id: 5,
        name: '其他页面',
        icon: 'fa fa-file-o',
        info: '对系统运行时的一些参数的设置',
        childList: [
            {
                id: '5-1',
                name: '登录页面',
                url: 'page/login.html',
                info: '对服务器参数的设置',
                parentId: 5
            },
            {
                id: '5-2',
                name: '404页面',
                url: 'page/404.html',
                parentId: 5
            },
            {
                id: '5-3',
                name: '500页面',
                url: 'page/500.html',
                parentId: 5
            }

        ],
        parentId: 0
    }
]