// 引入核心模块
var http = require('http')
var fs = require('fs')
var art_template = require('art-template')

// 创建 server 服务器实例对象
var server = http.createServer();

// 监听 server 服务器的 request 请求，设置请求处理函数
var dirUrl = 'C:/Users/lizhengpei/Desktop/Node-notes/02_Second_day';
server.on('request',function(request,response) {
    var url = request.url;
    fs.readFile('./07.template.html',function(err,data) {
        if(err) {
            return response.end('Faild');
        }
        fs.readdir(dirUrl,function(err,files) {
            if(err){
                return console.log('路径不存在！')
            }
            var htmlStr = art_template.render(data.toString(),{
                title:'07.在03案例中加入模板引擎.js',
                files:files
            })
            response.end(htmlStr)
        })
    })
})
// 绑定端口号，启动服务
server.listen(3000,function() {
    console.log('server is running...')
})
