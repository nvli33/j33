//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    list:[],
    navlist:[]
  },
  onLoad: function () {
    // wx.request({
    //   url:"https://douban.uieee.com/v2/movie/coming_soon",
    //   header:{
    //     "content-type":"json"
    //   },
    //   success:function(res){
    //     console.log(res)
    //   },
    //   fail:function(erro){
    //     console.log(erro)  
    //   }
    // })

    wx.request({
      url: "https://locally.uieee.com/slides",
      success:(res)=>{
        console.log(res)
        this.setData({
          list:res.data
        })
      },
      fail: function (erro) {
        console.log(erro)
      }
    })


    wx.request({
      url: "https://locally.uieee.com/categories",
      success: (res) => {
        console.log(res)
        this.setData({
          navlist:res.data
        })
      },
      fail: function (erro) {
        console.log(erro)
      }
    })





    // wx.request({
    //   url: 'https://douban.uieee.com/v2/movie/coming_soon',
    //   success:(res)=>{
    //     console.log(res)
      
    //   }
    // })

    // wx.request({
    //   url: 'https://locally.uieee.com/slides',
    //   success:(res)=>{
    //     console.log(res)
    //     this.setData({
    //       list:res.data
    //     })
    //   }
    // })

    // wx.request({
    //   url: 'https://locally.uieee.com/categories',
    //   success: (res) => {
    //     console.log(res)
    //     this.setData({
    //       navlist: res.data
    //     })
       
    //   }
    // })
  }
})
