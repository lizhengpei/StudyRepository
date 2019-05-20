var mysql = require('mysql');

// 1.创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'projectdb'
});

// 连接数据库
connection.connect();   

// 执行数据操作 
connection.query('SELECT * FROM `projectinfo`', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

// connection.query('insert into ' +
//     '`projectinfo`(id, projectName, startDate, endDate, status) ' +
//     'values(NULL,"你给我滚！","2019-04-19","2019-05-19",1)',
//     function (error, results, fields) {
//         if (error) throw error;
//         console.log('The solution is: ', results);
//     });

// 关闭数据库连接
connection.end();







