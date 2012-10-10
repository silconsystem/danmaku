// Main function to generate the level.
// Creates various enemies with specified level, movements, 
// spellcards and spawn delay, and adds them to the main level.
function generateLevel1()
{
	var level = new Level();
	
	var e;
	
	for (var i = 200; i <= 800; i+=50)
	{
		e = createEnemy1(i);
		move001(e);
		spellCard001(e);
		level.addEnemy(e);
	}
	
	for (var i = 1200; i <= 1400; i+=20)
	{
		e = createEnemy1(i);
		move002a(e);
		spellCard002(e);
		level.addEnemy(e);
	}
	
	for (var i = 1500; i <= 1700; i+=20)
	{
		e = createEnemy1(i);
		move002b(e);
		spellCard002(e);
		level.addEnemy(e);
	}
	
	for (var i = 1900; i <= 2200; i+=100)
	{
		e = createEnemy2(i);
		move004(e);
		spellCard003(e);
		level.addEnemy(e);
	}
	
	for (var i = 2400; i <= 2700; i+=100)
	{
		e = createEnemy2(i);
		move004(e);
		spellCard004(e);
		level.addEnemy(e);
	}
	
	for (var i = 2800; i <= 3000; i+=150)
	{
		e = createEnemy3(i);
		move001(e);
		spellCard005(e);
		level.addEnemy(e);
	}
	
	for (var i = 3400; i <= 3800; i+=75)
	{
		e = createEnemy2(i);
		move006(e);
		spellCard008(e);
		level.addEnemy(e);
	}
	
	for (var i = 4000; i <= 4300; i+=100)
	{
		e = createEnemy4(i);
		move005(e);
		spellCard007(e);
		level.addEnemy(e);
	}
	
	for (var i = 4600; i <= 4900; i+=100)
	{
		e = createEnemy2(i);
		move005(e);
		spellCard006(e);
		level.addEnemy(e);
	}
	
	e = createEnemy5(5000);
	move007(e);
	spellCard009(e);
	level.addEnemy(e);
	
	return level;
}


////////////////////////////////////////
// ENEMIES
////////////////////////////////////////

// return a level 1 enemy, spawning at the specified frame.
function createEnemy1(d)
{
	var e = new Enemy();
	e.level = 1;
	e.life = 6;
	e.image = img_e1;
	e.delay = d;
	return e;
}

// return a level 2 enemy, spawning at the specified frame.
function createEnemy2(d)
{
	var e = new Enemy();
	e.level = 2;
	e.life = 20;
	e.image = img_e2;
	e.delay = d;
	return e;
}

// return a level 3 enemy, spawning at the specified frame.
function createEnemy3(d)
{
	var e = new Enemy();
	e.level = 3;
	e.life = 40;
	e.image = img_e3;
	e.delay = d;
	return e;
}

// return a level 4 enemy, spawning at the specified frame.
function createEnemy4(d)
{
	var e = new Enemy();
	e.level = 4;
	e.life = 80;
	e.image = img_e4;
	e.delay = d;
	return e;
}

// return a level 5 enemy, spawning at the specified frame.
// Level 1 Boss: Keine Kamishirasawa
function createEnemy5(d)
{
	var e = new Enemy();
	e.level = 5;
	e.life = 700;
	e.w = 48; e.h = 64;
	e.image = img_bs2;
	e.delay = d;
	return e;
}


////////////////////////////////////////
// MOVEMENTS
////////////////////////////////////////

// enter from top, do an X shape, exit from top, random position
function move001(e)
{
	var rn1 = rand(20, bg.w-20);
	var rn2 = 0;
	var rn3 = rand(50,100);
	
	if (rn1 < bg.w/2) rn2 = rn1+100;
	else rn2 = rn1-100;
	
	e.addMovement(new Movement(1, rn1, 0, rn1, rn3));
	e.addRelativeMovement(new Movement(1, 0, 0, rn2, rn3+100));
	e.addRelativeMovement(new Movement(1, 0, 0, rn1, rn3+100));
	e.addRelativeMovement(new Movement(1, 0, 0, rn2, rn3));
	e.addRelativeMovement(new Movement(1, 0, 0, rn2, 0));
}

// enter from left, exit from right, diagonal direction
function move002a(e)
{
	e.addMovement(new Movement(3, 0, 50, bg.w, 100));
}

// enter from right, exit from left, diagonal direction
function move002b(e)
{
	e.addMovement(new Movement(3, bg.w, 50, 0, 100));
}

// enter from top, exit from bottom, diagonal random direction
function move003(e)
{
	var rn1 = rand(20, bg.w-20);
	var rn2 = rand(100, bg.w-100);
	
	e.addMovement(new Movement(1, rn1, 0, rn2, bg.h));
}

