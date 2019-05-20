var fs = require('fs')
var express = require('express')
var router = express.Router()
var Student = require('./students')



router.get('/', function (request, response) {
    response.redirect('/students')
})

router.get('/students', function (request, response) {
    Student.find(function (err, data) {
        if (err) {
            return response.status(500).send('找不到页面了 >_<:!')
        }
        var titles = [
            '学生编号',
            '学生姓名',
            '兴趣爱好',
            '年龄',
            '出生日期',
            '性别'
        ]
        response.render('index.html', {
            titles: titles,
            studentsInfo: data
        })
    })

})

router.get('/students/new', function (request, response) {
    response.render('new.html')
})

router.post('/students/new', function (request, response) {
    new Student(request.body).save(function (err) {
        if (err) {
            return response.status(500).send('数据保存失败 >_<:!')
        }
        response.redirect('/students')
    })
})

router.get('/students/edit', function (request, response) {
    Student.findById(request.query.id.replace(/"/g,''), function (err, data) {
        if (err) {
            return response.status(500).send('找不到页面了 >_<:!')
        }
        response.render('edit.html', {
            studentsInfo: data
        })
    })
})

router.post('/students/edit', function (request, response) {
    var id = request.body.id.replace(/"/g,'')
    Student.findByIdAndUpdate(id,request.body, function (err) {
        if (err) {
            return response.status(500).send('找不到页面了 >_<:!')
        }
        response.redirect('/')
    })
})

router.get('/students/delete', function (request, response) {
    var id = request.query.id.replace(/"/g,'')
    Student.findByIdAndDelete(id,function (err) {
        if(err) {
            return response.status(500).send('找不到页面了 >_<:!') 
        }
        response.redirect('/')
    })
})


module.exports = router