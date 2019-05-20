var fs = require('fs')

fs.readdir('C:/Users/lizhengpei/Desktop/Node-notes/02_Second_day/resource',function(err,files){
    if(err){
        return console.log('路径不存在')
    }
    console.log(files)
})