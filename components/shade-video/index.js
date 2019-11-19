Component({
  properties: {

  },
  data: {
    img_src: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg', // 封面图片地址
    video_src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400', // 视频地址
    icon_src: 'https://si.geilicdn.com/img-4933000001685b263c400a20b7b9-unadjust_100_100.png', // 播放按钮地址
    shows: false, // 遮罩层与面板隐藏
    autoplay: true // 视频自动播放
  },
  methods: {
    // 点击“播放按钮” 显示 遮罩层与视频面板
    click: function(e) {
      this.setData({
        shows: true,
      })
    },
    // 点击遮罩层，遮罩层与面板隐藏
    close: function() {
      this.setData({
        shows: false,
      })
    },
  }
})