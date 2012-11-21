/* ------------------------
 * 		Level 4
 * 			---------------------------- */
function generateLevel4()
{
        var level = new Level();
        
        var e;

        for (var i = 100; i <= 100; i += 100)
        {
	e = createEnemy15(i);
	move019(e);
	spellCard020(e);
	level.addEnemy(e);
        }

        for (var i = 300; i <= 600; i+= 100)
        {
	e = createEnemy1(i);
	move002a(e);
	spellCard002(e);
	level.addEnemy(e);
        }

        for (var i = 300; i <= 700; i += 100)
        {
	e = createEnemy1(i);
	move002b(e);
	spellCard002(e);
	level.addEnemy(e);
        }

        for (var i = 600; i < 1200; i += 100)
        {
	e = createEnemy3(i);
	move006(e);
	spellCard007(e);
	level.addEnemy(e);
        }

        for (var i = 1100; i < 1400; i += 100)
        {
	e = createEnemy1(i);
	move019(e);
	spellCard020(e);
	level.addEnemy(e);
        }

        for (var i = 1600; i < 1800; i += 50)
        {
	e = createEnemy4(i);
	move014(e);
	spellCard007(e);
	level.addEnemy(e);
        }

        e = createEnemy16(2000);
        move019(e);
        spellCard021(e);
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
        e.life = 5500;
        e.w = 48; e.h = 64;
        e.image = img_bss3;
        e.delay = d;
        return e;
}

// Level 5 Boss: Scarlet Devil
function createEnemy16(d)
{
        var e = new Enemy();
        e.level = 5;
        e.life = 2200;
        e.w = 248; e.h = 85;
        e.image = img_e5;
        e.delay = d;
        return e;
}

////////////////////////////////////////
// MOVEMENTS
////////////////////////////////////////

// enter from top, stay, exit
function move019(e)
{
        e.addMovement(new Movement(2, bg.w/2, 0, bg.w/2, 150));
        e.addRelativeMovement(new Movement(2, 0, 0, bg.w/2, 20));
        e.addRelativeMovement(new Movement(2, 0, 0, bg.w/2, 300));
        e.addRelativeMovement(new Movement(2, 0, 0, bg.w/2, 0))
}
////////////////////////////////////////
// SPELLCARDS
////////////////////////////////////////

// spiralling circle curtain + random big bullets
function spellCard020(e)
{
        
	var s = new SpellCard();
	s.ts = 125;
	
	var coords = getCircle();5

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

// semicircle curtain in random directions, 5 shots at a time
function spellCard021(e)
{
        var s = new SpellCard();
        s.ts = 250;

        var coords = getCircle();
        var coordsB = getDenseCircle();
        for (var i = 0; i < 10; i++)
        {

	for (var n = 0; n < 10; n++)
	{
	        var dx = Math.cos(n)*Math.PI*4;
	        var dy = Math.sin(n)*Math.PI*2;

	        var dxx = Math.cos(n)*Math.sin(n);
	        var dyy = Math.sin(n)*Math.cos(n);

	        var b1 = new EnemyBullet();
	        b1.image = img_b8d;
	        b1.delay = 10;
	        b1.homing = 1;
	        b1.addMovement(new Movement(8, rand(-300,300), rand(-15,15), dx, dy));
	        s.addBullet(b1);

	        var b2 = new EnemyBullet();
	        b2.image = img_b8d;
	        b2.delay = 30;
	        b2.homing = 1;
	        b2.addMovement(new Movement(8, rand(-300,300), rand(-15,15), dxx, dyy));
	        s.addBullet(b2);
	}

	for (var c = 0; c < 20; c++)
	{
	        var b3 = new EnemyBullet();
	        b3.delay = 20+(i*5);
	        b3.image = img_b16g;
	        b3.homing = 1;
	        b3.addMovement(new Movement(6, 0, 0, (coords[i].x-30), coords[i].y+100));
	        s.addBullet(b3);

	        var b3a = new EnemyBullet();
	        b3a.delay = 22+(i*5);
	        b3a.image = img_b16f;
	        b3a.homing = 1;
	        b3a.addMovement(new Movement(8, 0, 0, (coords[i].x-20), coords[i].y+75));
	        s.addBullet(b3a);

	        var b3b = new EnemyBullet();
	        b3b.delay = 24+(i*5);
	        b3b.image = img_b16f;
	        b3b.homing = 1;
	        b3b.addMovement(new Movement(6, 0, 0, (coords[i].x-10), coords[i].y+50));
	        s.addBullet(b3b);

	        var b3c = new EnemyBullet();
	        b3c.delay = 24+(i*5);
	        b3c.image = img_b16f;
	        b3c.homing = 1;
	        b3c.addMovement(new Movement(8, 0, 0, (coords[i].x), coords[i].y+25));
	        s.addBullet(b3c);
	}

	for (var j = 0; j < coordsB.length; j++)
	{
	        var b4c = new EnemyBullet();
	        b4c.image = img_b16b;
	        b4c.delay = 88;
	        b4c.addMovement(new Movement(2, rand(-100,100), 0, coordsB[j].x, coordsB[j].y));
	        s.addBullet(b4c);

	        var b4d = new EnemyBullet();
	        b4d.image = img_b8c;
	        b4d.delay = 94;
	        b4d.addMovement(new Movement(2, rand(-200,200), 0, coordsB[j].x, coordsB[j].y));
	        s.addBullet(b4d);

	        var b5 = new EnemyBullet();
	        b5.image = img_b16c;
	        b5.delay = 120;
	        b5.addMovement(new Movement(2, 0, 0, (coords[j].x), bg.h));
	        s.addBullet(b5);

	        var b5a = new EnemyBullet();
	        b5a.image = img_b16c;
	        b5a.delay = 120;
	        b5a.addMovement(new Movement(2, 0, 0, (coords[j].x), bg.h));
	        s.addBullet(b5);
	}
        }
        e.spellcard = s;
}