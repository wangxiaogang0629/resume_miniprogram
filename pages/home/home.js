// pages/home/home.js
var log = require('../../utils/log.js') // 引用上面的log.js文件

Page({

  /**
   * 页面的初始数据
   */
  data: {
    workList: [
      {
        id: 1,
        name: 'UI',
        icon: '/images/UI.png',
      },
      {
        id: 2,
        name: '插画',
        icon: '/images/chahua.png',
      },
      {
        id: 3,
        name: '平面',
        icon: '/images/work_1.png',
      },
      {
        id: 4,
        name: '网页',
        icon: '/images/web.png',
      }
    ],

    userInfo: {
      name: '白雪',
      work: 'UI设计师',
      photo: '/images/photo.png',
      city: '河南省新乡市',
      major: '动画 (研究生）',
      school: '河北传媒学院',
      myTalk: '完整参与过多项互联网产品设计，能够独立完成互联网产品UI设计的完整视觉风格设定和整套产品UI设计；具有手绘能力，对色彩搭配比较敏感，有较强的自学能力来提升自己，较强的抗压能力和沟通能力，能够良好的与团队中的成员进行有效沟通；工作责任感强，认真工作。',
      workExp: [
        {
          time: '2018.4-至今',
          companyLogo: '/images/wm_logo.png',
          companyName: '广州蛙鸣智能科技(北京分公司)',
          des: [
            '负责产品移动端、WEB端的UI设计，跟进并协助开发团队按照设计稿实现设计效果;',
            '设计并适配各种智能带屏设备的LOGO、开机动画、UI界面以及相对应的WEB后台UI设计;',
            '配合推广团队负责APP线上线下活动的平面物料设计、视频物料;',
            '配合运营人员的需求，设计京东、淘宝电商首、详情页等物料。'
          ],
          project: [
            {
              title: 'WEPARK 智慧停车',
              type: '界面设计',
              content: [
                '项目描述：WEPARK是一款微信小程序，提供城市停车位的预约服务，实现停车位资源利用率的最大化、停车场利润的最大化和车主停车服务的最优化。',
                '职责描述: 1、在此项目中，依据产品设定，制作小程序以及相对应的后台管理系统的高保真视觉效果图; 2、负责后期切图、标注、适配，配合开发人员，上线工作和后期的日常维护。',
                '目前该小程序已.上线，平均每天有付费用户近千次，车流量2000次',
              ]
            },
            {
              title: 'WMPF中台',
              type: '界面设计',
              content: [
                '项目描述:是我司与微信合作开发，连接硬件设备与微信小程序的管理',
                '职责描述: 1.理解业务需求，了 解小程序配置的流程; 2、分析数据信息的必要性，考虑表单之间的逻辑性，保证信息填写流畅以及信息的快速查询; 3、依据用户在操作过程中遇到的问题，调整设计，尽量减少用户输入的情况，多用复选框、但选矿以及下啦惨淡等选项降低用户的犯错率。',
              ]
            },
            {
              title: '电子报纸',
              type: '界面设计',
              content: [
                '项目描述：是我司与国家电网报合作开发的基',
                '职责描述：1、梳理产品需求，熟悉业务，梳'
              ]
            }
          ]
        },
        {
          time: '2016.3-2018.4',
          companyLogo: '/images/aqi_1.png',
          companyName: '北京爱奇艺科技有限公司',
          des: [
            '爱奇艺首页焦点图、站内物料设计与维护;',
            '爱奇艺自制综艺、独播综艺的web专题页设计，协助web前端开发实现页面并,上线;',
            '电视剧频道、动漫频道、自制综艺的奇首焦点、频道焦点、暂停屏、传播图、等物料的设计与维护',
            '配合运营人员的需求，设计京东、淘宝电商首页、详情页等物料。'
          ],
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
    wx.makePhoneCall({
      phoneNumber: this.data.userInfo.phone
    })

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
  },

  /**
   * 
   */
  myWorkClick(e) {
    let type = e.currentTarget.dataset.info;

    console.log(type, e)

    wx.navigateTo({
      url: '/pages/myWorkDetail/myWorkDetail?type=' + type,
    })
  }

})