/*
 * Player.js
 * Sprite representing the active player. 
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

extend(Player, Sprite);

function Player()
{
	this.w = 24;
	this.h = 31;
	
	this.image = null;
	this.color = 'rgba(255,0,0,255)';
	
	this.dead = 0;
	this.health = 10;
	this.graze = 0;
	
	this.movements = [];
	this.movement = null;
	
	this.power = 0; 	// Marisa's shooting power
}

Player.prototype.move = function()
{
	var m = 7; 		// normal movement
	if (sm_p == 1)
	{
		m  = 3;
		this.image = img_pg_slw;
	        
	} else {
	        	this.image = img_pg;
	} // slow
	
	// diagonal movement
	if (up_p + dw_p + lf_p + rg_p > 1)
    	m = m * 0.7;
	
	// refresh player position no grazing
	if (up_p == 1) 
		this.movement.cy -= m;
	if (dw_p == 1) 
		this.movement.cy += m;
	if (lf_p == 1) 
		this.movement.cx -= m;
	if (rg_p == 1) 
		this.movement.cx += m;
	
	// avoid going out of the screen
	if (this.movement.cx >= bg.w - bg.padding)
		this.movement.cx = bg.w - bg.padding;
	if (this.movement.cx <= bg.padding) 
		this.movement.cx = bg.padding;
	if (this.movement.cy >= bg.h - bg.padding) 
		this.movement.cy = bg.h - bg.padding;
	if (this.movement.cy <= bg.padding)
		this.movement.cy = bg.padding;
	
}

// fire bullets
Player.prototype.shoot = function()
{        
	if (this.power < 10)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-4, this.movement.cy, this.movement.cx-4, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+4, this.movement.cy, this.movement.cx+4, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	}
	else if (this.power < 20)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-5, this.movement.cy, this.movement.cx-12, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+5, this.movement.cy, this.movement.cx+12, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
		
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx, this.movement.cy, this.movement.cx, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
	}
	else if (this.power < 30)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-4, this.movement.cy, this.movement.cx-6, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+4, this.movement.cy, this.movement.cx+6, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
		
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx-8, this.movement.cy, this.movement.cx-18, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
		
		var b4 = new PlayerBullet();
		var m4 = new Movement(25, this.movement.cx+8, this.movement.cy, this.movement.cx+18, -10);
		b4.addMovement(m4);
		bullets[bullets.length] = b4;
	}
	else if (this.power < 40)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-12, this.movement.cy, this.movement.cx-35, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+12, this.movement.cy, this.movement.cx+35, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
		
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-6, this.movement.cy, this.movement.cx-15, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+6, this.movement.cy, this.movement.cx+15, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
		
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx, this.movement.cy, this.movement.cx, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
	}
	else if (this.power < 50)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-40, this.movement.cy, this.movement.cx-80, -10);
		b1.addMovement(m1);
		b1.image = img_bb2;
		b1.w = 10;
		b1.h = 10;
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+40, this.movement.cy, this.movement.cx+80, -10);
		b2.addMovement(m2);
		b2.image = img_bb2;
		b2.w = 10;
		b2.h = 10;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-14, this.movement.cy, this.movement.cx-35, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+14, this.movement.cy, this.movement.cx+35, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-8, this.movement.cy, this.movement.cx-15, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+8, this.movement.cy, this.movement.cx+15, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx, this.movement.cy, this.movement.cx, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
	}
	else if (this.power < 60)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-46, this.movement.cy, this.movement.cx-90, -10);
		b1.addMovement(m1);
		b1.image = img_bpA;
		b1.w = 6;
		b1.h = 16;
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+46, this.movement.cy, this.movement.cx+90, -10);
		b2.addMovement(m2);
		b2.image = img_bpA;
		b2.w = 6;
		b2.h = 16;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-40, this.movement.cy, this.movement.cx-80, -10);
		b1.addMovement(m1);
		b1.image = img_bb2;
		b1.w = 6;
		b1.h = 16;
		bullets[bullets.length] = b1;
		
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+40, this.movement.cy, this.movement.cx+80, -10);
		b2.addMovement(m2);
		b2.image = img_bb2;
		b2.w = 6;
		b2.h = 16;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-14, this.movement.cy, this.movement.cx-35, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+14, this.movement.cy, this.movement.cx+35, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-8, this.movement.cy, this.movement.cx-15, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+8, this.movement.cy, this.movement.cx+15, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx, this.movement.cy, this.movement.cx, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
	}
	else if (this.power >= 60)
	{
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-52, this.movement.cy, this.movement.cx-115, -10);
		b1.addMovement(m1);
		b1.image = img_bpA;
		b1.w = 6;
		b1.h = 16;
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+52, this.movement.cy, this.movement.cx+115, -10);
		b2.addMovement(m2);
		b2.image = img_bpA;
		b2.w = 6;
		b2.h = 16;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-46, this.movement.cy, this.movement.cx-90, -10);
		b1.addMovement(m1);
		b1.image = img_bpA;
		b1.w = 6;
		b1.h = 16;
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+46, this.movement.cy, this.movement.cx+90, -10);
		b2.addMovement(m2);
		b2.image = img_bb2;
		b2.w = 6;
		b2.h = 16;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-40, this.movement.cy, this.movement.cx-70, -10);
		b1.addMovement(m1);
		b1.image = img_bb2;
		b1.w = 6;
		b1.h = 16;
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+40, this.movement.cy, this.movement.cx+70, -10);
		b2.addMovement(m2);
		b2.image = img_bb2;
		b2.w = 6;
		b2.h = 16;
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-14, this.movement.cy, this.movement.cx-35, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+14, this.movement.cy, this.movement.cx+35, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b1 = new PlayerBullet();
		var m1 = new Movement(25, this.movement.cx-8, this.movement.cy, this.movement.cx-15, -10);
		b1.addMovement(m1);
		bullets[bullets.length] = b1;
	        
		var b2 = new PlayerBullet();
		var m2 = new Movement(25, this.movement.cx+8, this.movement.cy, this.movement.cx+15, -10);
		b2.addMovement(m2);
		bullets[bullets.length] = b2;
	        
		var b3 = new PlayerBullet();
		var m3 = new Movement(25, this.movement.cx, this.movement.cy, this.movement.cx, -10);
		b3.addMovement(m3);
		bullets[bullets.length] = b3;
	}
}
Player.prototype.bomb = function()
{
	// circle bomb	
	var coords = getDenseCircle();
	
	for (var i = 0; i < coords.length; i++)
	{
		for (var j = 0; j < 4; j++)
		{
			theta = j * 0.7;
			twist = j * Math.cos(theta);
			centerX = this.movement.cx + 12;
			centerY = this.movement.cy - 16;

			var b1 = new PlayerBomb();
			b1.addMovement(new Movement(2, centerX+48, this.movement.cy, (coords[i].x*twist), (coords[i].y*twist)));
			b1.image = img_spc;
			b1.w = 36;
			b1.h = 36;
			bullets[bullets.length] = b1;

			var b2 = new PlayerBomb();
			b2.addMovement(new Movement(2, centerX-48, this.movement.cy, (coords[i].x*twist), (coords[i].y*twist)));
			b2.image = img_spc;
			b2.w = 36;
			b2.h = 36;
			bullets[bullets.length] = b2;

			var b2 = new PlayerBomb();
			b2.addMovement(new Movement(2, centerX+20, this.movement.cy, (coords[i].x*twist), (coords[i].y*twist)));
			b2.image = img_spc;
			b2.w = 36;
			b2.h = 36;
			bullets[bullets.length] = b2;

			var b3 = new PlayerBomb();
			b3.addMovement(new Movement(2, centerX-20, this.movement.cy, (coords[i].x*twist), (coords[i].y*twist)));
			b3.image = img_spc;
			b3.w = 36;
			b3.h = 36;
			bullets[bullets.length] = b3;

			var b4 = new PlayerBomb();
			b4.addMovement(new Movement(2, centerX, centerY-40, (coords[i].x*twist), (coords[i].y*twist)));
			b4.image = img_spc;
			b4.w = 36;
			b4.h = 36;
			bullets[bullets.length] = b4;
		}
	}
}

Player.prototype.special = function()
{ 
	var coords = getSpiral();
	var c1 = 12, c2 = 24, c3 = 48, c4 = 96;
	
	for (var i = 0; i < coords.length; i++)
	{
		c1++;
		c1 = c1%coords.length;
		c2++;
		c2 = c2%coords.length;
		c3++;
		c3 = c3%coords.length;
		c4++;
		c4 = c4%coords.length;
	        
		var special = new PlayerSpell();
		special.addMovement(new Movement(3, this.movement.cx, this.movement.cy, (coords[c1].x), (coords[c1].y)));
		special.image = img_bpA;
		bullets[bullets.length] = special;

		var special01 = new PlayerSpell();
		special01.addMovement(new Movement(3, this.movement.cx, this.movement.cy, (coords[c2].x), (coords[c2].y)));
		special01.image = img_bb2;
		bullets[bullets.length] = special01;

		var special02 = new PlayerSpell();
		special02.addMovement(new Movement(3, this.movement.cx, this.movement.cy, (coords[c3].x), (coords[c3].y)));
		special02.image = img_bpA
		bullets[bullets.length] = special02;

		var special03 = new PlayerSpell();
		special03.addMovement(new Movement(3, this.movement.cx, this.movement.cy, (coords[c4].x), (coords[c4].y)));
		special03.image = img_bb2;
		bullets[bullets.length] = special03;
	}

	// bullet to score spell get the 200000 score quicker to regain strength
	// 1 frames bullets are destroyed and made into player-homing powerups
	for (var i = 0; i < bullets.length; i++)
	{
	        var b = bullets[i];
	        
	        if (b instanceof EnemyBullet)
	        {
			b.dead = 1;
			var p = new Powerup('s');
			p.addMovement(new Movement(12, b.movement.cx, b.movement.cy, pg.movement.cx, pg.movement.cy));
			powerups[powerups.length] = p;
			bullets.splice(i,1);
	        }
	}
}
	
Player.prototype.work = function()
{
	Sprite.prototype.work.call(this);
	if (sh_p == 1)
	{
		this.shoot()
		playSfx("playershot", 1);
	}
	else if (s2_p == 1 && bombs > 0)
	{
		s2_p = 0;			
		bombs -= 1;
		this.bomb();
		playSfx("playershot", 2);
	}
	else if (s3_p == 1 && spell > 0)
	{
		var i = 0;
		
		s3_p = 0;
		spell -= 1;
		this.special();
		playSfx("playershot", 3);
	}
}