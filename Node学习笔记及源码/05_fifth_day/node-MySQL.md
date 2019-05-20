# 使用 node 操作 MySQL
安装：
```shell
npm i mysql
```
使用方法：
```javascript
var mysql = require('mysql')

// 1.创建连接
var connection = mysql.createConnection({
    host: 'localhost',      // 主机
    user: 'root',           // 用户名
    password: '123456',     // 用户密码
    database: 'projectdb'   // 要连接的数据库
})
// 连接数据库
connection.connect()

// 执行数据操作 
// 增删改查都在 connection.query() 方法实现，只是使用不同的 SQL 语句
connection.query('SELECT * FROM `projectinfo`', function (error, results, fields) {
    if (error) throw error
    console.log('The solution is: ', results)
})

// 关闭数据库连接
connection.end()
```







