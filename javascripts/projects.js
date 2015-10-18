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
		document.getElementById('button_github').innerHTML = '<strong>View on github<strong>';
		document.getElementById('thanks').innerHTML = '<p>Huge thanks for <a href="http://www.kenney.nl/">Kenney</a> for the ninja sprites and for <a href="http://opengameart.org/users/littlesadnerd">David</a> for all the other sprites used in the game.</p><p>The incredible Dire Times main theme comes from <a href="http://opengameart.org/users/deadearth">Eric-Christian Alexander (deadEarth)</a>, you can find him at his <a href="https://www.facebook.com/ericchristian.alexander">facebook page</a> and support him on <a href="http://www.patreon.com/deadearth">patreon</a>.</p><p>The cannon ball explosion sound effect came from <a href="http://opengameart.org/users/lukerustltd">Luke</a> <a href="http://rustltd.com/">(Rust Ltd)</a>.</p><p>The jumping sound effect came from <a href="http://opengameart.org/users/dklon">Devin Watson (dklon)</a>.</p><p>The clock ticking sound effect came from <a href="http://opengameart.org/users/antumdeluge">Jordan (AntumDeluge)</a>. Check his own <a href="http://sourceforge.net/projects/aolis/">project</a>.</p><p>The wall sliding sound effect came from <a href="http://opengameart.org/users/bart">Bart Kelsey</a>. Support him on <a href="http://www.patreon.com/opengameart">patreon</a>.</p>';
		document.getElementById('stuff').innerHTML = 'Um jogo desafiador e divertido!\n\nVocê é um ninja! Seu treino é pesado para que você alcance seu mestre.\nUse as sombras e seus instintos de ninja para ultrapassar os desafios e provar seu valor!\n\nControles\nW					<------------------------------------>	PULAR E PULO DUPLO\nA					<------------------------------------>	CORRER PARA ESQUERDA\nS					<------------------------------------>	IMPLEMENTAR\nD					<------------------------------------>	CORRER PARA DIREITA\nESPAÇO				<------------------------------------>	INTERAGIR/FALAR\nSHIFT ESQUERDO		<------------------------------------>	DIMINUIR TEMPO\nMOUSE				<------------------------------------>	TELETRANSPORTAR\n\nSobre o projeto\n\n\n\n';

		currentLang = 1;
	}
	else{
		document.getElementById('button_language').innerHTML = '<strong>English</strong>';
		document.getElementById('button_contatos').innerHTML = '<strong>Contatos<strong>';
		document.getElementById('button_voltar').innerHTML = '<strong> Voltar <strong>';
		document.getElementById('button_github').innerHTML = '<strong>Visitar no github<strong>';
		document.getElementById('thanks').innerHTML = '<p>Agradecimentos para <a href="http://www.kenney.nl/">Kenney</a> pelas sprites do ninja e para <a href="http://opengameart.org/users/littlesadnerd">David</a> por todas as outras sprites usadas no jogo.</p><p>Agradecimentos pelo tema principal (Dire Times) para <a href="http://opengameart.org/users/deadearth">Eric-Christian Alexander (deadEarth)</a>, você pode encontrar mais sobre ele na <a href="https://www.facebook.com/ericchristian.alexander">página do facebook</a> dele e apoiar ele por <a href="http://www.patreon.com/deadearth">patreon</a>.</p><p>Agradecimentos pelo efeito sonoro da bola de canhão para <a href="http://opengameart.org/users/lukerustltd">Luke</a> <a href="http://rustltd.com/">(Rust Ltd)</a>.</p><p>Agradecimentos pelo efeito sonoro do pulo para <a href="http://opengameart.org/users/dklon">Devin Watson (dklon)</a>.</p><p>Agradecimentos pelo som do relógio para <a href="http://opengameart.org/users/antumdeluge">Jordan (AntumDeluge)</a>. Veja o <a href="http://sourceforge.net/projects/aolis/">projeto</a> dele.</p><p>Agradecimentos pelo efeito sonoro de atrito nas paredes para <a href="http://opengameart.org/users/bart">Bart Kelsey</a>. Apoie ele por <a href="http://www.patreon.com/opengameart">patreon</a>.</p>';
		document.getElementById('stuff').innerHTML = 'Um jogo desafiador e divertido!\n\nVocê é um ninja! Seu treino é pesado para que você alcance seu mestre.\nUse as sombras e seus instintos de ninja para ultrapassar os desafios e provar seu valor!\n\nControles\nW					<------------------------------------>	PULAR E PULO DUPLO\nA					<------------------------------------>	CORRER PARA ESQUERDA\nS					<------------------------------------>	IMPLEMENTAR\nD					<------------------------------------>	CORRER PARA DIREITA\nESPAÇO				<------------------------------------>	INTERAGIR/FALAR\nSHIFT ESQUERDO		<------------------------------------>	DIMINUIR TEMPO\nMOUSE				<------------------------------------>	TELETRANSPORTAR\n\nSobre o projeto\n\n\n\n';


		currentLang = 0;
	}
}
