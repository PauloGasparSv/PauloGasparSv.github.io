var currentLang = 0;
/*
You are a ninja! Your sensei is training you to become the greatest ninja the world has ever seen.
With the powerful senses of a ninja and the shadows you must prove yourself worthy!
Desafie a si mesmo e seus reflexos ultrapassando os demais desafios desse intenso jogo.
*/
function mudaLingua(){
	if(currentLang == 0){
		document.getElementById('button_language').innerHTML = '<strong>Português</strong>';
		document.getElementById('button_voltar').innerHTML = '<strong>Home Page<strong>';
		document.getElementById('button_projetos').innerHTML = '<strong>Projects<strong>';
		document.getElementById('button_github').innerHTML = '<strong>View on github<strong>';

		document.getElementById('roda_voltar').innerHTML = '<strong>Home Page<strong>';
		document.getElementById('roda_projetos').innerHTML = '<strong>Projects<strong>';
		document.getElementById('roda_github').innerHTML = '<strong>View on github<strong>';

		document.getElementById('contacts').innerHTML = '<b>Contacts</b>';
		document.getElementById('nome').innerHTML = 'Name:';
		document.getElementById('mensagem').innerHTML = 'Message:';
		document.getElementById('b1').value = 'Submit';
		document.getElementById('b2').value = 'Clear';

		currentLang = 1;
	}
	else{	
		document.getElementById('button_language').innerHTML = '<strong>English</strong>';
		document.getElementById('button_voltar').innerHTML = '<strong>Voltar<strong>';
		document.getElementById('button_projetos').innerHTML = '<strong>Projetos<strong>';
		document.getElementById('button_github').innerHTML = '<strong>Visitar no github<strong>';
	
		document.getElementById('roda_voltar').innerHTML = '<strong>Voltar<strong>';
		document.getElementById('roda_projetos').innerHTML = '<strong>Projetos<strong>';
		document.getElementById('roda_github').innerHTML = '<strong>Visitar no github<strong>';
	
		document.getElementById('contacts').innerHTML = '<b>Contatos</b>';
		document.getElementById('nome').innerHTML = 'Nome:';
		document.getElementById('mensagem').innerHTML = 'Mensagem:';
		document.getElementById('b1').value = 'Enviar';
		document.getElementById('b2').value = 'Limpar';
		currentLang = 0;
	}
}
