const phrases = [
	'Sou fullstack',
	'Desenvolvo jogos',
	'Odeio null pointer',
	'Trabalho com Node',
	'...e Php, C# e Front',
	'Amo programar',
	'Salvo Gatinhos de árvores',
	'Faço vários projetos',
	'Não sou designer ;-;',
	'Bebo café demais',
	'Oi, meu nome é Paulo'
];

let currentPhrase = phrases.length - 1;
let currentChar = phrases[currentPhrase].length;

window.onload = () => {
	
	function removePhrase() {
		currentChar -= 1;
		document.querySelector('#introduction .greetings').innerHTML = phrases[currentPhrase].substring(0, currentChar);
		if (currentChar === 0) {
			currentPhrase += 1;
			if (currentPhrase > phrases.length - 1) {
				currentPhrase = 0;
			}
			return addPhrase();
		}
		setTimeout(() => removePhrase(), 40);
	}

	function addPhrase() {
		currentChar++;
		document.querySelector('#introduction .greetings').innerHTML = phrases[currentPhrase].substring(0, currentChar);
		if (currentChar === phrases[currentPhrase].length + 1) {
			return setTimeout(() => removePhrase(), 2500);
		}
		setTimeout(() => addPhrase(), 40);
	}

	setTimeout(() => removePhrase(), 2500);
};
