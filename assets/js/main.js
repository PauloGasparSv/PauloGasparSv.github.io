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
});