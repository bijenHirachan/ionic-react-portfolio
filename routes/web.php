<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [HomeController::class, 'about']);
Route::get('/contact', [HomeController::class, 'contact']);
Route::post('/contact', [ContactController::class, 'store']);
Route::get('/blogs', [HomeController::class, 'blogs']);
Route::get('/blogs/{blog:slug}', [HomeController::class, 'blogDetails']);
Route::get('/projects/shop-demo', [HomeController::class, 'shopDemo']);
Route::get('/projects', [HomeController::class, 'projects']);
Route::get('/projects/{project:slug}', [HomeController::class, 'projectDetails']);

Route::get('/admin/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/blogs', BlogController::class)->except(['edit']);
    Route::get('/blogs/{blog:slug}/edit', [BlogController::class, 'edit']);
    Route::resource('/projects', ProjectController::class)->except(['edit']);
    Route::get('/projects/{project:slug}/edit', [ProjectController::class, 'edit']);
    Route::resource('/categories', CategoryController::class);

});



require __DIR__.'/auth.php';
