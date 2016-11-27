'use strict';

var path = require('path');

console.log(path.join(process.cwd()));

module.exports = {
  path: path.join(process.cwd(), 'public'),
  filename: '[name].bundle.js'
};
