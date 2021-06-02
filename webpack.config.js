const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,

    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env', {
                        debug: true,
                        corejs: 3,
                        useBuiltIns: "usage"
                    }]]
                }
            }
        },
        {
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.(html)$/,
            loader: 'url-loader'
        },
        {
            test: /\.(gif|png|jpg|jpeg|svg)?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'img/'
            }
        },
        {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ]
};