// 封装原生 XMLHTTPRequest 的 get 请求方法

exports.get = function (url, callback) {
    var oReq = new XMLHttpRequest()
    oReq.onload = function () {
        callback(oReq.responseText)
    }
    oReq.open("get", url, true);
    oReq.send();
}