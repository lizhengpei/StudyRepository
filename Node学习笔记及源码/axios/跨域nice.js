var express = require('express')
var fs = require('fs')
var axios = require('axios')

var AppServer = express()
AppServer.use('/node_modules', express.static('./node_modules/'))
AppServer.use('/axios/', express.static('../axios/'))

AppServer.get('/', function (requset, respone) {
    respone.setHeader('Content-Type', 'text/html;charset=UTF-8')
    fs.readFile('./ajax.html', 'utf8', (err, data) => {
        if (err) {
            respone.end(err)
        }
        respone.end(data)
    })
})

AppServer.get('/axios', function (requset, respone) {
    respone.setHeader('Content-Type', 'text/html;charset=UTF-8')
    axios({
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }, //设置跨域请求头
            method: "POST", //请求方式
            url: "http://192.168.137.224:8001/userInfo/login" //请求地址
        })
        .then(function (res) {
            //返回值
            console.log(res.data)
            data = JSON.stringify(res.data)
            respone.end(data)
        })
        .catch(function (err) {
            console.log(err);
        });
})

AppServer.listen(3000, () => {
    console.log('The AppServer is running at port 3000 ...')
})