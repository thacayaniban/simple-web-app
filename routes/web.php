<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth','verified'])->name('dashboard');

// Route::get('/developer-list', function () {
//     return view('admin.developer-list');
// })->middleware(['auth','verified'])->name('developer-list');

// Route::get('/developer-add', function () {
//     return view('admin.developer-add');
// })->middleware(['auth','verified'])->name('developer-add');

require __DIR__.'/auth.php';
