const express = require("express")
const ejs = require("ejs")
const app = new express()

app.set("view engine", "ejs"); //配置引擎
app.set("views", __dirname + "/views"); //配置路由路径
app.use(express.static("public")); // 配置静态资源路径

//引入自定义模块
const admin = require("./route/admin")
app.use("/admin", admin)
const user = require("./route/user")
app.use("/user", user)

//端口号
app.listen(9527, () => {
    console.log("9527开始运行...");
})