const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'./a.txt'), 'utf8', function (err, data) {
    if(err) {
        throw '读取文件出错！' 
    }else{
        console.log(data)
    }
})











