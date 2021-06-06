<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Api\Controllers\DeveloperController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Operation with user
Route::get('/developers/{developer}', [DeveloperController::class, 'show']);
Route::get('/developers', [DeveloperController::class, 'index']);
Route::post('/developer', [DeveloperController::class, 'store']);
Route::post('/developer/{developer}', [DeveloperController::class, 'update']);
Route::delete('/developer/{developer}', [DeveloperController::class, 'destroy']);