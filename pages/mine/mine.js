
Page({
   data:{
    indicator:true,
    autoplay:true,
    duration:1000,
    interval:5000, 
    images:[
      {"id":139,"name":"","orders":4,"picurl":"http://image.huanqiuxiaozhen.com/%E7%84%A6%E7%82%B9%E5%9B%BE/2016_12_1_1480572833365","targeturl":"http://mp.weixin.qq.com/s/ALp_dXOgOljqhH6VyOGMLw","distributorid":"all"},
      {"id":129,"name":"绘本","orders":3,"picurl":"http://image.huanqiuxiaozhen.com/%E7%84%A6%E7%82%B9%E5%9B%BE/2016_9_18_1474194376998","targeturl":"http://mp.weixin.qq.com/s?__biz=MzI4NjA0NDY5MA==&mid=2651959962&idx=2&sn=1d21dbfcf1c7c42687981f56262ba60b&scene=4#wechat_redirect","distributorid":"all"},
    {"id":130,"name":"围兜","orders":2,"picurl":"http://image.huanqiuxiaozhen.com/%E7%84%A6%E7%82%B9%E5%9B%BE/2016_9_18_1474194498240","targeturl":"http://wx.huanqiuxiaozhen.com/search-result.html?keywords=%E5%9B%B4%E5%85%9C","distributorid":"all"}]
   },
   mapViewTap : function(){
 
   },

   swiperChange : function(){
     console.log('轮播改变时会触发change事件')
   },
   itemTap : function(e){
     console.log('item  点击'+ e.currentTarget.dataset.name)
   },
   onLoad:function(){
     console.log('mine.load')
    //  var that = this
    //  wx.request({
    //    url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
    //    data: {},
    //    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //    // header: {}, // 设置请求的 header
    //    success: function(res){
    //      console.log('images'+ res.data)
         
    //      // success
    //    },
    //    fail: function() {
    //      // fail
    //    },
    //    complete: function() {
    //      // complete
    //    }
    //  })
   },

   onShow:function(){

   },

})