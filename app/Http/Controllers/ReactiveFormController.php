<?php

namespace App\Http\Controllers;

class ReactiveFormController extends Controller
{
    public function index()
    {
        return view('reactiveForm', [
            'reactiveForm' => 'active'
        ]);
    }
}
