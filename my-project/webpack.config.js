'use strict'
const path = require('path')
const webpack = require('webpack')

// 单入口
module.exports = {
    // 默认false，也就是不开启
    watch: true,
    // 只有开启监听模式，watchOptions才有意义
    watchOptions: {
        // 默认为空，不监听的文件或者文件夹，支持正则匹配
        ignored: /node_modules/,
        // 监听到变化后会等300ms再去执行，默认300ms
        aggregateTimeout: 300,
        // 判断文件是否发生变化，是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次
        poll: 1000
    },
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}

// 多入口
// module.exports = {
//     // 默认false，也就是不开启
//     watch: true,
//     // 只有开启监听模式，watchOptions才有意义
//     watchOptions: {
//         // 默认为空，不监听的文件或者文件夹，支持正则匹配
//         ignored: /node_modules/,
//         // 监听到变化后会等300ms再去执行，默认300ms
//         aggregateTimeout: 300,
//         // 判断文件是否发生变化，是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次
//         poll: 1000
//     },
//     entry: {
//         index: './src/index.js',
//         search: './src/search.js'
//     },
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: '[name].js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /.js$/,
//                 use: 'babel-loader'
//             },
//             {
//                 test: /.less$/,
//                 use: [
//                     'style-loader',
//                     'css-loader',
//                     'less-loader'
//                 ]
//             },
//             {
//                 test: /.(png|svg|jpg|jpeg|gif)$/,
//                 use: 'url-loader',
//                 options: {
//                     limit: 10240
//                 }
//             },
//             {
//                 test: /.(woff|woff2|eot|ttf|otf)$/,
//                 use: 'file-loader'
//             }
//         ]
//     },
//     mode: 'development'
// }