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
		document.getElementById('titulo').innerHTML = '<h1 style = "margin-left:22%">Temporary Project Showcase</h1>';
	
		currentLang = 1;
	}
	else{	
		document.getElementById('button_language').innerHTML = '<strong>English</strong>';
		document.getElementById('button_contatos').innerHTML = '<strong>Contatos<strong>';
		document.getElementById('button_voltar').innerHTML = '<strong> Voltar <strong>';
		document.getElementById('button_github').innerHTML = '<strong>Visitar no Github<strong>';
		document.getElementById('titulo').innerHTML = '<h1 style = "margin-left:19%">Amostra de Projetos temporária</h1>';
		
		currentLang = 0;
	}
}
