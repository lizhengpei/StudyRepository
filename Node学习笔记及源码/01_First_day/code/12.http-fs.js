// 引入核心模块
var http = require('http');
var fs = require('fs');
// 创建server实例
var server = http.createServer();

// 注册 request ，监听请求      里面有俩参数
server.on('request',function(request,response){
    var url = request.url;
    if(url === '/'){
        fs.readFile('./resource/index.html',function(error,data){
            if(error){
                response.setHeader('Content-type','text/plain; charset=UTF-8');
                response.end('文件读取失败，请稍后重试！');
            }else{
                response.setHeader('Content-type','text/html;charset=UTF-8');
                // response.end() 默认只支持两种数据类型：二进制 和 字符串
                // 由于 fs.readFile() 读出来的数据类型就是 二进制的，所以不用转数据类型
                response.end(data);
            }
        })
    }else if(url === '/img'){
        fs.readFile('./resource/white-snake.jpg',function(error,data){
            if(error){
                response.setHeader('Content-type','text/plain; charset=UTF-8');
                response.end('文件读取失败，请稍后重试！');
            }else{
                response.setHeader('Content-type','image/jpeg;');
                // response.end() 默认只支持两种数据类型：二进制 和 字符串
                // 由于 fs.readFile() 读出来的数据类型就是 二进制的，所以不用转数据类型
                response.end(data);
            }
        })
    }
})

// 绑定端口号，开启服务
server.listen(7000,function(){
    console.log('server is running...')
})