var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 拷贝文件用
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry:{
        a:'./src/js/a.js'
    },
    output: {
        path: './dist/',
        filename: 'js/[name].js',
        publicPath: "/webpack_async/dist/",
        chunkFilename: "js/[name].js"
    },
    module: {
        //加载器配置
        loaders: [
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader:'url-loader?limit=8000&name=img/[name].[hash:8].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', "", ".css"],
        alias: {
            b: path.join(__dirname, 'src/js/b.js'),
            c: path.join(__dirname, 'src/js/c.js')/*,
            zepto: path.join(__dirname, 'src/js/zepto.min.js')*/
        }
    },
    plugins:[
        // 分离css
        new ExtractTextPlugin('css/[name].css', {
            allChunks: true
           // publicPath:"http://10.200.105.42:8066/webpack3/src/"
        }),
        new HtmlWebpackPlugin({
            title:"webpack_async",
            template:"./src/index.html",
            filename:"index.html",
            hash:true,
            inject:"body",
            minify:{    //压缩HTML文件

                 removeComments:true,    //移除HTML中的注释

                 collapseWhitespace:false    //删除空白符与换行符

            },
            chunks: ['a']
        }),

        new HtmlWebpackPlugin({
            title:"webpack_async",
            template:"./src/news.html",
            filename:"news.html",
            hash:true,
            inject:"body",
            minify:{    //压缩HTML文件

                 removeComments:true,    //移除HTML中的注释

                 collapseWhitespace:false    //删除空白符与换行符

            },
            chunks: ['a']
        }),

        new HtmlWebpackPlugin({
            title:"webpack_async",
            template:"./src/test.php",
            filename:"test.php",
            hash:true,
            inject:"body",
            minify:{    //压缩HTML文件

                 removeComments:true,    //移除HTML中的注释

                 collapseWhitespace:false    //删除空白符与换行符

            },
            chunks: ['a']
        }),

        new CopyWebpackPlugin([
            {from:'./src/tpl/',to:'./tpl/'},
            {from:'./src/img/',to:'./img/'},
            {from:'./src/js/jquery-1.10.2.min.js',to:'./js/min.js'}
        ])
    ],
  
};
