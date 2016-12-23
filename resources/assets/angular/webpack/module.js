'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
      {
          test: /\.ts$/,
          use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
          test: /\.html$/,
          use: 'raw-loader'
      },
      {
          test: /\.css$/,
          include: path.resolve(process.cwd(), 'resources/assets/angular/app'),
          loaders: ['to-string-loader', 'css-loader']
      },
      {
          test: /\.css$/,
          exclude: path.resolve(process.cwd(), 'resources/assets/angular/app'),
          loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader'
          })
      },
      {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
      }
  ]
};
