/*
 * Background.js
 * Represents the main playing canvas.
 * This class is not really a sprite so it doesn't extend it.
 * Lots of methods and properties are the same though
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

function Background()
{
	this.w = canv.width; // screen width
	this.h = canv.height; // screen height
	
	this.y = -2298; // background scrolling position
	
	this.padding = 10; // internal padding where player cannot step
}

Background.prototype.move = function()
{
	// scroll background
}
	
Background.prototype.draw = function()
{	
	// fill with color
	ctx.fillStyle = 'black';
}
	
Background.prototype.clear = function()
{
	// fill background
	ctx.fillRect(0, 0, this.w, this.h);
	
	var moveY = this.y += 0.2;
	
	if (this.y == 0)
	{
		moveY = 0;
	}
	
	var img = new Image();
	
	if (currentLevel == 1)
	{
		img.src = '/game/danmaku/img/bg/mysticbg5.png';		
	}
	else if (currentLevel == 2)
	{
		img.src = '/game/danmaku/img/bg/lotusland2.png';
	}	
	
	ctx.drawImage(img, 0, moveY);
}
	
Background.prototype.work = function()
{
	this.clear();
	this.move();
	this.draw();
}
