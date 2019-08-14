document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        startEvent: 'load'
    });
    document.querySelector('.down').addEventListener('click', () => {
        window.scrollTo({
            left: 0,
            top: window.innerHeight + 8,
            behavior: 'smooth'
        });
    })
    document.querySelector('.easter-egg').addEventListener('click', () => {
        document.querySelector('#meicon').classList.add('active');
        document.querySelector('#ellan').classList.add('active');
        document.querySelector('#pinduca').classList.add('active');
        document.querySelector('#mok').classList.add('active');
    });
});