// pages/newpage/newpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    list:[],
    new_page:0,
    new_type:"",
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  fun:function(){
    let page = this.data.new_page+1
    let type = this.data.new_type
    if(this.data.hasMore){
      wx.request({
        url: 'https://locally.uieee.com/categories/' + type + '/shops?_page=' + page + '&_limit=10',
        success: (res) => {
          console.log(res)
          const totalNum = parseInt(res.header["X-Total-Count"])
          const hasMore = page * 10 < totalNum

          this.setData({
            list: res.data,
            new_page: page,
            list: this.data.list.concat(res.data),
            hasMore: hasMore
          })

          wx.stopPullDownRefresh()
        }
      })
    }


    
  },
  onLoad: function (options) {
    wx.request({
      url: 'https://locally.uieee.com/categories/' + options.id,
      success:(res)=>{
        wx.setNavigationBarTitle({
          title: res.data.name
        })

        this.setData({
          title:res.data.name,
          new_type: options.id
        })

        this.fun()
        
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.title)
    if (this.data.title==''){

    }else{
      wx.setNavigationBarTitle({
        title: this.data.title
      })
    }
   
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

    console.log(1)
    this.setData({
      list:[],
      new_page:0,
      hasMore:true
    })
    this.fun()
    // this.setData({
    //   list:[],
    //   new_page:0,
    //   hasMore:true
    // })
    // this.fun()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(1)
    
    this.fun()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})