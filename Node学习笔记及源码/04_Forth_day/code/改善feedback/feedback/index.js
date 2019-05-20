var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')

var comments = [
    {
        name: '他',
        content: '今天天气很棒啊！',
        dateTime: new Date()
    },
    {
        name: '她',
        content: '今天天气很棒啊！',
        dateTime: new Date()
    },
    {
        name: '它',
        content: '今天天气很棒啊！',
        dateTime: new Date()
    },
    {
        name: '你',
        content: '今天天气很棒啊！',
        dateTime: new Date()
    },
    {
        name: '我',
        content: '今天天气很棒啊！',
        dateTime: new Date()
    }
]

var appServer = express()
// 配置 express-art-template
appServer.engine('html', require('express-art-template'))
// 配置 body-parser,专门用来获取 POST 请求体数据
appServer.use(bodyParser.urlencoded({ extended: false }))
appServer.use(bodyParser.json())


appServer.use('/public/',express.static('./public'))

appServer.get('/',function(request,response){
    response.render('index.html',{
        comments : comments
    })
})
appServer.get('/post',function(request,response) {
        response.render('post.html')
})
appServer.post('/post',function(request,response) {
    var com = request.body
    com.dateTime = new Date()
    comments.unshift(com)
    response.redirect('/')
    response.end()
})
// appServer.get('/say',function(request,response) {
//     var query = request.query
//     query.dateTime = new Date()
//     comments.unshift(query)
//     // response.statusCode = 302
//     // response.setHeader('Location','/')
//     response.redirect('/')
//     response.end()
// })


appServer.listen(3000,function(){
    console.log('The appServer is running...');
})









