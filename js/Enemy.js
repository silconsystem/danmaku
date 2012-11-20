/*
 * Enemy.js
 * Sprite representing an emeny. 
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

extend(Enemy, Sprite);

function Enemy()
{
	this.w = 24;
	this.h = 24;
	
	this.image = null;
	this.color = 'rgba(0,128,0,255)';
	
	this.dead = 0;
	
	this.movements = [];
	this.movement = null;
  
	this.hit = 0; 		// indicates if the enemy has been hit this frame
	this.life = 10;		// life points
	this.level = 1; 	// enemy level (1 to 5) to calculate drops and score.
	
	this.spellcard = null;	// shooting pattern
	
	this.delay = 0;		// spawn delay
}

Enemy.prototype.check = function()
{
        Sprite.prototype.check.call(this);
	
        // enemy has been hit
        if (this.hit == 1)
        {
	this.hit = 0;
	this.life -= 1;
        }
	
	// enemy has been shot to death
	if (this.life <= 0)
	{
	        score += (this.level*this.level*10);
	        this.dead = 1;
	        this.drop();
		
	        for (var i = 0; i <= this.level; i++)
	        {
		var e = new Explosion();
		var m = new Movement(0, this.movement.cx+rand(-8,8), this.movement.cy+rand(-8,8), 0, 0);
		m.tl = 25;
		e.addMovement(m);
		others[others.length] = e;
	        }
	}
    
        // enemy is colliding with the player
        if (area_overlap(this.area(), pg.area()))
        {
	pg.health -= 1;
        }
}

// fire bullets
Enemy.prototype.shoot = function()
{
	if (this.dead == 0)
	{
		// get array of bullets that must be fired in the current frame
		var fired = this.spellcard.fire();
		
		for (var i = 0; i < fired.length; i++)
		{
			var b = fired[i];
		    
			if (b.homing == 1)
			{
				// homing bullet, recalculate direction
				var xspan = pg.movement.cx-this.movement.cx;
				var yspan = pg.movement.cy-this.movement.cy;
				var newxspan, newyspan;
				
				if (xspan < yspan)
				{
					newxspan = xspan*bg.h/yspan;
					newyspan = bg.h;
				}
				else
				{
					newxspan = bg.w;
					newyspan = yspan*bg.w/xspan;
				}
				
				if (xspan < 0 && yspan < 0)
				{
					newxspan = -newxspan;
					newyspan = -newyspan;
				}
				
				var m = new Movement(b.movement.speed, this.movement.cx+b.movement.sx,
					     this.movement.cy+b.movement.sy,
					     this.movement.cx+b.movement.ex+newxspan,
					     this.movement.cy+b.movement.ey+newyspan);
				b.movement = m;
				
				playSfx("homingenemyshot", this.level);
			}
			else
			{
				// not homing, enemy position might have changed, so refresh bullet movement adding enemy coords
				var m = new Movement(b.movement.speed,
					     this.movement.cx+b.movement.sx,
					     this.movement.cy+b.movement.sy,
					     this.movement.cx+b.movement.ex,
					     this.movement.cy+b.movement.ey);
			
				b.movement = m;

				playSfx("enemyshot", this.level);
				
			}
		// return bullets    
		bullets[bullets.length] = b;
		}
	}
}
  
// drop powerups
Enemy.prototype.drop = function()
{
	if (this.level == 1) // small fairy
	{
			if (rand(1,10)>3)
			{
				var p = new Powerup('s');
				var rx = rand(-20, 20); var ry = rand(-20, 20);
				p.addMovement(new Movement(1.5, this.movement.cx+rx, this.movement.cy+ry, this.movement.cx+rx, bg.h));
				powerups[powerups.length] = p;
			}
			if (rand(1,10)>5)
			{
				var p = new Powerup('p');
				var rx = rand(-20, 20); var ry = rand(-20, 20);
				p.addMovement(new Movement(1.5, this.movement.cx+rx, this.movement.cy+ry, this.movement.cx+rx, bg.h));
				powerups[powerups.length] = p;
			}
	}
	else if (this.level == 2) // big fairy 
	{
		for (var i = 0; i < 3; i++)
		{
			if (rand(1,10)>2)
			{
				var p = new Powerup('s');
				var rx = rand(-20, 20); var ry = rand(-20, 20);
				p.addMovement(new Movement(1.5, this.movement.cx+rx, this.movement.cy+ry, this.movement.cx+rx, bg.h));
				powerups[powerups.length] = p;
			}
			if (rand(1,10)>4)
			{
				var p = new Powerup('p');
				var rx = rand(-20, 20); var ry = rand(-20, 20);
				p.addMovement(new Movement(1.5, this.movement.cx+rx, this.movement.cy+ry, this.movement.cx+rx, bg.h));
				powerups[powerups.length] = p;
			}
		}
	}
	else if (this.level == 3) // butterflies in MoF 
	{
		for (var i = 0; i < 6; i++)
		{
			if (rand(1,10)>5)
			{
				var p = new Powerup('s');
				var rx = rand(-20, 20); var ry = rand(-20, 20);
				p.addMovement(new Movement(1.5, this.movement.cx+rx, this.movement.cy+ry, this.movement.cx+rx, bg.h));
				powerups[powerups.length] = p;
			}
			if (rand(1,10)>2)
			{
				var p = new Powerup('p');
				var rx = rand(-20, 20); var ry = rand(-20, 20);
				p.addMovement(new Movement(1.5, this.movement.cx+rx, this.movement.cy+ry, this.movement.cx+rx, bg.h));
				powerups[powerups.length] = p;
			}
		}
	}
	else if (this.level == 4) // lily white
	{
		for (var i = 0; i < 10; i++)
		{
			if (rand(1,10)>4)
			{
				var p = new Powerup('s');
				var rx = rand(-20, 20); var ry = rand(-20, 20);
				p.addMovement(new Movement(1.5, this.movement.cx+rx, this.movement.cy+ry, this.movement.cx+rx, bg.h));
				powerups[powerups.length] = p;
			}
			if (rand(1,10)>2)
			{
				var p = new Powerup('p');
				var rx = rand(-20, 20); var ry = rand(-20, 20);
				p.addMovement(new Movement(1.5, this.movement.cx+rx, this.movement.cy+ry, this.movement.cx+rx, bg.h));
				powerups[powerups.length] = p;
			}
		}
	}
	else if (this.level == 5) // final boss
	{
		for (var i = 0; i < 5; i++)
		{
			var p = new Powerup('p');
			var rx = rand(-20, 20); var ry = rand(-20, 20);
			p.addMovement(new Movement(1.5, this.movement.cx+rx, this.movement.cy+ry, this.movement.cx+rx, bg.h));
			powerups[powerups.length] = p;
		}
		for (var i = 0; i < bullets.length; i++)
		{
			var b = bullets[i];
			
			if (b instanceof EnemyBullet)
			{
				var p = new Powerup('s');
				p.addMovement(new Movement(10, b.movement.cx, b.movement.cy, pg.movement.cx, pg.movement.cy));
				powerups[powerups.length] = p;
				bullets.splice(i,1);
			}
		}
		bullets = [];
	}
}

Enemy.prototype.work = function()
{
	Sprite.prototype.work.call(this);
	this.shoot();
}
