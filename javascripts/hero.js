var currentLang = 0;
/*
You are a ninja! Your sensei is training you to become the greatest ninja the world has ever seen.
With the powerful senses of a ninja and the shadows you must prove yourself worthy!
Desafie a si mesmo e seus reflexos ultrapassando os demais desafios desse intenso jogo.
*/
function mudaLingua(){
	if(currentLang == 0){
		document.getElementById('button_language').innerHTML = '<strong>Português</strong>';
		document.getElementById('button_contatos').innerHTML = '<strong>Contacts<strong>';
		document.getElementById('button_voltar').innerHTML = '<strong>Home Page<strong>';
		document.getElementById('button_github').innerHTML = '<strong>View on Github<strong>';
		
		document.getElementById('roda_contatos').innerHTML = '<strong>Contacts<strong>';
		document.getElementById('roda_voltar').innerHTML = '<strong>Home Page<strong>';
		document.getElementById('roda_github').innerHTML = '<strong>View on Github<strong>';

		document.getElementById('thanks').innerHTML = '<p>Thanks to <a href="http://opengameart.org/users/buch">Buch</a> for all the king and other characters sprites, itens sprites and all tile sprites.</p><p>Thanks to <a href="http://opengameart.org/users/ansimuz">Luiz Zuno</a> for all the background images.</p>';
		document.getElementById('stuff').innerHTML = "It's a world of heroes and monsters!\nIn beetween of all bravery and heroism we follow the adventures of a clumsy king that lost\nhimself in a forest.\nAs this game is still in production, the story is not defined yet.";
		document.getElementById('byme').innerHTML = 'By Paulo Gaspar Sena do Vale';
		currentLang = 1;
	}
	else{	
		document.getElementById('button_language').innerHTML = '<strong>English</strong>';
		document.getElementById('button_contatos').innerHTML = '<strong>Contatos<strong>';
		document.getElementById('button_voltar').innerHTML = '<strong> Voltar <strong>';
		document.getElementById('button_github').innerHTML = '<strong>Visitar no Github<strong>';

		document.getElementById('roda_contatos').innerHTML = '<strong>Contatos<strong>';
		document.getElementById('roda_voltar').innerHTML = '<strong> Voltar <strong>';
		document.getElementById('roda_github').innerHTML = '<strong>Visitar no Github<strong>';

		document.getElementById('thanks').innerHTML = '<p>Agradecimentos para <a href="http://opengameart.org/users/buch">Buch</a> pelas sprites do rei e dos outros personagens, sprites de itens e todas as sprites de tiles.</p><p>Agradecimentos para <a href="http://opengameart.org/users/ansimuz">Luiz Zuno</a> pelas imagens de fundo de todas as fases.</p>';
		document.getElementById('stuff').innerHTML = 'É um mundo de heróis e monstros!\nNo meio de todo esse mundo de heroismo e bravura vamos acompanhar a aventura de um rei\nque se perdeu em uma floresta.\nEste jogo ainda está em desenvolvimento e a história não foi definida.';
		document.getElementById('byme').innerHTML = 'Por Paulo Gaspar Sena do Vale';

		currentLang = 0;
	}
}
