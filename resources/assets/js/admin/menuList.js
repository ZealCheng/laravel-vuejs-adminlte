export const MENULIST = [
    {
        menuName: "客户管理",
        menuIcon: "fa-link",
        menuSubLink: [
            {
                menuName: "广告主",
                menuUrl: "users"
            },
            {
                menuName: "渠道",
                menuUrl: "/customer/channel"
            }
        ]
    },
    {
        menuName: "广告管理",
        menuIcon: "fa-link",
        menuSubLink: [
            {
                menuName: "广告新增",
                menuUrl: "/ad/add"
            },
            {
                menuName: "广告审核",
                menuUrl: "/ad/check"
            }
        ]
    },
    {
        menuName: "投放管理",
        menuIcon: "fa-link",
        menuSubLink: [
            {
                menuName: "广告位",
                menuUrl: "/puton/area"
            },
            {
                menuName: "广告规格",
                menuUrl: "/puton/regular"
            }
        ]
    },
    {
        menuName: "数据统计",
        menuIcon: "fa-link",
        menuSubLink: [
            {
                menuName: "广告主",
                menuUrl: "/status/adhost"
            },
            {
                menuName: "渠道",
                menuUrl: "/status/channel"
            }
        ]
    },
    {
        menuName: "管理者",
        menuIcon: "fa-link",
        menuUrl: "/profile"
    },
    {
        menuName: "操作日志",
        menuIcon: "fa-link",
        menuUrl: "/logger"
    }
];
