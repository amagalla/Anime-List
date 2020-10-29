const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: '/src/index.html',
    }),
  ],
  devServer: {
    // publicPath: '/dist'
    proxy: {
      '/': 'http://localhost:3001',
    },
  },
  // devServer: {
  //     // port: 8080,
  //     hot: true,
  //     compress: true,
  //     publicPath: '/dist/',
  //     proxy: 'http://localhost:3000'
  //     // {
  //     //     '/': {
  //     //         target: 'http://localhost:3000',
  //     //         // secure: false
  //     //     },
  //     // },
  // },
};

// const webpack = require('webpack');
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//     mode: process.env.NODE_ENV,
//     entry: './client/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         publicPath: '/',
//         filename: 'index_bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env', '@babel/preset-react']
//                     }
//                 }
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: [
//                     'style-loader',  //3. inject style into DOM
//                     'css-loader',   //2.turns css into commonjs
//                     'sass-loader'   //1.turns sass into css
//                 ]
//             },
//             {
//                 // Loads the javacript into html template provided.
//                 // Entry point is set below in HtmlWebPackPlugin in Plugins
//                 test: /\.html$/,
//                 use: [{ loader: "html-loader" }]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './client/index.html',
//         }),
//     ],
//     // resolve: {
//     //   // Enable importing JS / JSX files without specifying their extension
//     //   extensions: ['.js', '.jsx'],
//     // },
// devServer: {
//     // port: 8080,
//     // hot: true,
//     // compress: true,
//     // publicPath: '/build/',
//     proxy:
//     {
//         '/': {
//             target: 'http://localhost:3000',
//             // secure: false
//         },
//     },
// },
// };

// const path = require('path')
// const HtmlWebPackPlugin = require('html-webpack-plugin')

// module.exports = {
//     mode: process.env.NODE_ENV,
//     entry: './src/index.js',
//     output: {
//         path: path.join(__dirname, '/dist'),
//         filename: 'index_bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: [
//                     // Creates `style` nodes from JS strings
//                     'style-loader',
//                     // Translates CSS into CommonJS
//                     'css-loader',
//                     // Compiles Sass to CSS
//                     'sass-loader',
//                 ],
//             },
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: '/src/index.html'
//         })
//     ],
//     // devServer: {
//     //     publicPath: '/dist'
//     // }
//     devServer: {
//         // port: 8080,
//         hot: true,
//         compress: true,
//         publicPath: '/dist/',
//         proxy: 'http://localhost:3000'
//         // {
//         //     '/': {
//         //         target: 'http://localhost:3000',
//         //         // secure: false
//         //     },
//         // },
//     },
// }

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "cross-env NODE_ENV=production node server/server.js",
//     "build": "cross-env NODE_ENV=production webpack",
//     "dev": "cross-env NODE_ENV=development concurrently \"nodemon server/server.js\" \"webpack serve --mode development --env development --open"
//   },

// "server": "nodemon server/server.js",
