// 引入核心模块
var http = require('http')
var fs = require('fs')
// 创建 server 服务器实例对象
var server = http.createServer();

// 监听 server 服务器的 request 请求，设置请求处理函数
var dirUrl = 'C:/Users/lizhengpei/Desktop/Node-notes/02_Second_day/resource';
server.on('request',function(request,response) {
    var url = request.url;
    var filePath = '/index.html';
    if(url === '/') {
        url = filePath
    }

    fs.readFile(dirUrl + url,function(err,data) {
        if(err) {
            return response.end('404 NOT Found')
        }else {
            response.end(data)
        }
    })
})
// 绑定端口号，启动服务
server.listen(3000,function() {
    console.log('server is running...')
})






