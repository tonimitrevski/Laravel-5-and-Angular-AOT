@extends('layouts.app')

@section('content')
    <reactive-form></reactive-form>
    <script src="{{ mix('/js/polyfill.js') }}"></script>
    <script src="{{ mix('/js/reactiveForm.js') }}"></script>
@endsection