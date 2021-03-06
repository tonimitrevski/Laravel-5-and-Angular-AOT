<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('renderer2', [
    'as' => 'renderer2','uses' => 'Renderer2Controller@index'
]);

Route::get('reactive-form', [
    'as' => 'reactive-form','uses' => 'ReactiveFormController@index'
]);