// enter from top, do an U shape, exit from top, random points 
function move004(e)
{	
	var rn1 = rand(20,bg.w-20);
	var rn2 = bg.w-rn1;
	
	var rn3 = 0;
	
	if (rn1 < bg.w/2) rn3 = rand(rn1,bg.w/2);
	else rn3 = rand(bg.w/2,rn1);
	
	var rn4 = bg.w-rn3;
	
	var rnh = rand(100,150);
	
	e.addMovement(new Movement(1, rn1, 0, rn3, rnh));
	e.addRelativeMovement(new Movement(1, 0, 0, rn4, rnh));
	e.addRelativeMovement(new Movement(1, 0, 0, rn2, 0));
}

// enter from top, stay, exit from top
function move005(e)
{
	var rn = rand(20, bg.w-20);
	
	e.addMovement(new Movement(1, rn, 0, rn, 120));
	
	var stay = new Movement(0, 0, 0, 0, 0);
	stay.tl = 200;
	e.addRelativeMovement(stay);
	e.addRelativeMovement(new Movement(1, 0, 0, rn, 0));
}

// enter from top, zig zag to the bottom
function move006(e)
{
	var rn1 = rand(20, bg.w-20);
	var rn2 = 0;
	
	if (rn1 < bg.w/2) rn2 = rn1+100;
	else rn2 = rn1-100;
	
	var h = 100;
	e.addMovement(new Movement(1, rn1, 0, rn1, h));
	
	while (h < bg.h)
	{
		h+=100;
		e.addRelativeMovement(new Movement(1, 0, 0, rn2, h));
		h+=100;
		e.addRelativeMovement(new Movement(1, 0, 0, rn, h));
	}
}

// enter from top, looping triangle
function move007(e)
{
	e.addMovement(new Movement(1, bg.w/2, 0, bg.w/2, 50));
	
	e.addLoopingMovement(new Movement(1, 0, 0, bg.w/2-50, 150));
	e.addLoopingMovement(new Movement(1, 0, 0, bg.w/2+50, 150));
	e.addLoopingMovement(new Movement(1, 0, 0, bg.w/2, 50));
}


////////////////////////////////////////
// SPELLCARDS
////////////////////////////////////////

// homing, 3 small shots
function spellCard001(e)
{
	var s = new SpellCard();
	s.ts = 120;
	
	var coords = getCircle();
	
	for (var i = 0; i < coords.length; i++)
	{
	        var b1 = new EnemyBullet();
	        b1.image = img_b8g;
	        b1.delay = 100;
	        b1.addMovement(new Movement(2, 0, 0, (coords[i].x*2), bg.h));
	        s.addBullet(b1);
	}
	
	e.spellcard = s;
}

// homing, 10 small shots
function spellCard002(e)
{
	var s = new SpellCard();
	s.ts = 200;
	
	for (var i = 0; i < 6; i++)
    {
		var b1 = new EnemyBullet();
		b1.image = img_b8g;
		b1.delay = 10+(i*5);
		b1.homing = 1;
		b1.addMovement(new Movement(2, 0, 0, -10, bg.w/2));
		
		s.addBullet(b1);
		
		var b2 = new EnemyBullet();
		b2.w = 16; b2.h = 16;
		b2.image = img_b16d;
		b2.delay = 20;
		b2.homing = 0;
		b2.addMovement(new Movement(3, 0, 0, bg.w, bg.h));
		s.addBullet(b2);
	}
	
	e.spellcard = s;
}

// 3 bursts in /|\ shape, 1 big shot followed by 4 small shots
function spellCard003(e)
{
        var s = new SpellCard();
        s.ts = 150;
	
        for (var i = 0; i < 5; i++)
        {
	var b1 = new EnemyBullet();
		
	if (i == 0)
	{
		b1.image = img_b16i;
		b1.w = 16; b1.w = 16;
	}
	else
	{
		b1.image = img_b8h;
	}
	 
	b1.delay = 100+(i*8);
	b1.addMovement(new Movement(2, 0, 0, -80, bg.h));
	
	s.addBullet(b1);
	
	var b2 = new EnemyBullet();
	
	if (i == 0)
	{
		b2.image = img_b16i;
		b2.w = 16; b2.w = 16;
	}
	else
	{
		b2.image = img_b8h;
	}
		 
	b2.delay = 100+(i*8);
	b2.addMovement(new Movement(2, 0, 0, 0, bg.h));
	
	s.addBullet(b2);
	
	var b3 = new EnemyBullet();
	
	if (i == 0)
	{
		b3.image = img_b16i;
		b3.w = 16; b3.w = 16;
	}
	else
	{
		b3.image = img_b8h;
	}
	 
	b3.delay = 100+(i*8);
	b3.addMovement(new Movement(2, 0, 0, 80, bg.h));
	
	s.addBullet(b3);
        }
        
        e.spellcard = s;
}

