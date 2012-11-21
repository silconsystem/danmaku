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
	this.w = canv.width;
	this.h = canv.height;
	
	this.y = 0; 		// background scrolling position
	this.x = 0;		// background x position
	this.y2 = -600;		// 2nd image start
	this.fx_y = 0;		// fx layer
	this.fx_x = 0;		// fx layer x position
	this.fx_y2 = -550;	// 2nd image start
	
	this.padding = 10; 	// internal padding where player cannot step
}

Background.prototype.move = function()
{
	/*
	 * TODO create cameramovement
	 * the level counter variable can be used to  create an effect on the background images	
	 * var level = new Level();
	 *
	 * counter = level.cs;
	 */
}
	
Background.prototype.draw = function()
{        
	var img = new Image();
	var imgB = new Image();
	var fx_img = new Image();
        
	if (currentLevel == 1)
	{
		fx_img.src = "img/bg/st1_overlay00.png";
		img.src = "img/bg/st1_layer00.jpg";
	}
	else if (currentLevel == 2)
	{
		fx_img.src = "img/bg/st2_overlay00.png";
		img.src = "img/bg/st2_layer00.jpg";
	}
	else if (currentLevel == 3)
	{
		fx_img.src = "img/bg/st3_overlay00.png";
		img.src = "img/bg/st3_layer00.jpg";
	}
	else if (currentLevel == 4)
	{
		fx_img.src = "img/bg/st4_overlay00.png";
		img.src = "img/bg/st4_layer00.jpg";
	}

	// draw the overlay image
	if (this.fx_y > 550) {
		this.fx_y = -449;
	}
	else if (this.fx_y2 > 550) {
		this.fx_y2 = -449;
	}
	this.fx_y += 3;
	this.fx_y2 += 3;	

	// standard routine to draw the background
	if (this.y > 600) {
		this.y = -599;
	}
	else if (this.y2 > 600) {
		this.y2 = -599;
	}
	this.y += 1.5;
	this.y2 += 1.5;

	bg_ctx.drawImage(img, 0, this.y);
	fx1canv.drawImage(fx_img, this.x, this.fx_y);
	bg_ctx.drawImage(img, 0, this.y2);
	fx1canv.drawImage(fx_img, this.x, this.fx_y2);
}
	
Background.prototype.clear = function()
{
	// clear background
	ctx.clearRect(0, 0, this.w, this.h);
	fx1canv.clearRect(0, 0, this.w, this.h);
	bg_ctx.clearRect(0, 0, this.w, this.h);
}
	
Background.prototype.work = function()
{
	this.clear();
	this.move();
	this.draw();
}
