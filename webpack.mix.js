const { mix } = require('laravel-mix');
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


