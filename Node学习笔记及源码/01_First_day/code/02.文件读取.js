//  浏览器中的 JavaScript 是没有文件操作的能力的
//  但是 node 中的 JavaScript 具有文件操作的能力


//  fs 是 file-system 的简写，就是文件系统的意思
//  在 Node 中如果想要进行文件操作，就必须引入 fs 这个核心模块
//  在 fs 这个核心模块中，就提供了所有文件操作相关的 API

//  1. 使用 require 方法加载 fs 核心模块
var fs = require('fs');
//  2. 读取文件
//      第一个参数就是要读取的文件路径
//      第二个参数是一个回调函数
// 
//          成功
//            data  数据
//            error null
//          失败
//            data  null
//            error 错误对象
// 
fs.readFile('data/hello.txt',function(error,data){
    // <Buffer e4 bd a0 e5 a5 bd e5 95 8a ef bc 9f e4 bd a0 e8 bf 98 e5 a5 bd e5 90 97 ef bc 9f>
    // 文件中存储的其实都是二进制数据， 0  1
    // 这里为什么看不到 0 和 1 呢？ 是因为二进制转16进制了
    // 不管是二进制还是16进制，人类都不认识，只有计算机才知道
    // 所以我们要通过 toString 方法来把它转成我们能认识的文字
    if(error){
        console.log("失败之后error错误对象的值是："+error)
        console.log("失败之后data数据对象的值是："+data)
    }else{
        console.log("成功之后error错误对象的值是："+error)
        console.log("成功之后data数据对象的值是："+data)
    }

    // if(data != null){
    //     console.log(data.toString())
    // }else{
    //     console.log("找不到文件了！")
    // }
})