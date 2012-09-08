/*
 * SpellCard.js
 * Represents an enemy 'spell card' as an array of bullets.
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

function SpellCard()
{
	this.ts = 100; // total motion frames
	this.cs = 0; // current motion frame
	
	this.bullets = []; // bullet array
}

SpellCard.prototype.addBullet = function(bul)
{
	this.bullets[this.bullets.length] = bul;
}
	
// returns an array of bullets that must be fired in the current frame.
SpellCard.prototype.fire = function()
{
	var fired = [];
	for (var i = 0; i < this.bullets.length; i++)
	{
		var b = this.bullets[i];
		
		// check if bullet must be fired in the current frame
		if (b.delay == this.cs)
		{
			var bc = new EnemyBullet(); // clone the bullet and return it
			bc.w = b.w;
			bc.h = b.h;
			bc.image = b.image;
			bc.homing = b.homing;
      
			var mc = new Movement(b.movement.speed, b.movement.sx, b.movement.sy, b.movement.ex, b.movement.ey);
			bc.addMovement(mc); 
      
			fired[fired.length] = bc;
		}
	}
	this.cs++;
  
	if (this.cs > this.ts)
		this.cs = 0;
  
	return fired;
}
