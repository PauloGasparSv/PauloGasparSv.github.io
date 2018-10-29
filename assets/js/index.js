const phrases = ['Sou fullstack', 'Desenvolvo jogos', 'Trabalho com...', 'NodeJs,...', 'PHP,...', 'C# ...', 'e Front', 'Desenvolvo projetos pessoais', 'Oi, meu nome é Paulo'];
let current_phrase = phrases.length - 1;
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
        setTimeout(() => removePhrase(), 40);
    }
    function addPhrase(){
        current_char ++;
        document.querySelector('#introduction .greetings').innerHTML = phrases[current_phrase].substring(0, current_char);
        if(current_char == phrases[current_phrase].length + 1){
            setTimeout(() => removePhrase(), 2500);
            return;
        }
        setTimeout(() => addPhrase(), 40);
    }
    setTimeout(() => removePhrase(), 2500);
}