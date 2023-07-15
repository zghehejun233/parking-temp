export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/counter/index',
    'pages/user/index',
    'pages/friends/index',
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        icon: 'home',
      },
      {
        pagePath: 'pages/counter/index',
        text: '计数',
        icon: 'counter',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        icon: 'user',
      },
      {
        pagePath: 'pages/friends/index',
        text: '朋友',
        icon: 'friends',
      },
    ],
    color: '#333',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: 'black',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
