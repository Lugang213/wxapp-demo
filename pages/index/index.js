//index.js
import {Base64} from 'js-base64'

Page({
  data: {
    current: 2,
    verticalCurrent: 2,
    img_src: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg', // 封面图片地址
    video_src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400', // 视频地址
    icon_src: 'https://si.geilicdn.com/img-4933000001685b263c400a20b7b9-unadjust_100_100.png', // 播放按钮地址

    // 遮罩层与面板隐藏
    shows: false,
    autoplay: true
  },
  // 点击“播放按钮”遮罩层与面板显示
  click: function (e) {
    this.setData({
      shows: true,
    })
  },
  // 点击遮罩层，显示的遮罩层与面板又隐藏起来
  close: function () {
    this.setData({
      shows: false,
    })
  },

  // 步骤条组件
  handleClick() {
    const addCurrent = this.data.current + 1;
    const current = addCurrent > 2 ? 0 : addCurrent;
    this.setData({
      'current': current
    })
  },


  onGetToken(){
    wx.login({
      success:(res)=>{
        if(res.code){
          wx.request({
            url: 'http://localhost:3000/v1/token',
            method:'POST',
            data:{
              account: res.code,
              type: 100
            },
            success:(res)=>{
              const code = res.statusCode.toString()
              if(code.startsWith('2')){
                wx.setStorageSync('token', res.data.token)
              }
            }
          })
        }
      }
    })
  },
  onVerifyToken(){ 
    wx.request({
      url: 'http://localhost:3000/v1/token/verify',
      method:'POST',
      data:{
        token:wx.getStorageSync('token')
      },
      success:(res)=>{
        console.log(res.data)
      }
    })
  },
  onGetLatest() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/latest',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onGetPreviousLatest() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/200/2/previous',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onGetNextLatest() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/1/next',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onLike() {
    wx.request({
      url: 'http://localhost:3000/v1/like',
      method: 'POST',
      data:{
        art_id: 1,
        type: 300
      },
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })  
  },
  onDisLike() {
    wx.request({
      url: 'http://localhost:3000/v1/like/cancel',
      method: 'POST',
      data: {
        art_id: 1,
        type: 300
      },
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  }, 
  onGetFavor() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/100/1/favor',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onGetMyFavorList() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/favor',
      method: 'GET',
      success: res => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onGetList(){
    wx.request({
      url: 'http://localhost:3000/v1/classic/200/2',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onHotBookList(){
    wx.request({
      url: 'http://localhost:3000/v1/book/hot_list',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onBookDetails(){
    wx.request({
      url: 'http://localhost:3000/v1/book/1/detail',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onSearchBook(){
    wx.request({
      url: 'http://localhost:3000/v1/book/search',
      method: 'GET',
      data:{
        q:'tushu'
      },
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onBookFavorList() {
    wx.request({
      url: 'http://localhost:3000/v1/book/favor/count',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onBookFavor() {
    wx.request({
      url: 'http://localhost:3000/v1/book/1/favor',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onAddShortComment() {
    wx.request({
      url: 'http://localhost:3000/v1/book/add/short_comment',
      method: 'POST',
      data:{
        book_id: 1,
        content: '爱吃猫的鱼'
      },
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
  },
  onGetShortComment() {
    wx.request({
      url: 'http://localhost:3000/v1/book/1/short_comment',
      method: 'GET',
      success: (res) => {
        console.log(res.data)
      },
      header: {
        'Authorization': this._encode()
      },
    })
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
  },
  _encode(){
    const token = wx.getStorageSync('token')
    const base64 = Base64.encode(token+':')
    return 'Basic '+base64
  },
  _refetch() {
    var token = new Token()
    token.getTokenFromServer((token) => {
      this._request(...param, true)
    })
  }
})
