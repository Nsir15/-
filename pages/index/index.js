// pages/index/index.js
Page({
  data:{
    newList:[
            {url:"baidu.com",title:"sdsadsadasdas",classification:"ss",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
             {url:"baidu.com",title:"sdsadsadasdassss",classification:"ss",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
             {url:"baidu.com",title:"sdsadsadasdas",classification:"12",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
             {url:"baidu.com",title:"sdsadsadasdas",classification:"333",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
             {url:"baidu.com",title:"sdsadsadasdas",classification:"44",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
             {url:"baidu.com",title:"sdsadsadasdas",classification:"44",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
             {url:"baidu.com",title:"sdsadsadasdas",classification:"32",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
             {url:"baidu.com",title:"sdsadsadasdas",classification:"123",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
             {url:"baidu.com",title:"sdsadsadasdas",classification:"456",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"},
             {url:"baidu.com",title:"sdsadsadasdas",classification:"454",time:"2016-10-17",imgURL:"../../image/guide_card_notify.png"}
        ]
  },
  bindViewTap: function(){
    console.log('点击')
    // wx.navigateTo({
    //   url:'../detail/details?title=navigate'
    // })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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