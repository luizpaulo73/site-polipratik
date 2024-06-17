window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.getElementById('content');

    setTimeout(function() {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 2500);
});