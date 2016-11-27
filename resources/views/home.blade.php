<!DOCTYPE html>
<html>
    <head>
        <base href='/'>
    </head>
    <body>
    <hello-world-app></hello-world-app>
    <component2></component2>
    </body>
    <script src="{{ asset('polyfill.bundle.js') }}"></script>
    @if (App::environment('production'))
        <script src="{{ elixir('home.aot.bundle.js') }}"></script>
    @else
        <script src="{{ asset('home.bundle.js') }}"></script>
    @endif
</html>