// homing, cloud of bullets
function spellCard004(e)
{
	var s = new SpellCard();
	s.ts = 80;
	
	for (var i = 0; i < 30; i++)
	{
		var b1 = new EnemyBullet();
		b1.image = img_b8d;
		b1.delay = i;
		b1.homing = 1;
		b1.addMovement(new Movement(2, rand(-10,10), rand(-10,10), 0, 0));
		
		s.addBullet(b1);
	}
	
	e.spellcard = s;
}

// single circle curtain
function spellCard005(e)
{
	var s = new SpellCard();
	s.ts = 125;
	
	var coords = getCircle();
	for (var i = 0; i < coords.length; i++)
	{
		var b1 = new EnemyBullet();
		b1.image = img_b8j;
		b1.delay = 100;
		b1.addMovement(new Movement(2, 0, 0, coords[i].x, coords[i].y));
		s.addBullet(b1);
	}
	
	e.spellcard = s;
}

// cosine flow curtain
function spellCard006(e)
{
	var s = new SpellCard();
	s.ts = 150;
	
	for (var i = 0; i <= 100; i++)
	{
		var nx = Math.cos(i/5)*(i/2);
		
		var b1 = new EnemyBullet();
		b1.image = img_b8c;
		b1.delay = i;
		b1.addMovement(new Movement(2.5, nx, 0, nx, bg.h));
		s.addBullet(b1);
	}
	
	e.spellcard = s;
}

// semicircle curtain in random directions, 5 shots at a time
function spellCard007(e)
{
	var s = new SpellCard();
	s.ts = 150;
	
	var coords = getCircle();
	for (var i = 0; i < 10; i++)
	{
		var rn = rand(0,(coords.length/2)-6);
		
		for (var j = 0; j < 5; j++)
		{
			var b1 = new EnemyBullet();
			b1.image = img_b8h;
			b1.delay = 50+(i*10);
			b1.addMovement(new Movement(2, 0, 0, coords[rn+j].x, coords[rn+j].y));
			s.addBullet(b1);
		}
	}
	
	e.spellcard = s;
}

// homing cannon, slightly random small bullets and straight big bullets
function spellCard008(e)
{
	var s = new SpellCard();
	s.ts = 250;
	
	for (var i = 0; i < 5; i++)
	{
		var b1 = new EnemyBullet();
		
		b1.image = img_b8f;
		b1.delay = 10+(i*5);
		b1.homing = 1;
		b1.addMovement(new Movement(3, rand(-20,20), rand(-20,20), rand(-20,20), rand(-20,20)));
		s.addBullet(b1);
		
		var b2 = new EnemyBullet();
		b2.w = 16; b2.h = 16;
		b2.image = img_b16d;
		b2.delay = 10;
		b2.homing = 1;
		b2.addMovement(new Movement(5-i, 0, 0, 0, 0));
		s.addBullet(b2);
	}
	
	e.spellcard = s;
}

// spiralling circle curtain + random big bullets = boss spellcard 1
function spellCard009(e)
{
	var s = new SpellCard();
	s.ts = 240;
	
	var coords = getCircle();
	var c1 = 0, c2 = 10, c3 = 20, c4 = 30;
	for (var i = 0; i < 60; i++)
	{
		c1++;
		c1 = c1%coords.length;
		c2++;
		c2 = c2%coords.length;
		c3++;
		c3 = c3%coords.length;
		c4++;
		c4 = c4%coords.length;
		
		var b1 = new EnemyBullet();
		b1.image = img_b8b;
		b1.delay = 50+(i*2);
		b1.addMovement(new Movement(2, 0, 0, coords[c1].x, coords[c1].y));
		s.addBullet(b1);
		
		var b2 = new EnemyBullet();
		b2.image = img_b8b;
		b2.delay = 50+(i*2);
		b2.addMovement(new Movement(2, 0, 0, coords[c2].x, coords[c2].y));
		s.addBullet(b2);
		
		var b3 = new EnemyBullet();
		b3.image = img_b8b;
		b3.delay = 50+(i*2);
		b3.addMovement(new Movement(2, 0, 0, coords[c3].x, coords[c3].y));
		s.addBullet(b3);
		
		var b4 = new EnemyBullet();
		b4.image = img_b8b;
		b4.delay = 50+(i*2);
		b4.addMovement(new Movement(2, 0, 0, coords[c4].x, coords[c4].y));
		s.addBullet(b4);
	}
	
	for (var i = 0; i < 8; i++)
	{		
		var b1 = new EnemyBullet();
		b1.w = 16; b1.h = 16;
		b1.image = img_b16h;
		b1.delay = 60+(i*5);
		b1.homing = 1;
		b1.addMovement(new Movement(3, 0, 0, rand(-40,40), rand(-40,40)));
		s.addBullet(b1);
		
		var b2 = new EnemyBullet();
		b2.w = 16; b2.h = 16;
		b2.image = img_b16h;
		b2.delay = 180+(i*5);
		b2.homing = 1;
		b2.addMovement(new Movement(3, 0, 0, rand(-40,40), rand(-40,40)));
		s.addBullet(b2);
	}
	
	e.spellcard = s;
}