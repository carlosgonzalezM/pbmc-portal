<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BirthdayController;
use App\Http\Controllers\Api\DocumentController;
use App\Http\Controllers\Api\ReportController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/documents', DocumentController::class);
    Route::apiResource('/birthdays', BirthdayController::class);
});
Route::apiResource('/reports', ReportController::class);


Route::get('/getdocuments', [DocumentController::class, 'index']);
Route::get('/getnews', [ReportController::class, 'index']);
Route::get('/getbirthdays', [BirthdayController::class, 'getBirthdayMonth']);


Route::post('/signup',[AuthController::class, 'signup']);
Route::post('/login',[AuthController::class, 'login']);

Route::get("/download/{archivo}", [DocumentController::class, 'download']);
