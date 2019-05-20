var http = require('http')
var fs = require('fs')
var url = require('url')
var art_template = require('art-template')

var comments = [
    {
        name: '用户1',
        content: '今天天气很棒啊！',
        dateTime: new Date()
    },
    {
        name: '用户2',
        content: '今天天气很棒啊！',
        dateTime: new Date()
    },
    {
        name: '用户3',
        content: '今天天气很棒啊！',
        dateTime: new Date()
    },
    {
        name: '用户4',
        content: '今天天气很棒啊！',
        dateTime: new Date()
    },
    {
        name: '用户5',
        content: '今天天气很棒啊！',
        dateTime: new Date()
    }
]

http.createServer(function(request,response){
    // var url = request.url
    var obj = url.parse(request.url,true)
    var pathName = obj.pathname
    if(pathName === '/'){
        fs.readFile('./views/index.html',function(err,data){
            if(err){
                return response.end('404 NOT Found Your page.')
            }
            var htmlStr = art_template.render(data.toString(),{
                comments : comments
            })

            response.end(htmlStr)
        })
    }else if(pathName.indexOf('/public/') === 0){
        fs.readFile('.'+pathName,function(err,data){
            if(err){
                return response.end('404 NOT Found Your resource.')
            }
            response.end(data)
        })
    }else if(pathName === '/post'){
        fs.readFile('./views/post.html',function(err,data) {
            if(err) {
                return response.end('404 NOT Found Your page.')
            }
            response.end(data)
        })
    }else if(pathName === '/say'){
        var com = obj.query
        // response.end(JSON.stringify(obj.query))
        com.dateTime = new Date()
        comments.unshift(com)
        response.statusCode = 302
        response.setHeader('Location','/')
        response.end()
    }
    else {
        fs.readFile('./views/404.html',function(err,data){
            if(err) {
              return response.end('Are you sure your path is right?')
            }
            response.end(data)
        })
    }
}).listen(3000,function(){
    console.log('server is running...')
})












