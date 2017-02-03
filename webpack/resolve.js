'use strict';

let path = require('path');

module.exports = {
  modules: [
    'node_modules',
    path.resolve(process.cwd(), 'resources/assets/angular/app')
  ],
  extensions: ['.ts', '.js']
};
