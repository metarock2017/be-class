var path = require('path');
var webpack = require('webpack');
var ROOT = path.resolve(__dirname);
var APP = path.resolve(ROOT, 'app');
var BUILD = path.resolve(ROOT, 'build');
var htmlp = require('html-webpack-plugin');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  devtool: '#source-map',
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  entry: [
    path.resolve(APP, 'root.jsx'),
  ],
  disableCSSModules: false,
  extraBabelPlugins: [
    "transform-runtime"
  ],
  output: {
    path: BUILD,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  postcss: () => {
        return [
            require('autoprefixer')
        ];
    },
  module: {
    loaders: [
        {
          // js react jsx
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
        include: APP,
        exclude: /node_modules/, 
        query: {
            presets: ['es2015', 'react'],
            plugins: ['react-html-attrs'], //添加组件的插件配置
            env: {
              development: {
                 presets: ['react-hmre'],
              }
            }
          },
        },
        {
            test: /\.css$/, // Only .css files
            loader:  'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },
        // {
        //     test: /\.less$/,
        //     loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less!postcss'
        // },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style', 'css', 'less')
            // [{
            //     loader: "style-loader" // creates style nodes from JS strings
            // }, {
            //     loader: "css-loader" // translates CSS into CommonJS
            // }, {
            //     loader: "less-loader" // compiles Less to CSS
            // }]
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }
    ]
  },
  plugins:[
      new webpack.ProvidePlugin({
          "React": "react",
      }),
      new ExtractTextPlugin("./styles.css"),
  ]
};

module.exports = config;