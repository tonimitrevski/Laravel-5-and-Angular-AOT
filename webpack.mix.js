let mix = require('laravel-mix').mix;
let path = require('path');

mix.webpackConfig({
    context: path.join(process.cwd(), 'resources/assets/angular/app'),

    module: require('./webpack/module'),

    plugins: require('./webpack/plugins'),

    resolve: require('./webpack/resolve'),

    stats: 'errors-only',

    devtool: 'source-map'
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/angular/app/polyfill.ts', 'public/js');
if(process.env.NODE_ENV === "production")
{
    mix.js('resources/assets/angular/app/home/bootstrap.aot.ts', 'public/js/home.js');
}
else if(process.env.NODE_ENV === "development")
{
    mix.js('resources/assets/angular/app/home/bootstrap.ts', 'public/js/home.js');
}



