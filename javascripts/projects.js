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

		document.getElementById('thanks').innerHTML = '<p>Huge thanks for <a href="http://www.kenney.nl/">Kenney</a> for the ninja sprites and for <a href="http://opengameart.org/users/littlesadnerd">David</a> for all the other sprites used in the game.</p><p>The incredible main theme (Dire Times) and the boss theme (A Fight) came from <a href="http://opengameart.org/users/deadearth">Eric-Christian Alexander (deadEarth)</a>, you can find him at his <a href="https://www.facebook.com/ericchristian.alexander">facebook page</a> and support him on <a href="http://www.patreon.com/deadearth">patreon</a>.</p><p>The cannon ball explosion sound effect came from <a href="http://opengameart.org/users/lukerustltd">Luke</a> <a href="http://rustltd.com/">(Rust Ltd)</a>.</p><p>The jumping sound effect came from <a href="http://opengameart.org/users/dklon">Devin Watson (dklon)</a>.</p><p>The clock ticking sound effect came from <a href="http://opengameart.org/users/antumdeluge">Jordan (AntumDeluge)</a>. Check his own <a href="http://sourceforge.net/projects/aolis/">project</a>.</p><p>The wall sliding sound effect came from <a href="http://opengameart.org/users/bart">Bart Kelsey</a>. Support him on <a href="http://www.patreon.com/opengameart">patreon</a>.</p><p>The item sound effect and the score jingle came from <a href="http://www.littlerobotsoundfactory.com/">Little Robot Sound Factory</a>.</p>';
		document.getElementById('stuff').innerHTML = 'A hard and fun game!\n\nYou are a ninja! Your sensei is training you to become the greatest ninja the world has ever seen.\nWith the powerful senses of a ninja and the shadows you must prove yourself worthy of the \nmaster title!\n\nPlay it with keyboard or gamepad(Xbox 360,ps3, usb controller and others)!\nAbout the project\n\nDeveloped using public domain and creative common images and sounds avaiable on the net.\nThe main goal was to build a good game with my programming skills for the portifolio showcase.\nMade with the java programming language and Libgdx for desktop computers.\nThe challenge of making this game was building my ideas around the game assets.\nThe goal of making this game is to aprimorate my skills and have a finished project to show at\njob interviews.\n';
		document.getElementById('download').innerHTML = 'CLICK HERE TO DOWNLOAD THE GAME';
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

		document.getElementById('thanks').innerHTML = '<p>Agradecimentos para <a href="http://www.kenney.nl/">Kenney</a> pelas sprites do ninja e para <a href="http://opengameart.org/users/littlesadnerd">David</a> por todas as outras sprites usadas no jogo.</p><p>Agradecimentos pelo tema principal (Dire Times) e pelo tema de chefe (A Fight) para <a href="http://opengameart.org/users/deadearth">Eric-Christian Alexander (deadEarth)</a>, você pode encontrar mais sobre ele na <a href="https://www.facebook.com/ericchristian.alexander">página do facebook</a> dele e apoiar ele por <a href="http://www.patreon.com/deadearth">patreon</a>.</p><p>Agradecimentos pelo efeito sonoro da bola de canhão para <a href="http://opengameart.org/users/lukerustltd">Luke</a> <a href="http://rustltd.com/">(Rust Ltd)</a>.</p><p>Agradecimentos pelo efeito sonoro do pulo para <a href="http://opengameart.org/users/dklon">Devin Watson (dklon)</a>.</p><p>Agradecimentos pelo som do relógio para <a href="http://opengameart.org/users/antumdeluge">Jordan (AntumDeluge)</a>. Veja o <a href="http://sourceforge.net/projects/aolis/">projeto</a> dele.</p><p>Agradecimentos pelo efeito sonoro de atrito nas paredes para <a href="http://opengameart.org/users/bart">Bart Kelsey</a>. Apoie ele por <a href="http://www.patreon.com/opengameart">patreon</a>.</p><p>Agradecimentos pelos efeitos sonoros dos itens e pelo jingle da nota para <a href="http://www.littlerobotsoundfactory.com/">Little Robot Sound Factory</a>.</p>';
		document.getElementById('stuff').innerHTML = 'Um jogo desafiador e divertido!\n\nVocê é um ninja! Seu treino é pesado para que você alcance seu mestre.\nUse as sombras e seus instintos de ninja para ultrapassar os desafios e provar seu valor!\n\nJogue com teclado ou gamepad(controle usb, de xbox 360, de ps3 e outros)!\n\nSobre o projeto\n\nDesenvolvido utilizando imagens e sons de domínio público e creative commons. A ideia principal\né construir um jogo utilizando minhas habilidades de programação para poder usar de vitrine no\nportifólio.\nFeito na linguagem java e usando a biblioteca/framework Libgdx e desenvolvido para desktop, o\ndesafio de criar esse jogo foi o de moldar minhas ideias ao redor da arte que eu encontrei.\nO objetivo do jogo é aprimorar minhas habilidades e mostrar que consigo finalizar um projeto.\n';
		document.getElementById('download').innerHTML = 'BAIXAR O JOGO';
				document.getElementById('byme').innerHTML = 'Por Paulo Gaspar Sena do Vale';

		currentLang = 0;
	}
}
