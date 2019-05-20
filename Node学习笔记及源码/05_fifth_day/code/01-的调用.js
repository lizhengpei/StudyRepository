var http = require('http')
var ajax = require('./01-封装ajax方法')
var express = require('express')
var fs = require('fs')

var httpServer = http.createServer()

httpServer.on('request', function (request, response) {
    fs.readFile('./data.json', function (err, data) {
        // response.setHeader('ContentType','text/html')
        response.setHeader('Content-Type', 'text/html;charset=utf8')
        if (err) {
            response.end(err)
        }
        response.end(data)
    })
})

httpServer.listen(3000, function () {
    console.log('The httpServer is running...');
})


// var appServer = express()
// appServer.get('/', function (request,response) {
//     response.send('hello')
// })
// appServer.get('/a', function (request,response) {
//     response.send('a')
// })
// appServer.get('/b', function (request,response) {
//     response.send('b')
// })
// appServer.get('/c', function (request,response) {
//     response.send('c')
// })


// appServer.listen(3000,function(){
//     console.log('The appServer is running...')
// })