const express = require("express"); //必须
//创建路由对象
const router = express.Router();
//引入登录模块

//配置路由
router.get("/userlist", require("./admin-route/userlist"));





//暴露
module.exports = router