<html>
<head>
<title>Seotechman.com | PWA </title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
html,body{padding:0;margin:0;background:#fff}
h1,h2,h2{font-size:24px;color:#000;text-align:center}
.container{display:flex;justify-content:center;align-items:center;position:relative;margin:auto}
</style>
</head>
<body>
<div class="container">
<h1>Welcome To My PWA Page</h1>
</div>
<script>
window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        // register service worker
        navigator.serviceWorker.register('/sw.js').then(
            () => {
                console.log('SW registration successful 😍');
            },
            err => {
                console.error('SW registration failed 😠', err)
            });
    } else {
        // Not supported 😥
    }
});
</script>
</body>
</html>
