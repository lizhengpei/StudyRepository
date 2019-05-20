// 此文件无用，只是用来记录 头信息

axios({
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }, //设置跨域请求头
        method: "POST", //请求方式
        url: "https://solelynet.com/public/index.php/api/v1/UserMenu/GetTree" //请求地址
    })
    .then(function (res) {
        //返回值
        console.log(res.data)
    })
    .catch(function (err) {
        console.log(err);
    });