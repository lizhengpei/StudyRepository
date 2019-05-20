// 引入 mongoose 包
var mongoose = require('mongoose')
// 拿到 Schema 架构对象
var Schema = mongoose.Schema;
// 1. 连接数据库
// 连接的数据库不需要存在，再插入第一条数据之后就会自动创建数据库
mongoose.connect('mongodb://localhost/pets',{ useNewUrlParser: true })

// 2. 设计集合结构(表结构)
var petsSchema = new Schema({
    petName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    explain: {
        type: String
    }
})

// 3. 将文档架构发布为模型
// mongoose.model 方法就是用来将一个架构发布为 model
// 第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//      mongoose 会自动将大写名称的字符串生成 小写复数 的集合名称
//      例如这里 'Pet' 会被转为 pets
// 第二个参数：架构 Schema
// 返回值 ： 模型构造函数
var Pet = mongoose.model('Pet', petsSchema)

// 4. 拿到这个模型构造函数之后，我们就能对 users 集合中的数据为所欲为（增删改查）



//#region 新增
var pets = new Pet({
    petName:'金毛',
    price:'3000',
    explain:'这狗很温顺！'
})

// pets.save(function(err,DBdata) {
//     if(err) {
//         console.log('保存失败！');
//     }else {
//         console.log('保存成功！');
//         console.log(DBdata);
//     }
// })
//#region / 新增



//#region 查询
/**
 * 查询所有 
 * */
// Pet.find(function (err,DBdata) {
//     if (err) {
//         console.log('查询失败！');
//     } else {
//         console.log(DBdata);
//     }
// })

/**
 * 按条件查询
 */
// Pet.find({
//     petName : '中华田园犬'
// },function (err,DBdata) {
//     if (err) {
//         console.log('条件查询失败！');
//     } else {
//         console.log('条件查询成功！');
//         console.log(DBdata);
//     }
// })

/**
 * 按条件查询单个数据对象
 */
// Pet.findOne({
//     petName : '哈士奇'
// },function (err,DBdata) {
//     if (err) {
//         console.log('条件查询失败！');
//     } else {
//         console.log('条件查询成功！');
//         console.log(DBdata);
//     }
// })
//#region / 查询



//#region 删除
// Pet.remove({
//     _id : '5cb817a798c2be176423d1ac'
// },function (err,DBdata) {
//     if (err) {
//         console.log('删除失败！');
//     } else {
//         console.log('删除成功！');
//     }
// })
//#region



//#region 更新
Pet.findByIdAndUpdate('5cb817d53d6aa115fc52ab18',{
    explain : '这就是土狗啊！'
},function (err,DBdata) {
    if (err) {
        console.log('更新失败！');
    } else {
        console.log('更新成功！');
    }
})
//#region
















