// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
  
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
  
    },
    go2stargame: function(){
      wx.navigateTo({
   
        url: '/pages/dice/dice',
   
        })
    },
    go2history: function(){
      wx.navigateTo({
   
        url: '/pages/history/history',
   
        })
    },
    data: {
      showModal: false
  },
  
  submit: function() {
      this.setData({
      showModal: true
      })
  },
  
  preventTouchMove: function() {
  
  },
  
  
  go: function() { 
      this.setData({
      showModal: false
      })
  }
  
  
  })