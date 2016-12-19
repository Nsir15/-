  // pages/index/index.js
Page({
  data:{
    // newList:[
    //         {url:"baidu.com",title:"sdsadsadasdas",classification:"ss",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
    //          {url:"baidu.com",title:"sdsadsadasdassss",classification:"ss",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
    //          {url:"baidu.com",title:"sdsadsadasdas",classification:"12",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
    //          {url:"baidu.com",title:"sdsadsadasdas",classification:"333",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
    //          {url:"baidu.com",title:"sdsadsadasdas",classification:"44",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
    //          {url:"baidu.com",title:"sdsadsadasdas",classification:"44",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
    //          {url:"baidu.com",title:"sdsadsadasdas",classification:"32",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
    //          {url:"baidu.com",title:"sdsadsadasdas",classification:"123",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
    //          {url:"baidu.com",title:"sdsadsadasdas",classification:"456",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
    //          {url:"baidu.com",title:"sdsadsadasdas",classification:"454",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"}
    //     ]

    newList:[
      {
		  "title"      : "iOS 两行代码实现自定义转场动画",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao70",
		  "date"       : "2016-11-14 00:00:00 +0000",
		  "shortdate"  : "November 14, 2016",
      "imgURL"     :"../../images/guide_card_notify.png"
      } ,

		{
		  "title"      : "iOS开发之位运算",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao69",
		  "date"       : "2016-11-07 00:00:00 +0000",
		  "shortdate"  : "November 07, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "iOS开发之均衡代码职责浅谈",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao68",
		  "date"       : "2016-10-27 00:00:00 +0000",
		  "shortdate"  : "October 27, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "微信小程序开发教程-从零开始《三》",
		  "category"   : "微信小程序",
		  "url"        : "http://allluckly.cn/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F/weixinxiaochengxu02",
		  "date"       : "2016-10-19 00:00:00 +0000",
		  "shortdate"  : "October 19, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "微信小程序开发教程-从零开始《二》",
		  "category"   : "微信小程序",
		  "url"        : "http://allluckly.cn/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F/weixinxiaochengxu01",
		  "date"       : "2016-10-18 00:00:00 +0000",
		  "shortdate"  : "October 18, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "微信小程序开发教程-从零开始《一》",
		  "category"   : "微信小程序",
		  "url"        : "http://allluckly.cn/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F/weixinxiaochengxu",
		  "date"       : "2016-10-17 00:00:00 +0000",
		  "shortdate"  : "October 17, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "Swift3.0学习系列之Swift实战-单例模式",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao67",
		  "date"       : "2016-10-13 00:00:00 +0000",
		  "shortdate"  : "October 13, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "Swift3.0学习系列之Swift实战-享元模式",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao66",
		  "date"       : "2016-10-13 00:00:00 +0000",
		  "shortdate"  : "October 13, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "iOS开发之iOS10推送必看(高阶2)",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao65",
		  "date"       : "2016-10-12 00:00:00 +0000",
		  "shortdate"  : "October 12, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "iOS开发之UITextField的那点事",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao64",
		  "date"       : "2016-10-09 00:00:00 +0000",
		  "shortdate"  : "October 09, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "iOS开发之iOS10推送必看(高阶1)",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao63",
		  "date"       : "2016-09-28 00:00:00 +0000",
		  "shortdate"  : "September 28, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "iOS开发之iOS10推送必看(基础篇)",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao62",
		  "date"       : "2016-09-27 00:00:00 +0000",
		  "shortdate"  : "September 27, 2016",
		  "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "iOS开发之Xcode8兼容适配iOS 10资料整理笔记",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao61",
		  "date"       : "2016-09-22 00:00:00 +0000",
		  "shortdate"  : "September 22, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "Xcode8开发iOS10推送通知过程",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao60",
		  "date"       : "2016-09-21 00:00:00 +0000",
		  "shortdate"  : "September 21, 2016",
		   "imgURL"     :"../../images/guide_card_notify.png"
		} ,

		{
		  "title"      : "iOS开发之按钮动画",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao59",
		  "date"       : "2016-09-20 00:00:00 +0000",
		  "shortdate"  : "September 20, 2016",
		  "imgURL"   : "https://wap.allluckly.cn/images/blog/tuogao/tougao59/1.gif"
		} ,

		{
		  "title"      : "iOS开发之百度外卖APP个人中心头像-浪-起来的动画效果",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao58",
		  "date"       : "2016-09-09 00:00:00 +0000",
		  "shortdate"  : "September 09, 2016",
		  "imgURL"   : "https://wap.allluckly.cn/images/blog/tuogao/tougao58/fistImg.gif"
		} ,

		{
		  "title"      : "iOS开发之协议代理",
		  "category"   : "投稿",
		  "url"        : "http://allluckly.cn/%E6%8A%95%E7%A8%BF/tougao57",
		  "date"       : "2016-09-01 00:00:00 +0000",
		  "shortdate"  : "September 01, 2016",
		  "imgURL"     :"../../images/guide_card_notify.png"
		}]
  },
  bindViewTap: function(){
    console.log('点击')
    // wx.navigateTo({
    //   url:'../detail/details?title=navigate'
    // })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url: 'https://wap.allluckly.cn/search.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        // console.log(res.data)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
