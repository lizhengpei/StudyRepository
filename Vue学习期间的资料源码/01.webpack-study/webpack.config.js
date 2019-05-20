
const webpack = require('webpack');

const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer:{//配置dev-server命令参数的第二形式
//--open --port 3000 --contentBase src --hot
        open:true,  //自动打开浏览器
        port:3000,  //设置端口号
        //contentBase:'src',  //浏览器打开的根目录
        hot:true    //启动热更新的第一步
    },
    plugins:[   //配置插件的节点
     new webpack.HotModuleReplacementPlugin(),  //第三步：new一个热更新的 模块对象，这是启用热更新的第三步
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html') // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
             // 指定生成的页面的名称
        })
    ],
    module:{    //这个节点，用于加载所有第三方模块加载器
        rules:[ //所有第三方模块的匹配规则
            { test:/\.css$/,use:['style-loader','css-loader'] },//处理后缀 .css
            { test:/\.less$/,use:['style-loader','css-loader','less-loader'] },//处理后缀 .less
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader'] },//处理后缀 .scss
            { test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=9735&name=[hash:8]-[name].[ext]'] },//处理图片
            { test:/\.ttf|eot|svg|woff|woff2$/,use:['url-loader'] }, //处理字体
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
};
