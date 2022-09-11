const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;
// TODO: I think this will be removed once we have Storybook
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const packageJson = require('./package.json');

// const { name } = packageJson;

// The following configuration options are common to ModuleFederationPlugin and dts-loader
const ModuleFederationCommonConfig = {
  name: 'FederatedCVComponents',
  exposes: {
    './Header': './src/components/Header',
    './Summary': './src/components/Summary',
  },
}

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
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
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          },
          {
            loader: 'dts-loader',
            options: {
              ...ModuleFederationCommonConfig,
              typesOutputDir: './distTypes' // Optional, default is '.wp_federation'
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      fs: false,
      path: false,
      os: false,
      module: false
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      ...ModuleFederationCommonConfig,
      filename: 'remoteEntry.js',
      shared: {
        react: {
          singleton: true
        },
        'react-dom': {
          singleton: true
        },
        'styled-components': {
          singleton: true
        },
      },
    }),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    server: 'spdy',
    // open: true,
    // port: 3000,
    hot: true,
    static: {
      // directory: path.join(__dirname, 'dist'),
      watch: true,
    }
  }
};
