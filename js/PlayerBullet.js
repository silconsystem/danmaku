/*
 * PlayerBullet.js
 * Sprite representing a bullet shot by the player. 
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/
// Player Shot
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

// Dark Starlight Bomb Spell
extend(PlayerBomb, Sprite);

function PlayerBomb()
{
	this.w = 16;
	this.h = 16;
	
	this.image = img_bb2;
	
	this.dead = 0;
	
	this.movements = [];
	this.movement = null;
	
	this.delay = 0;
}

PlayerBomb.prototype.check = function()
{
        
	Sprite.prototype.check.call(this);
	
	// check for enemy collision
	for (var i = 0; i < enemies.length; i++)
	{	        
		var e = enemies[i];
	        
		if (area_overlap(this.area(), e.area()))
		{
			e.life -= 100;
		}
	}
	
	// check for bullet collision
	for (var i = 0; i < bullets.length; i++)
	{
	        var b = bullets[i];
	        if (b instanceof EnemyBullet)
	        {
		if (area_overlap(this.area(), b.area()))
		{
			b.dead = 1;
			var p = new Powerup('s');
			p.addMovement(new Movement(12, b.movement.cx, b.movement.cy, pg.movement.cx, pg.movement.cy));
			powerups[powerups.length] = p;
			bullets.splice(i,1);
		}
	        }
	}
}

PlayerBullet.prototype.area = function()
{
        return {x1: Math.min(this.movement.px,this.movement.cx), 
	y1: Math.min(this.movement.py,this.movement.cy), 
	x2: Math.max(this.movement.px,this.movement.cx), 
	y2: Math.max(this.movement.py,this.movement.cy)};
}

// Dark Magus Spell (spiralling pattern)
extend(PlayerSpell, Sprite);

function PlayerSpell()
{
	this.w = 20;
	this.h = 20;

	this.image = img_bb1;

	this.dead = 0;

	this.movements = [];
	this.movement = null;

	this.delay = 0;
}

PlayerSpell.prototype.check = function()
{

	Sprite.prototype.check.call(this);

	// check for enemy collision
	for (var i = 0; i < enemies.length; i++)
	{
		var e = enemies[i];

		if (area_overlap(this.area(), e.area()))
		{
			if (e.level == 1)
			{
			        e.hit = 1;
			        e.life -= 5;
			}
			else if (e.level == 2)
			{
			        e.hit = 1;
			        e.life -= 10;
			}
			else if (e.level == 3)
			{
			        e.hit = 1;
			        e.life -= 20;
			}
			else if (e.level == 4)
			{
			        e.hit = 1;
			        e.life -= 30;
			}
			else if (e.level == 5)
			{
			        e.hit = 1;
			        e.life -= 50;
			}
		}
	}

	// check for bullet collision
	for (var i = 0; i < bullets.length; i++)
	{
	        var b = bullets[i];
	        if (b instanceof EnemyBullet)
	        {
		if (area_overlap(this.area(), b.area()))
		{
			b.dead = 1;
			var p = new Powerup('s');
			p.addMovement(new Movement(12, b.movement.cx, b.movement.cy, pg.movement.cx, pg.movement.cy));
			powerups[powerups.length] = p;
			bullets.splice(i,1);
		}
	        }
	}
}

PlayerSpell.prototype.area = function()
{
        return {x1: Math.min(this.movement.px,this.movement.cx),
	y1: Math.min(this.movement.py,this.movement.cy),
	x2: Math.max(this.movement.px,this.movement.cx),
	y2: Math.max(this.movement.py,this.movement.cy)};
}