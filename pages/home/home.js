// pages/home/home.js
var log = require('../../utils/log.js') // 引用上面的log.js文件

Page({

  /**
   * 页面的初始数据
   */
  data: {
    workList: [
      {
        name: 'UI',
        icon: '/images/UI.png',
      },
      {
        name: '插画',
        icon: '/images/chahua.png',
      },
      {
        name: '网页',
        icon: '/images/web.png',
      },
      {
        name: '平面',
        icon: '/images/work_1.png',
      }
    ],

    userInfo: {
      name: '白雪',
      work: 'UI设计师',
      photo: '/images/chahua.png',
      city: '河南省新乡市',
      major: '动画 (研究生）',
      school: '河北传媒学院',
      myTalk: '完整参与过多项互联网产品设计，能够独立完成互联网产品UI设计的完整视觉风格设定和整套产品UI设计；具有手绘能力，对色彩搭配比较敏感，有较强的自学能力来提升自己，较强的抗压能力和沟通能力，能够良好的与团队中的成员进行有效沟通；工作责任感强，认真工作。',
      workExp: [
        {
          time: '2018.4-至今',
          companyLogo: '/images/wm_logo.png',
          companyName: '广州蛙鸣智能科技(北京分公司)',
        }
      ],
      phone: '18613735316',
      email: '2422522681@qq.com',
      evm: '/images/evm.png',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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


    log.info('hello test hahaha') // 日志会和当前打开的页面关联，建议在页面的onHide、onShow等生命周期里面打
    log.warn('warn')
    log.error('error')
    log.setFilterMsg('filterkeyword')
    log.setFilterMsg('addfilterkeyword')
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
   * 打电话
   */
  call: function () {
    // wx.makePhoneCall({
    //   phoneNumber: this.data.userInfo.phone //仅为示例，并非真实的电话号码
    // })

    // wx.requestSubscribeMessage({
    //   tmplIds: ['6OU1apCDjY83m0CKXu0lG_nzAsF5JueWxVpTYP6vcFo'],
    //   success(res) {
    //     console.log('ceshi', res)
    //   }
    // })

    // this.showInfo()

  },

  showInfo: function () {
    wx.previewImage({
      current: 'http://www.wxgblog.com/img/img3.png', // 当前显示图片的http链接
      urls: [
        'http://www.wxgblog.com/img/img3.png',
        'http://www.wxgblog.com/img/img4.png',
        'http://www.wxgblog.com/img/img5.png'
      ] // 需要预览的图片http链接列表
    })
  }

})