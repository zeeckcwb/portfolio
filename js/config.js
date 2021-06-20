(function () {
    var menu = document.getElementById('header-container'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('menu-background'); // > 0 ou outro valor desejado
        else menu.classList.remove('menu-background');
    });
})();