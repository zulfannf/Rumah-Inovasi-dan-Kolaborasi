<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('Home');
});

Route::get('/kidsprogramming', function () {
    return view('kidsProgramming');
});

Route::get('/gamedev', function () {
    return view('gameDev');
});

Route::get('/iotdev', function () {
    return view('iotDev');
});
