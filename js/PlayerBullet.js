/*
 * PlayerBullet.js
 * Sprite representing a bullet shot by the player. 
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

extend(PlayerBullet, Sprite);

function PlayerBullet()
{
	this.w = 4;
	this.h = 20;
	
	this.image = img_bp;
	this.color = 'rgba(0,0,0,255)';
	
	this.dead = 0;
	
	this.movements = [];
	this.movement = null;
	
	this.delay = 0; // bullet spawn delay
}

PlayerBullet.prototype.check = function()
{
	Sprite.prototype.check.call(this);
	
	// check if this bullet hit an enemy
	for (var i = 0; i < enemies.length; i++)
	{
		var e = enemies[i];
		if (area_overlap(this.area(), e.area()))
		{
			e.hit = 1;			
			this.dead = 1;
		}
	}
}

// overwritten, because a bullet must return a bigger active area,
// stretched from its position in the previous frame, to avoid 
// passing through enemies
PlayerBullet.prototype.area = function()
{
	return {x1: Math.min(this.movement.px,this.movement.cx), 
	        y1: Math.min(this.movement.py,this.movement.cy), 
	        x2: Math.max(this.movement.px,this.movement.cx), 
	        y2: Math.max(this.movement.py,this.movement.cy)};
}