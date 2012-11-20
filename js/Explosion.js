/*
 * Explosion.js
 * Sprite representing an explosion. (ie. when an enemy dies)
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

extend(Explosion, Sprite);

function Explosion()
{
	this.w = 16;
	this.h = 16;
	
	this.image = img_ex;
	
	this.dead = 0;
	
	this.movements = [];
	this.movement = null;
	
	playSfx("explosion", null);
}
