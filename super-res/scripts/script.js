window.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('nav > ul');
    const invisilayer = document.querySelector('.invisilayer');
    function handleMenu() {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            menu.classList.remove('active');
            invisilayer.classList.remove('active');
        } else {
            burger.classList.add('active');
            menu.classList.add('active');
            invisilayer.classList.add('active');
        }
    }
    if (burger && menu && invisilayer) {
        burger.addEventListener('click', function() {
            handleMenu();
        });
        invisilayer.addEventListener('click', function() {
            handleMenu();
        });
    }
});