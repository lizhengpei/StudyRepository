// 用来获取机器信息的
var os = require('os')

// 用来操作路径的
var path = require('path')

// 获取当前机器 cpu 的信息
console.log(os.cpus())

// memory 内存
console.log(os.totalmem())

// extname extension name
console.log(path.extname('C://a/a/a/a/a/hello.txt'))
