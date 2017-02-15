setInterval(gameLoop,10);

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var canvas_w = canvas.width;
var canvas_h = canvas.height;

var player_x = canvas_w/2;
var player_y = canvas_h - 50;
var player_w = 100;
var player_h = 8;
var player_speed = 5;

var ball_x = 100;
var ball_y = 100;
var ball_r = 10;
var ball_hspeed = 1.6;
var ball_vspeed = 1.4;
var ball_right = false;
var ball_up = true;

var key_right = false;
var key_left = false;

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function update()
{
	//PLAYER MOVEMENT
	if(key_right)
	{
		if(player_x < canvas_w - player_w)
			player_x += player_speed;
	}
	if(key_left)
	{
		if(player_x > 0)
			player_x -= player_speed;
	}

	//BALL MOVEMENT
	ball_x += ball_hspeed * (ball_right ? 1 : -1);
	ball_y += ball_vspeed * (ball_up ? -1 : 1)

	if(ball_x > canvas_w - ball_r && ball_right)
	{
		ball_right = false;
		ball_hspeed += 0.1;
	}
	else if(ball_x < ball_r  && !ball_right)
	{
		ball_right = true;
		ball_hspeed += 0.1;
	}
	if(ball_y > canvas_h - ball_r && !ball_up)
	{
		//END
		ball_y = 100;
		ball_x = 100;
		ball_up = true;
		ball_right = true;
	}
	else if(ball_y < ball_r  && ball_up)
	{
		ball_up = false;
		ball_vspeed += 0;
	}	

	if(ball_vspeed > 20)ball_vspeed = 60;
	if(ball_hspeed > 20)ball_hspeed = 60;

	if(ball_y + ball_r/2 > player_y  ){
		if(ball_x - ball_r > player_x && ball_x + ball_r < player_x + player_w)
			ball_up = true;
	}

}

function draw()
{
	context.clearRect(0,0,canvas_w,canvas_h);
	drawRect(player_x,player_y,player_w,player_h,'#FF0000');
	drawCircle(ball_x,ball_y,ball_r,'blue');	
}

function keyDownHandler(e)
{
	if(e.keyCode == 39)
	{
		key_right = true;
	}
	else if(e.keyCode == 37)
	{
		key_left = true;
	}
}

function keyUpHandler(e)
{
	if(e.keyCode == 39)
	{
		key_right = false;
	}
	else if(e.keyCode == 37)
	{
		key_left = false;
	}	
}

function gameLoop()
{
	update();
	draw();
}

function drawRect(x,y,w,h,color)
{
	context.beginPath();
	
	context.rect(x,y,w,h);
	context.fillStyle = color;
	context.fill();
	
	context.closePath();
}	

function drawCircle(x,y,radius,color)
{
	context.beginPath();

	context.arc(x,y,radius,0,Math.PI * 2,false);
	context.fillStyle = color;
	context.fill();

	context.closePath();
}

