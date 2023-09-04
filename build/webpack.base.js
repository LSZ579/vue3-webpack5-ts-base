
/**
 * 公共配置文件
 * */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
module.exports = {
    entry: path.join(__dirname, '../src/main.ts'),//入口文件
    output: {
        filename: 'static/js/[name].[chunkhash:8].js',//输出的js名称
        path: path.join(__dirname, '../dist'),
        clean: true,//webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
        publicPath: '/',//打包后文件的公共前缀路径
    },
    module: {
        rules: [
            // 配置vue-loader和babel-loader对应插件配置
            {
                test: /\.vue$/,
                use: ['thread-loader', 'vue-loader'],
                include: [path.resolve(__dirname, '../src')], //只对项目src文件的vue进行loader解析
            },
            {
                test: /\.css$/,
                // include: [path.resolve(__dirname, '../src')],
                use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                include: [path.resolve(__dirname, '../src')],
                use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            },
            {
                test: /.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,//小于10k的转base64
                    }
                },
                generator: {
                    filename: 'static/images/[name].[contenthash:8][ext]'
                }
            },
            {
                test: /\.ts$/, // 匹配.ts文件
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      [
                        "@babel/preset-typescript",
                        {
                          allExtensions: true, //支持所有文件扩展名(重要)
                        },
                      ],
                    ]
                  }
                }
              }
        ]
    },
    cache: {
        type: 'filesystem'
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src')
        },
        extensions: ['.vue', '.ts', '.js', '.json']//这里只配置js, vue和ts和json，其他文件引入都要求带后缀，可以提升构建速度。
    },
    plugins: [
        new VueLoaderPlugin(), // vue-loader插件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
            inject: true, // 自动注入静态资源
        }),
        new webpack.DefinePlugin({
            'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}