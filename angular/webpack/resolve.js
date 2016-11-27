'use strict';

var path = require('path');

module.exports = {
  modules: [
    'node_modules',
    path.resolve(process.cwd(), 'angular/app')
  ],
  extensions: ['.ts', '.js']
};
