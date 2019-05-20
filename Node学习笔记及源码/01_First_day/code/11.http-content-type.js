// 引入核心模块
var http = require('http');

// 创建server实例
var server = http.createServer();

// 注册 request ，监听请求      里面有俩参数
server.on('request',function(req,res){
    var url = req.url;
    if(url === '/plain'){
        // 处理浏览器不识别 汉字 使用 plain 
        res.setHeader('Content-Type','text/plain;charset=UTF-8');
        res.end('你好，你还好吗？你很好！');
    }else if(url === '/html'){
        // 处理浏览器不识别 HTML代码 使用 html
        res.setHeader('Content-Type','text/html;charset=UTF-8');
        res.end('<h1>很棒棒哦！<a href="#">点我</a></h1>');
    }
    // if(url === '/EN'){
    //     res.end('copy that!'+'your requestAddress was:--->'+url);
    // }else if(url === '/CN'){
    //     // 在服务器端默认发送的数据，其实是 UTF-8 编码的内容
    //     // 但是浏览器不知道你是 UTF-8 编码的内容
    //     // 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统默认编码去解析
    //     // 中文操作系统默认编码是 GBK 
    //     res.end('收到！'+'你的请求地址是:--->'+url);
    // }
})

// 绑定端口号，开启服务
server.listen(7000,function(){
    console.log('server is running...')
})