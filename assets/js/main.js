window.addEventListener('DOMContentLoaded', () => {
    function greet (text, state) {
        if(state > 9) {
            return;
        }
        let word = '';
        let time = 40;
        switch (state) {
            case 1: word = 'I am a FullStack dev'; break;
            case 3: word = 'I also make games'; break;
            case 5: word = 'Take a look at my skills'; break;
            case 7: word = 'I know Ionic now'; break;
            case 9: word = 'I am studying flutter'; break;
            default : word = null;
        }
        
        if(!word) {
            text.innerText = text.innerText.substr(0, text.innerText.length - 1);
            if(text.innerText.length === 0) {
                state ++;
            }
        } else {
            const pos =  text.innerText.length + 1;
            text.innerText = word.substr(0, word.charAt(pos - 1) === ' ' ? pos + 1 : pos);
            if(text.innerText.length === word.length) {
                state ++;
                time = 4000;
            }
        }
        setTimeout(() => greet(text, state), time);
    }

    const loader = document.querySelector("#loader");
    const interval = setInterval(() => { 
        if(loader.style.display === 'none') {
            clearInterval(interval);
            const text = document.querySelector('#greetings');
            setTimeout(() => greet(text, 0), 4200);
        }
    }, 500)
});

window.addEventListener('scroll', () => {
    if(window.scrollY > document.querySelector('#introduction').offsetHeight / 2) {
        document.querySelector('#timeline > div').classList.add('active');
    }
})