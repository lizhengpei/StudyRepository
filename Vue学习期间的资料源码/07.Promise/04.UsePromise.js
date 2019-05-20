const fs = require('fs');

function getFileByPath (fpath){
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,'UTF-8',(err,dataStr)=>{

            if(err) return reject(err);
            resolve(dataStr);
        })
    });
}

//需求：先读第一个文件，再读第二个文件，最后读第三个文件
//注意：通过 .then 指定 回调函数 的时候，成功的 回调函数，必须 传，但是，失败的 回调函数，可以省略 不传
//读取文件1
//在上一个 .then 中，返回一个新的 promise 实例，可以继续使用下一个 .then 来处理
/*
getFileByPath('./files/1.txt')
.then(function(data){
    console.log(data);

    //读取文件2
    return getFileByPath('./files/2.txt');
},function(err){
    console.log('失败的结果：'+err.message);

    //返回一个 promise 实例
    return getFileByPath('./files/2.txt');
})
.then(function(data){
    console.log(data);

    //读取文件3
    return getFileByPath('./files/3.txt')
})
.then(function(data){
    console.log(data)

});
*/



/*当 我们有这样的需求： 哪怕前面的 Promise 执行失败了，但是，不要影响后续 promise 的正常执行，此时，我们可以单独为 每个 promise，
通过.then 指定一下失败的回调；*/

/*有时候，我们有这样的需求，个上面的需求刚好相反：如果 后续的Promise 执行，依赖于 前面 Promise 执行的结果，如果前面的失败了，
则后面的就没有继续执行下去的意义了，此时，我们想要实现，一旦有报错，则立即终止所有 Promise的执行；*/

//读取文件1
getFileByPath('./files/11.txt')
    .then(function(data){
        console.log(data);

        //读取文件2
        return getFileByPath('./files/2.txt');
    })
    .then(function(data){
        console.log(data);

        //读取文件3
        return getFileByPath('./files/3.txt')
    })
    .then(function(data){
        console.log(data)

    })
    .catch(function(err) {  /*如果前面有任何的 Promise 执行失败，则立即终止所有 promise 的执行，并马上进入 catch 去处理
                            Promise中 抛出的异常
                            */
        console.log(err.message)
    });

