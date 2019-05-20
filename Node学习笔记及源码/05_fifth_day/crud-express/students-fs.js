// 封装文件操作 API 
/**
 * 文件数据操作模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
// 引入核心模块
var fs = require('fs')

var dbPath = './data/db.json'
/**
 * 获取所有学生列表
 */
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        // data = data.toString()
        callback(null, JSON.parse(data).studentsInfo)
    })
}

/**
 * 根据 id 获取单个学生对象
 */
exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var studentsInfo = JSON.parse(data).studentsInfo
        var result = studentsInfo.find(function (item) {
            return item.id === parseInt(id)
        })
        callback(null, result)
    })
}

/**
 * 添加保存学生
 */

exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        data = data.toString()
        var studentsInfo = JSON.parse(data).studentsInfo
        // 处理 id 唯一的，不重复
        student.id = studentsInfo[studentsInfo.length - 1].id + 1
        // 把用户传递的对象保存到数组中
        studentsInfo.push(student)
        // 把对象数据转为字符串
        var fileData = JSON.stringify({
            studentsInfo: studentsInfo
        })
        // 把字符串数据写入文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就把错误对象传递给他
                return callback(err)
            }
            // 成功就没错，所以错误对象为 null
            callback(null)
        })
    })
}
/**
 * 更新学生
 */
exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        student.id = parseInt(student.id)
        var studentsInfo = JSON.parse(data).studentsInfo
        var stu = studentsInfo.find(function (item) {
            return item.id === student.id
        })
        // 这种方式不行，如果有 100 个，难道要写 100 次吗？
        // stu.name = student.name
        // stu.age =student.age
        // stu.hobbies = student.hobbies
        // stu.bornDate = student.bornDate
        // stu.gender = student.gender

        for (var key in student) {
            stu[key] = student[key]
        }
        var fileData = JSON.stringify({
            studentsInfo: studentsInfo
        })
        // 把字符串数据写入文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就把错误对象传递给他
                return callback(err)
            }
            // 成功就没错，所以错误对象为 null
            callback(null)
        })
    })
}

/**
 * 删除学生
 */
exports.deleteById = function (id,callback) {
    fs.readFile(dbPath,function (err,data) {
        if(err) {
           return callback(err)
        }
        // fs.readFile() 得到的是二进制数据，我们需要一个 JSON 数据对象
        var studentsInfo = JSON.parse(data).studentsInfo
        // findIndex 方法专门用来根据条件查找元素下标
        var deleteId = studentsInfo.findIndex(function (item) {
            return item.id === parseInt(id)
        })
        // 根据下标从数组中删除对应的学生对象
        studentsInfo.splice(deleteId,1)

        var fileData = JSON.stringify({
            studentsInfo: studentsInfo
        })
        // 把字符串数据写入文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就把错误对象传递给他
                return callback(err)
            }
            // 成功就没错，所以错误对象为 null
            callback(null)
        })
    })
}