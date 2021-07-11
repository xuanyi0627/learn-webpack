'use strict'

const path = require('path')

// 单入口
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     mode: 'production'
// }

// 多入口
module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production'
}