// pages/myWorkDetail/myWorkDetail.js
let imgUrl = 'http://www.wxgblog.com/card/'
let imgUrl1 = 'http://www.wxgblog.com/xiaoxue/'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: imgUrl,
    list: {
      1: [
        { title: '泡泡旅行界面设计', type: 'UI-APP界面', url: 'ui1.png',
          detail: { name: '1-1-', list: [1, 2, 3, 4, 5, 6, 7] } },
        { title: '圣所演唱会购票APP重设计', type: 'UI-APP界面', url: 'ui2.png',
          detail: { name: '1-2-', list: [1, 2, 3, 4] } },
        { title: 'WEPARK小程序界面设计', type: 'UI-APP界面', url: 'ui3.png',
          detail: { name: '1-3-', list: [1, 2, 3, 4] } },
        { title: 'TASK GO 办公平台界面设计', type: 'UI-APP界面', url: 'ui4.png',
          detail: { name: '1-4-', list: [1, 2, 3] } },
        { title: '标志性景点图标', type: 'UI-图标', url: 'ui5.png',
          detail: { name: '1-5-', list: [1, 2, 3, 4] } },
        { title: '阴阳师主题图标', type: 'UI-图标', url: 'ui6.png',
          detail: { name: '1-6-', list: [1, 2, 3, 4, 5] } },
      ],
      2: [
        { title: '泡泡IP设计', type: '平面-APP界面', url: 'pingmian1.png',
          detail: { name: '2-1-', list: [1, 2, 3, 4, 5, 6] } },
        { title: '爱奇艺电视剧破亿海报设计', type: '平面-传播图', url: 'pingmian2.png',
          detail: { name: '2-2-', list: [1, 2, 3, 4] } },
        { title: '《十三亿分贝》首页焦点图设计', type: '平面-焦点图', url: 'pingmian3.png',
          detail: { name: '2-3-', list: [1, 2, 3, 4, 5] } },
        { title: '《偶像练习生》banner', type: '平面-焦点图', url: 'pingmian4.png',
          detail: { name: '2-4-', list: [1, 2, 3, 4] } },
        { title: '小黄人C4D建模', type: '三维-建模', url: 'pingmian5.png',
          detail: { name: '2-5-', list: [1, 2, 3, 4, 5, 6] } },
        { title: '拍客线下海报', type: '三维-建模', url: 'pingmian6.png',
          detail: { name: '2-6-', list: [1, 2, 3, 4] } },
      ],
      3: [
        { title: '节气插画', type: '插画-插画海报', url: 'chahua1.png',
          detail: { name: '3-1-', list: [1, 2, 3, 4, 5] } },
        { title: '旅行插画', type: '插画-插画习作', url: 'chahua2.png',
          detail: { name: '3-2-', list: [1, 2] } },
        { title: '字母插画', type: '插画-插画习作', url: 'chahua3.png',
          detail: { name: '3-3-', list: [1] } }
      ],
      4:[
        { title: '情人节电商专题页', type: '网页-电商首页', url: 'web1.png',
          detail: { name: '4-1-', list: [1, 2] } },
        { title: '日常页面', type: '网页-电商首页', url: 'web2.png',
          detail: { name: '4-2-', list: [1, 2] } },
        { title: '天使之路专题页', type: '网页-节目专题页', url: 'web3.png',
          detail: { name: '4-3-', list: [1, 2, 3] } },
      ]
    },
    workList: [],
    module: { name: '' },
    isShowShare: false,
    postersBtn: {
      text: '生成海报',
      icon: '/images/sharebtn1.png'
    },
    showPoster: false,
    posterImg: '',
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options.id = 1;
    let name = '';

    switch(options.type) {
      case '1': name = 'UI'; break;
      case '2': name = '平面'; break;
      case '3': name = '插画'; break;
      case "4": name = '网页'; break;
    }

    wx.setNavigationBarTitle({ title: name })

    console.log(options.type)
    
    this.setData({
      workList: this.data.list[options.type],
      module: { name: name }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  cardDetail: function (e) {
    let info = e.target.dataset.info;

    console.log(info,'info')

    wx.navigateTo({
      url: '/pages/cardDetail/cardDetail?detail=' + JSON.stringify(info),
    })
  },

  showShare: function (e) {
    console.log(e.target.dataset.info)
    let info = e.target.dataset.info;
    this.setData({ isShowShare: true, detail: info.detail  })
  },

  closeShare: function () {
    this.setData({ isShowShare: false })
  },

  postersFunc: function () {
    
    if (this.data.postersBtn.text == '生成海报') {
      console.log('this.data.detail.name', this.data.detail.name)
      this.setData({
        postersBtn: {
          icon: '/images/loading.svg',
          text: '生成中',
        },
        showPoster: true,
        posterImg: imgUrl1 + this.data.detail.name + '0.png'
      }, () => {
        setTimeout(() => {
          this.setData({
            postersBtn: {
              icon: '/images/sharebtn1.png',
              text: '生成海报',
            },
            // showPoster: false,
            // posterImg: imgUrl1 + this.data.detail.name + '0.png'
          });
          let str = imgUrl1 + this.data.detail.name + '0.png';

          wx.previewImage({
            current: str, // 当前显示图片的http链接
            urls: [str] // 需要预览的图片http链接列表
          })
        }, 1000)
      })
    }
  },

  closePoster: function() {
    this.setData({ isShowShare: false, showPoster: false })
  }


})