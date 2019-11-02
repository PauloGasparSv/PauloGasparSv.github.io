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
    document.querySelector('.avatar img').addEventListener('click', function() {
        let index = parseInt(this.getAttribute('data-index'));
        if (index < 9) {
            index ++;
        }
        this.setAttribute('data-index', index);
        this.setAttribute('src', `public/images/profiles/${index}.jpeg`);
    });
});