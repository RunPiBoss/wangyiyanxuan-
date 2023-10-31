const express = require("express")
const router = express.Router();
// 引入轮播图数据
const bannerData =require('../data/banner.json')
const hotData = require('../data/hot.json')
const productData = require('../data/product.json')

// 测试接口
router.get('/test', (req, res) => {
    res.send('测试成功');
})

/* 
*首页轮播图
*/
router.get('/home/banner',(req,res)=>{
    console.log('成功')
    res.send(bannerData)
   
})


/* 
*首页人气推荐
*/
router.get('/home/hot',(req,res)=>{
    console.log('成功')
    res.send(hotData)
   
})

/* 
*首页-产品区块
*/
router.get('/home/product',(req,res)=>{
    console.log('成功')
    res.send(productData)
   
})

module.exports = router;