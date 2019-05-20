// 写文件
// 导入 fs 文件操作核心模块
var fs = require('fs')


// 第一个参数：写入文件的路径
// 第二个参数：写入文件的内容
// 第三个参数：回调函数
//      error
//        文件写入成功
//        error是null
//      失败：
//        文件写入失败
//        error对象是错误对象

fs.writeFile('data/writeFile.txt','这里是写入文件writeFile',function(error){
    if(error){
        console.log(error)
    }else{
        console.log("成功了！")
    }
})