/*
 * EnemyBullet.js
 * Sprite representing a bullet shot by an enemy. 
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

extend(EnemyBullet, Sprite);

function EnemyBullet()
{
	this.w = 8;
	this.h = 8;
	
	this.image = null;
	this.color = 'rgba(0,0,0,255)';
	
	this.dead = 0;
	
	this.movements = [];
	this.movement = null;
	
	this.delay = 0; // bullet spawn delay
	
	this.homing = 0; // if 1, this is a homing bullet
}

EnemyBullet.prototype.check = function()
{
	Sprite.prototype.check.call(this);

	// check if bullet is hitting the player	
	if (area_overlap(this.area(), pg.area()))
	{
		pg.health -= 1;
		this.dead = 1;
	}
	else if (area_overlap(this.graze_area(), pg.area()))
	{
		graze += 1;
		if (graze % 1000)
		{
			pg.graze += 1;
		}
	}
}

// overwritten, because a bullet must return a bigger active area,
// stretched from its position in the previous frame, to avoid 
// passing through the player
EnemyBullet.prototype.area = function()
{
	return {x1: Math.min(this.movement.px,this.movement.cx), 
	        y1: Math.min(this.movement.py,this.movement.cy), 
	        x2: Math.max(this.movement.px,this.movement.cx), 
	        y2: Math.max(this.movement.py,this.movement.cy)};
}
// graze area
EnemyBullet.prototype.graze_area = function()
{
	return {x1: (Math.min(this.movement.px,this.movement.cx) - 15), 
	        y1: (Math.min(this.movement.py,this.movement.cy) - 15), 
	        x2: (Math.max(this.movement.px,this.movement.cx) + 15), 
	        y2: (Math.max(this.movement.py,this.movement.cy) + 15)};
}
