// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)

    wx.request({
      url: 'https://locally.uieee.com/shops/' + options.id,
      success:(res)=>{
        console.log(res)
        this.setData({
          list:res.data
        })
      }
    })
    // wx.request({
    //   url: 'https://locally.uieee.com/shops/'+options.id,
    //   success:(res)=>{
    //     console.log(res)
    //     this.setData({
    //       list:res.data
    //     })
    //   }
    // })
  },

  fatimg:function(e){
    console.log(e.target.dataset.imgsrc)
    console.log(e.target.dataset.imgslist)

    wx.previewImage({
      current:'e.target.dataset.imgsrc',
      urls: e.target.dataset.imgslist
    })
    // console.log(e)
    // console.log(e.target.dataset.imgsrc)
    // console.log(e.target.dataset.imglist)
    // wx.previewImage({
    //   current: 'e.target.dataset.imgsrc', // 当前显示图片的http链接
    //   urls: e.target.dataset.imglist // 需要预览的图片http链接列表
    // })
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

  }
})