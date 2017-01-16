<!DOCTYPE html>
<html>
    <head>
        <base href='/'>
    </head>
    <body>
    <app></app>
    </body>
    <script src="{{ asset('js/polyfill.bundle.js') }}"></script>
    @if (App::environment('production'))
        <script src="{{ elixir('js/dynamic.bundle.js') }}"></script>
    @else
        <script src="{{ asset('js/dynamic.bundle.js') }}"></script>
    @endif
</html>
