var a = '你好'
console.log(a);
var fs = require('fs')

fs.readFile('data/hello.txt',function(err,data) {
    if(err){
        console.log('失败');
    }
    console.log(data);
})

var b = '<Buffer e4 bd a0 e5 a5 bd e5 95 8a ef bc 8c e6 89 91 e8 a1 97>'
console.log(b.toString());





