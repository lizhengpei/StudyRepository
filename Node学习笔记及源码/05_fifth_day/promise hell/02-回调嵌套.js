var fs = require('fs')
/* 
    基于 01 的基础上，我们想要他不再像 01 里面的异步执行顺序，而是有秩序的执行，这里就只能回调嵌套回调，如果回调的操作多了，就称之为：回调地狱
*/
fs.readFile('./data/a.txt', 'utf8', function (err, data) {
    if (err) {
        throw err
    }
    console.log(data)
    fs.readFile('./data/b.txt', 'utf8', function (err, data) {
        if (err) {
            throw err
        }
        console.log(data)
        fs.readFile('./data/c.txt', 'utf8', function (err, data) {
            if (err) {
                throw err
            }
            console.log(data)
        })
    })
})



