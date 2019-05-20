// 1.首先导入 http 核心模块
var http = require('http');

// 2.创建一个 http 服务器实例
var server = http.createServer();

// 3.注册 request，接收客户端请求
// request 有两个参数：
//      request 接收请求
//      response 发送响应消息
server.on('request',function(request,response){
    var url = request.url;
    console.log('请求我的客户端：',request.socket.remoteAddress,request.socket.remotePort)   
    if(url === "/products"){
        var products = [
            {
                titrle:"苹果 X",
                price:8888
            },
            {
                titrle:"菠萝 X",
                price:5000
            },
            {
                titrle:"小辣椒 X",
                price:1999
            }
        ];
        //响应的数据只能是 String 或者是 buffer(二进制)类型的，所以要使用 stringify() 方法来转字符串
        response.end(JSON.stringify(products));
    }
})

// 4.设置端口号，开启服务
server.listen(3000,function(){
    console.log('开启服务成功！')
})