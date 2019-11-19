//app.js
App({
  globalData: {
    mavHeight: null
  },
  onLaunch: function () {
    // 获取胶囊按钮信息
    let menuButtonObject = wx.getMenuButtonBoundingClientRect()
    console.log(menuButtonObject)  
    // 获取设备信息
    wx.getSystemInfo({
      success: (res) => {
        // 状态栏高度
        let statusBarHeight = res.statusBarHeight,
        // 胶囊按钮到顶部的距离
        navTop = menuButtonObject.top,
        // 导航栏高度
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowWidth;
        console.log(this.globalData)
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  globalData: {
    userInfo: null
  },
  bindGetUserInfo: function (e) {
    var that = this;
    console.log(e.detail.userInf);
    wx.navigateBack({
      delta: 1
    })
  },
})