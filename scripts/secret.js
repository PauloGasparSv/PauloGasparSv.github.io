document.addEventListener("keydown",keyDownHandler,false);

var code='';
var pressTime = Date.now();

function keyDownHandler(e){

	if(Date.now() - pressTime > 500)
		code = '';

	pressTime = Date.now();

	if(e.keyCode == 38)
		code += 'u';
	else if(e.keyCode == 40)
		code += 'd';
	else if(e.keyCode == 37)
		code += 'l';
	else if(e.keyCode == 39)
		code += 'r';
	else if(e.keyCode == 66)
		code += 'b';
	else if(e.keyCode == 65)
		code += 'a';
	else if(e.keyCode == 32)
		alert('hello '+code);
	else 
		code = '';

	if(code == 'uuddlrlrba'){
	//	document.getElementById('finger').style.visibility = 'visible';
		document.getElementById('finger').style.display = 'block';
	}
}
