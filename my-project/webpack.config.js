'use strict'
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
    mode: 'production',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}
