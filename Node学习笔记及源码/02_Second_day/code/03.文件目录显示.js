// 引入核心模块
var http = require('http')
var fs = require('fs')
// 创建 server 服务器实例对象
var server = http.createServer();

// 监听 server 服务器的 request 请求，设置请求处理函数
var dirUrl = 'C:/Users/lizhengpei/Desktop/Node-notes/02_Second_day';
server.on('request',function(request,response) {
    var url = request.url;
    fs.readFile('./03.文件目录显示.html',function(err,data){
        if(err){
            return response.end('Faild');
        }
        fs.readdir(dirUrl,function(err,files){
            if(err){
                return console.log('路径不存在！')
            }
            var content = ''
            files.forEach(item => {
                content += `
                <tr>
                    <td data-value="code/">
                        <a class="icon dir" href="/C:/Users/lizhengpei/Desktop/Node-notes/02_Second_day/code/">${item}/</a>
                    </td>
                    <td class="detailsColumn" data-value="0">

                    </td>
                    <td class="detailsColumn" data-value="1554517870">2019/4/6 上午10:31:10</td>
                </tr>
                `
            });
            data = data.toString()
            data = data.replace('^_^',content) 
            response.end(data)
        })
    })
})
// 绑定端口号，启动服务
server.listen(3000,function() {
    console.log('server is running...')
})






