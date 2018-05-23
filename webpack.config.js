var path = require('path')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // плагин минимизации
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // плагин для загрузки кода Vue

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new VueLoaderPlugin()
    ]
};