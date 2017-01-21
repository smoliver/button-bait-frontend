var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var Autoprefixer = require('Autoprefixer');

module.exports = {
    context: __dirname + '/src',
    entry: ['whatwg-fetch', './index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new BundleTracker ({ filename: './webpack-stats.json', indent: 2 })
    ],
    devtool: "#cheap-source-map",
    resolve: {
        root: [
            __dirname + '/src'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-object-assign']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            },
        ]
    }
    // postcss: [ Autoprefixer({ browsers: ['last 2 versions'] }) ],
}

