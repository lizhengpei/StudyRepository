var express = require('express')

var serverApp = express()

// serverApp.use(express.static('public'))
serverApp.use('/public/',express.static('public'))

serverApp.get('/',function(request,response) {
    response.end('hello express!')
})
serverApp.get('/about',function(request,response) {
    response.end('about me, i was a goodboy!')
})
.listen(3000,function() {
    console.log('ex is running at port 3000...')
})