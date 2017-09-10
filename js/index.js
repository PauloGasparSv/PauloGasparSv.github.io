var clicks = 0;

$(document).ready(function(){

	$("#name").click(function(){
		if(clicks < 3)
		{
			clicks++;
			alert(3 - clicks+" clicks left");
		}
		if(clicks == 3)
		{
			clicks++;
			$("#profile-pic").attr("src","./img/goat-profile.jpg");
			alert('Segredo para brocs');
			changeBackground();
		}
	});
	
});

'use strict';

function getNewColor()
{
    return 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) +',' + Math.trunc(Math.random() * 255) + ')';
}

function changeBackground()
{
	try{
		let z = document.querySelectorAll('*');
		for(let i = 0; i < z.length; i ++)
			z[i].style.color = getNewColor();
	}catch(e){
		console.log('fuck');
	}
	
    setTimeout(changeBackground,300);
}

