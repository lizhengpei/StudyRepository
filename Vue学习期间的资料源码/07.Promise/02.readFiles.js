
//需求：封装一个方法，我给你一个要读取文件的路径，这个方法要能读取到文件，并把内容返回给我

const fs =require('fs');
const path =require('path');

//这是普通读取文件的方式
/*fs.readFile(path.join(__dirname,'./1.txt'),'UTF-8',(err,dataStr) => {
 if(err){
 throw err
 } else {
 console.log(dataStr)
 }
 });*/


//初衷：给定文件路径，返回读取到的内容
//我们规定一下，callback中，有两个参数，第一个参数是失败的结果；第二个参数是成功的结果；
/*同时，我们规定了：如果成功后，返回的结果，应该位于 callback 参数的第二个位置，此时的第一个位置由于没有出错，
 所以放一个null；如果失败了，则第一个参数位置放 Error 对象，第二个位置放置一个 undefined */

function getFileByPath(fpath,succCb,errCb){
    fs.readFile(fpath,'UTF-8',(err,dataStr) => {
        //如果报错了，进入if分支后，if后面的代码就没有必要再执行了
        if(err) return errCb(err);
        succCb(dataStr)
    })
}

/*getFileByPath(path.join(__dirname,'./files/1.txt'),function(data){
    console.log(data+'哈哈哈哈，成功了！！！')
},function(err){
    console.log('失败了，注意：'+err.message)
});*/

//需求：先读取文件1，再读取文件2，最后读取文件3
//多层方法嵌套称为：回调地狱
getFileByPath(path.join(__dirname,'./files/1.txt'), function (data) {
    console.log(data);

    getFileByPath(path.join(__dirname,'./files/2.txt'), function (data) {
        console.log(data);

        getFileByPath(path.join(__dirname,'./files/3.txt'), function (data) {
            console.log(data);
        });
    });
});



