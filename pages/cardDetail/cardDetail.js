// pages/ cardDetail/cardDetail.js
let imgUrl = 'http://www.wxgblog.com/xiaoxue/'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      name: '',
      list: []
    },
    isShowShare: false,
    postersBtn: {
      text: '生成海报',
      icon: '/images/sharebtn1.png'
    },
    showPoster: false,
    posterImg: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let detail = JSON.parse(options.detail).detail;
    console.log(detail,'detail')
    this.setData({
      ['detail.list']: detail.list,
      ['detail.name']: imgUrl + detail.name
    })

    wx.showShareMenu({
      withShareTicket: true
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

  showShare: function () {
    this.setData({ isShowShare: true })
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
        posterImg: this.data.detail.name + '0.png'
      }, () => {
        setTimeout(() => {
          this.setData({
            postersBtn: {
              icon: '/images/sharebtn1.png',
              text: '生成海报',
            },
            showPoster: false,
            posterImg: this.data.detail.name + '0.png'
          });
          let str = this.data.detail.name + '0.png';

          wx.previewImage({
            current: str, // 当前显示图片的http链接
            urls: [str] // 需要预览的图片http链接列表
          })
        }, 1000)
      })
    }
  },

  shareWxFun: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  closePoster: function() {
    this.setData({ isShowShare: false, showPoster: false })
  }

})