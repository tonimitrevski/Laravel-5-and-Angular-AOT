<?php

namespace App\Http\Controllers;

class Renderer2Controller extends Controller
{
    public function index()
    {
        return view('renderer2', [
            'renderer2' => 'active'
        ]);
    }
}
