const path = require('path');

module.exports ={
    entry: {
        cartNotification: './src/cart-notification.js',
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}


// //for all JS
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const glob = require('glob-all');

// module.exports = {
//   entry: glob.sync('./src/**/*.js'),
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Output Management'
//     }),
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   // devtool: 'inline-source-map',
//   mode: 'production',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         // exclude: /node_modules/,
//         use: ['babel-loader']
//       }
//     ]
//   }

// };
