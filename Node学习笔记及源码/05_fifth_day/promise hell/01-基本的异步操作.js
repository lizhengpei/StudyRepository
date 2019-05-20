var fs = require('fs')
/* 
这里的异步操作：
文件读取的顺序是不一样的，可能现在是 A-B-C 后面就变成了 B-A-C 等各种情况
*/


fs.readFile('./data/a.txt','utf8',function(err,data){
    if(err){
        throw err
    }
    console.log(data);
})

fs.readFile('./data/b.txt', 'utf8', function (err, data) {
    if (err) {
        throw err
    }
    console.log(data);
})

fs.readFile('./data/c.txt', 'utf8', function (err, data) {
    if (err) {
        throw err
    }
    console.log(data);
})

















