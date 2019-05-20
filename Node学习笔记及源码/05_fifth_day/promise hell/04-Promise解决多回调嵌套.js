var fs = require('fs')


var _promise1 = new Promise(function (resolve, reject) {
    fs.readFile('./data/a.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

var _promise2 = new Promise(function (resolve, reject) {
    fs.readFile('./data/b.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

var _promise3 = new Promise(function (resolve, reject) {
    fs.readFile('./data/c.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})


_promise1
    .then(function (data) {
        console.log(data)

        // 当 _promise1 读取成功的时候
        // 在这里 return 的结果就可以在后面的 then 中的 function 接收到
        // 当你在这 return 123，后面 .then 中 function 中接收的就是 123
        // 当你 return 'hello' 后面接受的就是 hello
        // 没有 return 的话， 后面接受的就是 undefined
        // 上面 return 的都是些没用的，并没有什么卵用
        // 真正有用的是： 我们可以 return 一个 Promise 对象
        // 当 return 一个 Promise 对象的时候， 后续的 then 中的方法的第一个参数会作为 _promise2 的 resolve
        // 第二个方法参数 也就是 reject
        return _promise2
    }, function (err) {
        console.log(err)
    })
    .then(function(data) {
        console.log(data)
        return _promise3
    },function(err) {
        console.log(err)
    })
    .then(function(data) {
        console.log(data)
    },function(err) {
        console.log(err)
    })





