// pages/eachKey/eachKey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nums:[11,22,33],
    xiyouPerson:[
      {
        _id:'001',
        name:'孙悟空',
        age:1500
      },
      {
        _id: '002',
        name: '猪八戒',
        age: 850
      },
      {
        _id: '003',
        name: '沙悟净',
        age: 980
      }
    ]
  },

  // 点击按钮
  addItemToNums(){
    this.data.nums.unshift(1)
    this.setData({
      nums:this.data.nums
    })
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

  }
})