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
	
	this.y = 0; // background scrolling position
	
	this.padding = 10; // internal padding where player cannot step
}

Background.prototype.move = function()
{
	// scroll lines to the bottom a bit
}
	
Background.prototype.draw = function()
{	
	//
}
	
Background.prototype.clear = function()
{
	// fill background
	ctx.fillRect(0, 0, this.w, this.h);
	var img = new Image();
	
	if (currentLevel == 1)
	{
	        img.src = '/game/danmaku/img/bg/fog.jpg';
	}
	else if (currentLevel == 2)
	{
	        img.src = '/game/danmaku/img/bg/garden.jpg';
	}
	ctx.drawImage(img, 0, 0);
}
	
Background.prototype.work = function()
{
	this.clear();
	this.move();
	this.draw();
}
