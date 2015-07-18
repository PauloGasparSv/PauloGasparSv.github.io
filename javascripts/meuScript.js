var currentLang = 0;

function mudaLingua(){
	if(currentLang == 0){
		document.getElementById('contributors').innerHTML = 'Contributors <a href="https://kauelopes.github.io" class="user-mention">@kauelopes</a> and <a href="https://github.com/ggomess" class="user-mention">@ggomess</a>';
		document.getElementById('button_language').innerHTML = '<strong>Português</strong>';
		document.getElementById('button_contatos').innerHTML = '<strong>Contacts<strong>';
		document.getElementById('button_projetos').innerHTML = '<strong>My projects<strong>';
		document.getElementById('button_github').innerHTML = '<strong>View on github<strong>';
		document.getElementById('welcome_text').innerHTML = '<strong>Welcome!<strong>';
		document.getElementById('description').innerHTML = "This is my personal web page, here you can find my curriculum and my projects! I'm a student of Information Systems at USP. I'm interested in software development, modern and acient old operational systems, image editting, animation, game development and a little bit of eletronics and web design. In my spare times i usually create games and code for desktop. Down here are my skills and experiences:";
		document.getElementById('stuff').innerHTML = "Programming Languages:\nJava\nPython\nJavaScript\nC/C++\nC#\n\nMost used libraries and frameworks:\nLwjgl\nLibgdx\nSlick\nPyGame\nAllegro\nXNA\n\nGraphics:\nPhotshop\nFireworks\nIllustrator\nFlash\nBlender\n\nOS:\nWindows\nLinux (Ubuntu)\n\nThe others:\nHTML\nCSS\nPacote Office (Microsoft Word, Microsot Excel, etc)\nGit\nAudacity\n\nExperiences:\n-Fluent english (CNA)\n-Web Design (Microcamp, 2004 - 2006, unfinished)\n-Certificate (Technical course) in Game Development (ETEC Guaracy Silveira, 2012 - 2013)\n-Bachelor in Information Systems (Sistemas de Informação) (USP, 2015-present)\n";
		document.getElementById('interesse').innerHTML = "If you're intersted in following my projects then go to <a href=\"https://github.com/PauloGasparSv\">https://github.com/PauloGasparSv</a>";
		currentLang = 1;
	}
	else{
		document.getElementById('contributors').innerHTML = 'Contribuidores<a href="https://kauelopes.github.io" class="user-mention">@kauelopes</a> e <a href="https://github.com/ggomess" class="user-mention">@ggomess</a>';
		document.getElementById('button_language').innerHTML = '<strong>English</strong>';
		document.getElementById('button_contatos').innerHTML = '<strong>Contatos<strong>';
		document.getElementById('button_projetos').innerHTML = '<strong>Meus projetos<strong>';
		document.getElementById('button_github').innerHTML = '<strong>Visitar no github<strong>';
		document.getElementById('welcome_text').innerHTML = '<strong>Bem vindo!<strong>';
		document.getElementById('description').innerHTML = 'Essa é a minha página pessoal, aqui você pode encontrar meu curriculum e meu portifólio! Sou um estudante de Sistemas de Informação da Universidade de São Paulo. Me interesso em desenvolvimento de software, sistemas operacionais, edição de imagens, animação, desenvolvimento de jogos e um pouco de eletrônica e web design. Costumo criar alguns jogos e outros tipos de programas para desktop em meu tempo livre. Aqui estão as minhas habilidades e experiências anteriores:';
		document.getElementById('stuff').innerHTML = "Linguagens de programação:\nJava\nPython\nJavaScript\nC/C++\nC#\n\nBibliotecas e frameworks mais usadas:\nLwjgl\nLibgdx\nSlick\nPyGame\nAllegro\nXNA\n\nGráficos:\nPhotshop\nFireworks\nIllustrator\nFlash\nBlender\n\nSistemas operacionais:\nWindows\nLinux (Ubuntu)\n\nOutros:\nHTML\nCSS\nPacote Office (Microsoft Word, Microsot Excel, etc)\nGit\nAudacity\n\nExperiência:\n-Inglês fluente (CNA)\n-Web Design (Microcamp, 2004 - 2006, não acabado)\n-Técnico em Programação de Jogos Digitais (ETEC Guaracy Silveira, 2012 - 2013)\n-Bacharelado em Sistemas de Informação (USP, 2015-cursando)\n";
		document.getElementById('interesse').innerHTML = 'Se estiver interessado em acompanhar mais projetos entre em <a href="https://github.com/PauloGasparSv">https://github.com/PauloGasparSv</a>';
		currentLang = 0;
	}
}