<?php

use App\Http\Controllers\Api\RecipeController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('/recipes', RecipeController::class);

Route::post('/recipes/{recipe}/createstep', [RecipeController::class, 'createStep']);
Route::delete('/recipes/steps/{recipestep}/', [RecipeController::class, 'deleteStep']);

Route::get('/recipes/categories/all', [RecipeController::class, 'allCategories']);
Route::post('/recipes/categories/create', [RecipeController::class, 'createCategory']);
Route::delete('/recipes/{recipecategory}/categories', [RecipeController::class, 'deleteCategory']);

Route::post('/recipes/{recipe}/categories/add', [RecipeController::class, 'addCategory']);
Route::delete('/recipes/{recipe}/categories/remove', [RecipeController::class, 'removeCategory']);

Route::get('/recipes/{recipecategory}/categories', [RecipeController::class, 'recipeCategories']);