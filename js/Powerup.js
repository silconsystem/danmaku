/*
 * Powerup.js
 * Sprite representing a collectable powerup. 
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

extend(Powerup, Sprite);

function Powerup(type)
{	
	this.w = 10;
	this.h = 10;
	
	this.image = null;
	this.color = 'rgba(0,0,0,255)';
	
	this.dead = 0;
	
	this.movements = [];
	this.movement = null;
	
	this.type = type; // type, p: power, s: score
	
	if (this.type == 'p')
		this.image = img_p;
	else if (this.type == 's')
		this.image = img_s;
}
	
Powerup.prototype.check = function()
{
	Sprite.prototype.check.call(this);
	
	// check if powerup has been collected
	if (area_overlap(this.area(), pg.area()))
	{
		if (this.type == 'p')
		{
			pg.power++;
			playSfx("powerup", 1);
		}
		else if (this.type == 's')
		{
			score += 1200;
			playSfx("powerup", 2);
		}
		
		this.dead = 1;
	}
}
