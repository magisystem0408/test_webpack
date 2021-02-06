const path =require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');


module.exports = {
    entry:'./src/javascripts/main.js',
    output: {
        path: path.resolve( __dirname,'./dist'),
        filename:'javascripts/main.js',
    },
    module: {
        rules:[
    {
        test: /\.css/,
        use:[
            {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                    loader:'css-loader',
            },
        ],
    },
    {
        test: /\.(png|jpg)/,
        use:[{
            loader: 'file-loader',
            options: {
                esModule:false,
                name :'images/[name].[ext]',
            }
        },
        ],
    },
    ],
    },

    plugins: [
        // したから順番に読み込んでいく
        new MiniCssExtractPlugin({
            filename :'./stylesheets/main.css',
        }
        ),
        new HtmlWebpackPlugin({

            // 参照させる値
            template: './src/templates/index.html',
        }),
        new CleanWebpackPlugin(),


    ]
}
