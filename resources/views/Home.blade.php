<!DOCTYPE html>
<html>
<head>
    @vite(['resources/css/app.css','resources/js/app.js', 'resources/js/nav.js'])
    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
</head>
<body>
    <x-navbar></x-navbar>
    <x-bodyHome></x-bodyHome>
    <x-footer></x-footer>
</body>
{{-- <script src="resources/js/nav.js"></script> --}}
</html>
