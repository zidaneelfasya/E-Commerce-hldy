<?php

use App\Http\Controllers\ItemController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin', function () {
    return Inertia::render('Admin/Dashboard');

})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Item
    Route::get('/admin/items', function () {
        return Inertia::render('Admin/Item/Index');
    });
    Route::get('/admin/items/details/{id}', function ($id) {
        return Inertia::render('Admin/Item/Detail', ['id' => $id]);
    });
    // Route::apiResource('items', ItemController::class);
    Route::get('/api/get/items', [ItemController::class, 'index'])->name('items.index');
    Route::get('admin/items/create', [ItemController::class, 'create'])->name('items.create');
    Route::post('api/items', [ItemController::class, 'store'])->name('items.store');
    Route::get('admin/items/{id}/edit', [ItemController::class, 'edit'])->name('items.edit');
    Route::put('api/items/{id}', [ItemController::class, 'update'])->name('items.update');
    Route::delete('api/items/{id}', [ItemController::class, 'destroy'])->name('items.destroy');

});
Route::get('/api/items/details/get/{id}', [ItemController::class, 'show'])->name('items.show');


Route::get('api/get-csrf-token', function () {
    return response()->json([
        'csrf_token' => csrf_token(),
    ]);
});

Route::get('/product/1', function () {
    return Inertia::render('Product');
});
Route::get('/product/2', function () {
    return Inertia::render('ProductPage');
});

require __DIR__ . '/auth.php';
