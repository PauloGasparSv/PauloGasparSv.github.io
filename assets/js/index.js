const phrases = ['Sou fullstack developer', 'Desenvolvedor de jogos', 'Eu amo a Carol', 'Olá meu nome é Paulo'];
let current_phrase = 0;
let curren_step = false;
let current_char = phrases[phrases.length - 1].length;

window.onload = () => {
    function removePhrase(){
        current_char --;
        document.querySelector('#introduction .greetings').innerHTML = phrases[current_phrase].substring(0, current_char);
        if(current_char == 0){
            current_phrase ++;
            if(current_phrase > phrases.length - 1) current_phrase = 0;
            addPhrase();
            return;
        }
        setTimeout(() => removePhrase(), 30);
    }

    function addPhrase(){
        current_char ++;
        document.querySelector('#introduction .greetings').innerHTML = phrases[current_phrase].substring(0, current_char);
        if(current_char == phrases[current_phrase].length + 1){
            setTimeout(() => removePhrase(), 1000);
            return;
        }
        setTimeout(() => addPhrase(), 36);
    }

    setTimeout(() => removePhrase(), 1000);
}