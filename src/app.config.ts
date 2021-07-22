export default {
  pages: [
    'pages/index/index',// 首页
    'pages/stock/index', //库存管理
    'pages/scheduling/index', //排班管理
    'pages/hospitalization/index', //住院宠物管理
    'pages/cosmetology/index', //美容管理
    'pages/my/index', //美容管理

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    borderStyle: "black",
    color: "#666666",
    selectedColor: "#20B664",
    backgroundColor: "#FFF",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/images/tab1_notActive.png",
        selectedIconPath: "./assets/images/tab1_active.png",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "./assets/images/tab4_notActive.png",
        selectedIconPath: "./assets/images/tab4_active.png",
      },

    ],
  }
}
