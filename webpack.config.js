const path = require('path');

// TODO: I think this will be removed once we have Storybook
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    http2: true,
    // open: true,
    // port: 3000,
    hot: true,
    static: {
      // directory: path.join(__dirname, 'dist'),
      watch: true,
    }
  }
};
