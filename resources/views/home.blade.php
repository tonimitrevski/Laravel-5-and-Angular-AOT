<!DOCTYPE html>
<html>
    <head>
        <base href='/'>
    </head>
    <body>
    <component1></component1>
    <component2></component2>
    </body>
    <script src="{{ asset('js/polyfill.bundle.js') }}"></script>
    @if (App::environment('production'))
        <script src="{{ elixir('js/home.bundle.js') }}"></script>
    @else
        <script src="{{ asset('js/home.bundle.js') }}"></script>
    @endif
</html>
