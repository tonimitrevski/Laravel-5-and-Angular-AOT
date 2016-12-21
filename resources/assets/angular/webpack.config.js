'use strict';
var path = require('path');

module.exports = {
  entry: require('./webpack/entry'),

  context: path.join(process.cwd(), 'resources/assets/angular/app'),

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins'),

  resolve: require('./webpack/resolve'),

  stats: 'errors-only',

  devtool: 'source-map'
};
