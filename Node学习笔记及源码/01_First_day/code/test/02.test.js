// 1.首先我们来引入核心模块
var http = require('http')

// 2.创建server实例对象
var server = http.createServer();

// 3.监听request请求事件，设置请求处理函数
server.on('request',function(request,response){
    if(request.url === '/hello'){
        response.end('hello')
    }else{
        response.end('404 NOT Found')
    }
})

// 4.绑定端口号，开启服务

server.listen(3000,function(){
    console.log('开启服务成功！')
})