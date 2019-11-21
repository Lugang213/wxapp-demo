// components/checkbox/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    noSelect: 'http://hiwx.oss-cn-beijing.aliyuncs.com/img/ding1.png',
    hasSelect: 'http://hiwx.oss-cn-beijing.aliyuncs.com/img/ding2.png',
    index: 0,
    selectIndex: [
      { sureid: false },
      { sureid: false },
      { sureid: false },
      { sureid: false },
      { sureid: false },
      { sureid: false },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 自定义结构多选
    selectRep: function (e) {
      var index = e.currentTarget.dataset.index;
      var selectIndex = this.data.selectIndex;
      selectIndex[index].sureid = !selectIndex[index].sureid;
      console.log(selectIndex[index])
      this.setData({
        selectIndex: selectIndex
      })
    },
  }
})
