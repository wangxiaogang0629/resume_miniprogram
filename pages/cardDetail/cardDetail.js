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
    animationData: {},
    animationData1: {},
    heartImg: 2,
    opacity: 0,
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
            // showPoster: false,
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
  },

  like: function () {
    let animation = wx.createAnimation({
      transformOrigin: '19rpx 34rpx',
      duration: 80
    });

    animation = animation.rotate(-25).step().rotate(0).step().scale(1.05).step().scale(1.0).step().export()

    let animation1 = wx.createAnimation({
      transformOrigin: '11rpx 10rpx'
    });

    animation1 = animation1.scale(1.1).step({
      duration: 150,
    }).scale(1.11).step({
      duration: 100,
    }).scale(0.01).step({
      duration: 100
    }).export()

    if (this.data.heartImg == 1) {
      this.setData({ heartImg: 2, opacity: 0 })
      return;
    }
    this.setData({ animationData: animation }, () => {
      setTimeout(() => {
        this.setData({ heartImg: 1, opacity: 1 }, () => {

          setTimeout(() => {
            this.setData({ animationData1: animation1 })
          }, 100)
        })
      }, 80)
    });

  }
})