/*
 * Text.js
 * Sprite representing an onscreen text.
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

extend(Text, Sprite);

function Text()
{
	this.text = ""; // string to print

	this.size = 12; // font size
	this.color = "red"; // font color
	this.align = "center"; // text align
	
	this.dead = 0;
	
	
	this.movements = [];
	this.movement = null;
}

Text.prototype.draw = function()
{
	ctx.font = "bold " + this.size + "px Bilbo Swash Caps";
	ctx.textAlign = this.align;
	ctx.fillStyle = this.color;
	ctx.fillText(this.text, this.movement.cx, this.movement.cy);
}
