// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/orders/index',
    'pages/user/index',
    'pages/order_detail/index',
    'pages/friends/index',
    'pages/newPi/index',
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/icons/home.png',
        selectedIconPath: 'assets/icons/home-active.png',
      },
      {
        pagePath: 'pages/orders/index',
        text: '订单',
        iconPath: 'assets/icons/map.png',
        selectedIconPath: 'assets/icons/map-active.png',
      },
      {
        pagePath: 'pages/friends/index',
        text: '朋友',
        iconPath: 'assets/icons/favorite.png',
        selectedIconPath: 'assets/icons/favorite-active.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'assets/icons/user.png',
        selectedIconPath: 'assets/icons/user-active.png',
      },
      {
        pagePath: 'pages/newPi/index',
        text: '新的切面',
        iconPath: 'assets/icons/user.png',
        selectedIconPath: 'assets/icons/user-active.png',
      },
    ],
    color: '#333',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: 'black',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFC919',
    navigationBarTitleText: 'WeChat',
  }
})
