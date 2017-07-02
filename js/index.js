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
			alert('Segredo para brocs')
		}
	});
	
});