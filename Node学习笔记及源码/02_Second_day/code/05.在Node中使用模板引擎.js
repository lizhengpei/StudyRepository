// 引入 art-template 模板
var art_template = require('art-template')
// 引入 fs 文件读取核心模块
var fs =  require('fs')

fs.readFile('./05.template.html',function(err,data){
    if(err){
        return console.log('文件读取失败！')
    }
    // 由于 fs.readFile 读出来的都是二进制的数据，所以 data 要 toString()
    // 而模板引擎的 render 方法需要接收字符串数据
    var result = art_template.render(data.toString(),{
        name:'Jack',
        age: 18,
        from : '湖南',
        hobbies: [
            '打球',
            '听歌',
            '打代码'
        ],
        title:'个人信息'
    })
    console.log(result);
})















