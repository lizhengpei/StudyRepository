// require 是一个方法
// 它的作用是用来加载模块的
// 在 Node 中模块有三种
//      具名的核心模块，例如 fs，http
//      用户自己编写的文件模块
//      相对路径必须加  ./ 或者../

console.log('a.js 文件被执行了！')

require('./b')

console.log('a.js 文件执行结束！')











