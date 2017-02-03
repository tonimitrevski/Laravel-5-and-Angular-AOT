<!DOCTYPE html>
<html>
<head>
    <base href='/'>
</head>
<body>
<component1></component1>
<component2></component2>
</body>
<script src="{{ asset('js/polyfill.js') }}"></script>
@if (App::environment('production'))
    <script src="{{ mix('js/home.js') }}"></script>
@else
    <script src="{{ asset('js/home.js') }}"></script>
@endif
</html>
