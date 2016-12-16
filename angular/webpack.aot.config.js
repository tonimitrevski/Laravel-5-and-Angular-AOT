'use strict';
var path = require('path');
var ngtools = require('@ngtools/webpack');

module.exports = {
  entry: require('./webpack/entry'),

  context: path.join(process.cwd(), 'angular/app'),

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins').concat([
    new ngtools.AotPlugin({
      tsConfigPath: path.join(process.cwd(), 'tsconfig.aot.json'),
      baseDir: process.cwd(),
      entryModule: path.join(process.cwd(), 'angular', 'app', 'home', 'modules', 'main.module') + '#MainModule'
    })
  ]),

  resolve: require('./webpack/resolve'),

  stats: 'errors-only',

  devtool: 'source-map'
};
