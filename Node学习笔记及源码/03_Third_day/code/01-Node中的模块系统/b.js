
// 导出多个
exports.he = 'he good'

exports.she = function(){
    console.log(exports.he)
}

exports.it = {
    name:'it'
    ,age:12
    ,like:'打球'
}



//导出单个
module.exports = 12

module.exports = function(x,y){
    return x+y
}

module.exports = {
    name:'Jack',
    age:12,
    hobbies:['篮球','乒乓球','羽毛球'],
    father:'John',
    mother:'Milen',
    add:function(x,y){
        return x+y
    }
}



