'use strict';
let path = require('path');
let ngtools = require('@ngtools/webpack');

module.exports = {
    entry: require('./webpack/entry.aot'),

    context: path.join(process.cwd(), 'angular/app'),

    output: require('./webpack/output'),

    module: require('./webpack/module.aot'),

    plugins: require('./webpack/plugins').concat([
        new ngtools.AotPlugin({
            tsConfigPath: path.join(process.cwd(), 'tsconfig.aot.json')
        })
    ]),

    resolve: require('./webpack/resolve'),

    stats: 'errors-only',

    devtool: 'source-map'
};
