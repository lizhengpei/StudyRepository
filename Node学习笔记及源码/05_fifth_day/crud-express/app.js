var express = require('express')
var appServer = express()
var fs = require('fs')
var router = require('./router')
var bodyParser = require('body-parser')
// 开启公共资源
appServer.use('/node_modules/', express.static('./node_modules'))
appServer.use('/public/', express.static('./public'))
// 配置 express-art-template
appServer.engine('html', require('express-art-template'))
// 配置 post 请求体解析
appServer.use(bodyParser.urlencoded({
    extended: false
}))
appServer.use(bodyParser.json())
// 把路由挂载到 appServer 服务上，
appServer.use(router)
// router(appServer)

appServer.listen(3000, function () {
    console.log('The appServer is running...');
})