// 引包
var mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;
// 创建一个模型
// 就是再设计数据库
// MongoDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
// mongoose 这个包就可以让你的设计编写过程变得非常的简单
// 创建一个 集合：名为 cat，里面有个对象叫 name ，数据类型是 string
var Cat = mongoose.model('Cat', {
    name: String
});

// 实例化一个 cat
var kitty = new Cat({
    name: '喵喵喵'
});

// 持久化保存 Kitty 实例
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('hello');
    }
})





// for (var i = 0; i < 100; i++) {
//     // 实例化一个 cat
//     var kitty = new Cat({
//         name: '喵喵喵' + i
//     });

//     // 持久化保存 Kitty 实例
//     kitty.save(function (err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('hello');
//         }
//     })
// }