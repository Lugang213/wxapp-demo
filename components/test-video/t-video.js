// var common = require('../../common/index');
Component({
  data: {
    headVideoInfo: {
      coverUrl: 'https://si.geilicdn.com/vshop1488415812261-13639512.jpg?w=800&h=800&cp=1',
      videoUrl: 'https://v.geilicdn.com/video/wdsgoods1397000013-731e00000168308294340a207825.mp4.f20.mp4',
    },
    autoplay: false,
    controls: true,
    video: true,
    play: false,
    left: false,
    fullScreen: false,
  },

  ready() {
    let videoContext = wx.createVideoContext('item-head-video', this);
    this.setData({
      videoContext,
    });
  },

  methods: {
    controlVideo() {
      let videoContext = wx.createVideoContext('item-head-video', this);
      this.setData(
        {
          play: true,
          autoplay: true,
        },
        () => {
          videoContext.play();
        }
      );
    },
    handleFullScreenChange() {
      const { fullScreen } = this.data;
      this.setData({
        fullScreen: !fullScreen,
      });
    },
    handleSwapeShow(e) {
      const { dataset } = e.target;
      const { videoContext } = this.data;
      if (dataset.target === 'video') {
        this.setData({
          video: true,
          left: false,
          play: false,
        });
      } else {
        this.setData({
          video: false,
          left: true,
        });
      }
      videoContext.pause();
    },
    handleVideoEnded() {
      let videoContext = wx.createVideoContext('item-head-video', this);
      this.setData(
        {
          play: false,
          autoplay: false,
        },
        () => {
          videoContext.stop();
        }
      );
    },
    touchstart: function (e) {
      this.setData({
        startX: e.changedTouches[0] && e.changedTouches[0].clientX,
        startY: e.changedTouches[0] && e.changedTouches[0].clientY,
      });
    },

    // touchmove: function (e) {
    //   var that = this,
    //     startX = that.data.startX, //开始X坐标
    //     startY = that.data.startY, //开始Y坐标
    //     touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
    //     touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
    //     //获取滑动角度
    //     angle = common.util.GetSlideDrection(startX, startY, touchMoveX, touchMoveY);
    //   // 向左
    //   let videoContext = wx.createVideoContext('item-head-video', that.root);
    //   if (angle === 3) {
    //     this.setData(
    //       {
    //         play: true,
    //         autoplay: false,
    //         video: false,
    //         left: true,
    //       },
    //       () => {
    //         videoContext.pause();
    //       }
    //     );
    //   }
    //   // 向右
    //   if (angle === 4) {
    //     this.setData(
    //       {
    //         play: false,
    //         autoplay: false,
    //         video: true,
    //         left: false,
    //       },
    //       () => {
    //         videoContext.pause();
    //       }
    //     );
    //   }
    // },
  },
});
