'use strict'
const path = require('path')
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

// 单入口
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
//     entry: './src/index.js',
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     mode: 'production',
// }

// 多入口
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
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: '[name]_[contenthash].css'
        })
    ],
    mode: 'production'
}