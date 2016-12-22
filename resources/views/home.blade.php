<!DOCTYPE html>
<html>
    <head>
        <base href='/'>
    </head>
    <body>
    <hello-world-app></hello-world-app>
    </body>
    <script src="{{ asset('js/polyfill.bundle.js') }}"></script>
    @if (App::environment('production'))
        <script src="{{ elixir('js/home.bundle.js') }}"></script>
    @else
        <script src="{{ asset('js/home.bundle.js') }}"></script>
    @endif
</html>
