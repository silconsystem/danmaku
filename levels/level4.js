/* ------------------------
 * 		Level 4
 * 			---------------------------- */
function generateLevel4()
{
        var level = new Level();
        
        var e;

        e = createEnemy15(100);
        move019(e);
        spellCard020(e);
        level.addEnemy(e);
        
        return level;
}


////////////////////////////////////////
// ENEMIES
////////////////////////////////////////

// Level 4 Boss: Alice Margatroid
function createEnemy15(d)
{
        var e = new Enemy();
        e.level = 5;
        e.life = 2000;
        e.w = 48; e.h = 64;
        e.image = img_bss3;
        e.delay = d;
        return e;
}

////////////////////////////////////////
// MOVEMENTS
////////////////////////////////////////

// enter from top, looping triangle
function move019(e)
{
        e.addMovement(new Movement(2, bg.w/2, 0, bg.w/2, 50));
        
        e.addLoopingMovement(new Movement(2, 0, 0, bg.w/2-150, 150));
        e.addLoopingMovement(new Movement(2, 0, 0, bg.w/2+150, 150));
        e.addLoopingMovement(new Movement(2, 0, 0, bg.w/2, 250));
}
////////////////////////////////////////
// SPELLCARDS
////////////////////////////////////////

// spiralling circle curtain + random big bullets
function spellCard020(e)
{
        
	var s = new SpellCard();
	s.ts = 125;
	
	var coords = getCircle();

	for (var i = 0; i < coords.length; i++)
	{
	        for (var j = 0; j < 2; j++)
	        {
		var b1 = new EnemyBullet();
		b1.image = img_b8g;
		b1.delay = 10;
		b1.homing = 0;
		b1.addMovement(new Movement(7, rand(-100,100), rand(-100,100), coords[i].x, coords[i].y));
		s.addBullet(b1);

		var b1a = new EnemyBullet();
		b1a.image = img_b8g;
		b1a.delay = 16;
		b1a.homing = 1;
		b1a.addMovement(new Movement(8, rand(-80,80), rand(-40,40), coords[i].x, coords[i].y));
		s.addBullet(b1a);

		var b1b = new EnemyBullet();
		b1b.image = img_b8g;
		b1b.delay= 20;
		b1b.homing = 0;
		b1b.addMovement(new Movement(9, rand(-200,200), rand(-150,150), coords[i].x, coords[i].y));
		s.addBullet(b1b);
        	        }
	        
	        var b2 = new EnemyBullet();
	        b2.image = img_b8g;
	        b2.delay = 50;
	        b2.homing = 0;
	        b2.addMovement(new Movement(4, 100, 100, coords[i].x, coords[i].y));
	        s.addBullet(b2);

	        var b2a = new EnemyBullet();
	        b2a.image = img_b8g;
	        b2a.delay = 55;
	        b2a.homing = 0;
	        b2a.addMovement(new Movement(5, -100, -100, coords[i].x, coords[i].y));
	        s.addBullet(b2a);

	        var b2b = new EnemyBullet();
	        b2b.image = img_b8g;
	        b2b.delay = 60;
	        b2b.homing = 0;
	        b2b.addMovement(new Movement(6, 0, 200, coords[i].x, coords[i].y));
	        s.addBullet(b2b);

	        var b2c = new EnemyBullet();
	        b2c.image = img_b8g;
	        b2c.delay = 65;
	        b2c.homing = 0;
	        b2c.addMovement(new Movement(5, -200, -200, coords[i].x, coords[i].y));
	        s.addBullet(b2c);

	        var b2d = new EnemyBullet();
	        b2d.image = img_b8g;
	        b2d.delay = 70;
	        b2d.homing = 0;
	        b2d.addMovement(new Movement(4, 0, 250, coords[i].x, coords[i].y));
	        s.addBullet(b2d);

	        for (var n = 0; n < 4; n++)
	        {
		var b3 = new EnemyBullet();
		b3.image = img_b16d;
		b3.delay = 85;
		b3.addMovement(new Movement(8, rand(-50,50), rand(-50,50), coords[i].x, coords[i].y));
		s.addBullet(b3);
	       }
	}
        
        e.spellcard = s;
}