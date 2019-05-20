var express = require('express')
var fs = require('fs')

var AppServer = express()
AppServer.use('/node_modules',express.static('./node_modules/'))
AppServer.use('/axios/', express.static('../axios/'))

AppServer.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html;charset=UTF-8')
        fs.readFile('./ajax.html','utf8', (err,data) => {
            if(err){
                res.end(err)
            }
            res.end(data)
        })
})

// AppServer.get('/axios',function(req,res){
//     res.setHeader('Content-Type','text/html;charset=UTF-8')
//     var get = function () {
//         axios.get('./ajax.html')
//             .then(function (data) {
//                 res.end(data)
//             })
//             .catch(function (err) {
//                 res.end('发生错误！')
//                 console.log(err)
//             })
//     }
//     get()
// })

AppServer.listen(3000,() =>{
    console.log('The AppServer is running at port 3000 ...')
})

// fs.readFile('./test.json','utf8',function (err,data) {
//     if (err) {
//         console.log('数据读取失败！')
//     } else {
//         console.log(JSON.parse(data))
//     }
// })











