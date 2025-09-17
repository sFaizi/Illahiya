<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TeacherDetailsController;

Route::apiResource('teacherDetails', TeacherDetailsController::class);