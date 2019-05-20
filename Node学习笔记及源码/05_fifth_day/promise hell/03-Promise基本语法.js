var fs = require('fs')


// 创建 Promise 容器
// Promise 本身不是一个异步操作，但是 Promise 容器里面通常放一个 异步方法
//      Promise 容器一旦创建，就开始执行里面的代码
//      function 中的 resolve, reject 是形参，想取什么名字，就什么名字
var _promise1 = new Promise(function (resolve, reject) {
    fs.readFile('./data/a.txt', 'utf8', function (err, data) {
        if (err) {
            // 失败了，承诺容器中的任务失败了
            reject(err)
        } else {
            // 承诺容器中的任务成功了
            resolve(data)
        }
    })
})

// _promise1 就是那个 Promise 容器的实例，所以 使用的时候直接 .then() 方法
//   当 _promise1 成功了，然后（.then）,做指定的操作
//   .then 接收的 function 就是 _promise1 容器中的 resolve 函数 ： 成功信息
//   后面的function 接收的就是 _promise1 容器中的 reject 函数   ： 错误信息
_promise1
    .then(function(data) {
        console.log(data)
    },function(err) {
        console.log(err)
    })













