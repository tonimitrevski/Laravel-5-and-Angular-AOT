@extends('layouts.app')

@section('content')
    <renderer2></renderer2>
    <script src="{{ mix('/js/polyfill.js') }}"></script>
    <script src="{{ mix('/js/renderer2.js') }}"></script>
@endsection