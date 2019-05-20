// 引入核心模块
var http = require('http')
var fs = require('fs')
// 创建 server 服务器实例对象
var server = http.createServer();

// 监听 server 服务器的 request 请求，设置请求处理函数
var dirUrl = 'C:/Users/lizhengpei/Desktop/Node-notes/02_Second_day/resource';
server.on('request',function(request,response) {
    var url = request.url
    if(url === '/') {
        fs.readFile(dirUrl+'/index>.html',function(err,data) {
            response.setHeader('Content-type','text/html; charset=UTF-8')
            if(err) {
                return response.end('读取文件失败！')
            }else {
                response.end(data);
            }
        })
    }else if(url === '/a.txt') {
        fs.readFile(dirUrl+'/a.txt',function(err,data) {
            response.setHeader('Content-type','text/plain; charset=UTF-8')
            if(err) {
                return response.end('读取文件失败！')
            }else {
                response.end(data);
            }
        })
    }else if(url === '/img/1.png') {
        fs.readFile(dirUrl+'/img/1.png',function(err,data) {
            response.setHeader('Content-type','image/png;')
            if(err) {
                return response.end('读取文件失败！')
            }else {
                response.end(data);
            }
        })
    }else{
        response.end('404 NOT Found')
    }



})
// 绑定端口号，启动服务
server.listen(3000,function() {
    console.log('server is running...')
})






