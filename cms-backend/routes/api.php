<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SectionController;

Route::get('/sections/{key}', [SectionController::class, 'show']);
Route::post('/sections/{key}', [SectionController::class, 'update']); // ✅ For publish
