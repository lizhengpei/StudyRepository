// 引入 mongoose 包
var mongoose = require('mongoose')

// 实例化 Schema 架构对象
var Schema = mongoose.Schema

// 连接数据库
mongoose.connect('mongodb://localhost/students', {
    useNewUrlParser: true
});

// 设计集合结构 （表结构）
var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    hobbies: {
        type: String
    },
    age: {
        type: Number
    },
    bornDate: {
        type: String
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    }
})

// 直接导出 模型构造函数
module.exports = mongoose.model('Student', studentSchema)







