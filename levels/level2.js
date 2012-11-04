// Main function to generate the level.
// Creates various enemies with specified level, movements, 
// spellcards and spawn delay, and adds them to the main level.
function generateLevel2()
{
        var level = new Level();
        
        var e;
        
        for (var i = 150; i <= 600; i+=50)
        {
	e = createEnemy6(i);
	move008a(e);
	spellCard011(e);
	level.addEnemy(e);
        }
        
        for (var i = 200; i <= 700; i+=50)
        {
	e = createEnemy6(i);
	move008b(e);
	spellCard010(e);
	level.addEnemy(e);
        }
        
        for (var i = 900; i <= 1600; i+=150)
        {
	e = createEnemy7(i);
	move009(e);
	spellCard012(e);
	level.addEnemy(e);
        }
        
        for (var i = 1700; i <= 2200; i+=70)
        {
	e = createEnemy2(i);
	move001(e);
	spellCard013(e);
	level.addEnemy(e);
        }
        
        for (var i = 2400; i <= 2700; i+=100)
        {
	e = createEnemy7(i);
	move010(e);
	spellCard014(e);
	level.addEnemy(e);
        }
        
        for (var i = 2800; i <= 3000; i+=150)
        {
	e = createEnemy3(i);
	move006(e);
	spellCard015(e);
	level.addEnemy(e);
        }
	
	e = createEnemy8(3200);
	move007(e);
	spellCard016(e);
	level.addEnemy(e);
	
       
        return level;
}


////////////////////////////////////////
// ENEMIES
////////////////////////////////////////

// return a level 1 enemy, spawning at the specified frame.
function createEnemy6(d)
{
        var e = new Enemy();
        e.level = 2;
        e.life = 12;
        e.image = img_e6;
        e.delay = d;
        return e;
}

// return a level 2 enemy, spawning at the specified frame.
function createEnemy7(d)
{
        var e = new Enemy();
        e.level = 3;
        e.life = 20;
        e.image = img_e7;
        e.delay = d;
        return e;
}

// Level 2 Boss: Kurimi
function createEnemy8(d)
{
        var e = new Enemy();
        e.w = 64;
        e.h = 64;
        e.level = 5;
        e.life = 1400;
        e.image = img_bss2;
        e.delay = d;
        return e;
}

////////////////////////////////////////
// MOVEMENTS
////////////////////////////////////////

// enter from left, exit from right, diagonal direction
function move008a(e)
{
        e.addMovement(new Movement(3, 0, 350, bg.w, 100));
}

// enter from right, exit from left, diagonal direction
function move008b(e)
{
        e.addMovement(new Movement(3, bg.w, 350, 0, 100));
}

// enter from top, exit from bottom, diagonal random direction
function move009(e)
{
        var rn1 = rand(100, bg.w-200);
        var rn2 = rand(100, bg.w-200);
        
        e.addMovement(new Movement(1, rn1, 0, rn2, bg.h));
}

// enter from top, stay, exit from top, random position
function move010(e)
{
        var rn = rand(20, bg.w-20);
        var rn1 = rand(20, bg.w-20);
        var rn2 = 0;
        
        e.addMovement(new Movement(1, rn, 0, rn, 120));
        
        var stay = new Movement(0, 0, 0, 0, 0);
        stay.tl = 200;
        e.addRelativeMovement(stay);
        e.addRelativeMovement(new Movement(1, 0, 0, rn, 0));
        
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

////////////////////////////////////////
// SPELLCARDS
////////////////////////////////////////

// half circle shots
function spellCard010(e)
{
        var s = new SpellCard();
        s.ts = 120;
        
        var coords = getCircle();
        
        for (var i = 0; i < coords.length; i++)
        {
	var b1 = new EnemyBullet();
	b1.image = img_b8g;
	b1.delay = 100;
	b1.addMovement(new Movement(2, 0, 0, (coords[i].x*4), bg.w));
	s.addBullet(b1);
	
	var b2 = new EnemyBullet();
	b2.w = 8; b2.h = 8;
	b2.image = img_b16b;
	b2.delay = 20;
	b2.homing = 1;
	b2.addMovement(new Movement(3, 0, 0, bg.h, bg.w/2));
	s.addBullet(b2);
        }
        
        e.spellcard = s;
}

// homing, 10 small shots
function spellCard011(e)
{
        var s = new SpellCard();
        s.ts = 200;
        
        for (var i = 0; i < 6; i++)
        {
	var b1 = new EnemyBullet();
	b1.image = img_b8g;
	b1.delay = 10+(i*5);
	b1.homing = 0;
	b1.addMovement(new Movement(2, 0, 0, -10, bg.w/2));	
	s.addBullet(b1);
	
	var b2 = new EnemyBullet();
	b2.w = 8; b2.h = 8;
	b2.image = img_b16b;
	b2.delay = 20;
	b2.homing = 1;
	b2.addMovement(new Movement(3, 0, 0, bg.w, bg.h));
	s.addBullet(b2);
        }
        
        e.spellcard = s;
}

// 3 bursts in /|\ shape, 1 big shot followed by 4 small shots
function spellCard012(e)
{
        var s = new SpellCard();
        s.ts = 150;
        
        for (var i = 0; i < 5; i++)
        {
	var b1 = new EnemyBullet();
	
	if (i == 0) 
	{
	        b1.image = img_b16b;
	        b1.w = 16; b1.w = 16;
	        b1.homing = 1;
	}
	else
	{
	        b1.image = img_b8h;
	}
	
	b1.delay = 50+(i*8);
	b1.addMovement(new Movement(2, 0, 0, -80, bg.h));
	
	s.addBullet(b1);
	
	var b2 = new EnemyBullet();
	
	if (i == 0) 
	{
	        b2.image = img_b16i;
	        b2.w = 16; b2.w = 16;
	        b2.homing =1;
	}
	else
	{
	        b2.image = img_b8h;
	}
	
	b2.delay = 50+(i*8);
	b2.addMovement(new Movement(2, 0, 0, bg.w, bg.h));
	
	s.addBullet(b2);
	
	var b3 = new EnemyBullet();
	
	if (i == 0) 
	{
	        b3.image = img_b16i;
	        b3.w = 16; b3.w = 16;
	        b3.homing = 1;
	}
	else
	{
	        b3.image = img_b8h;
	}
	
	b3.delay = 50+(i*10);
	b3.addMovement(new Movement(2, 0, 0, 80, bg.h));
	
	s.addBullet(b3);
        }
        
        e.spellcard = s;
}

// homing, bullets spray across the screen
function spellCard013(e)
{
        var s = new SpellCard();
        s.ts = 80;
        
        var coords = getCircle();
        
        for (var i = 0; i < 15; i++)
        {
	var b1 = new EnemyBullet();
	b1.image = img_b8d;
	b1.delay = i;
	b1.homing = 1;
	b1.addMovement(new Movement(2, rand(-10,10), rand(-10,10), coords[i].x, coords[i].y));
	
	s.addBullet(b1);
        }
        
        e.spellcard = s;
}

// single circle curtain
function spellCard014(e)
{
        var s = new SpellCard();
        s.ts = 125;
        
        var coords = getCircle();
        var c1 = 0, c2 = 10;
        
        for (var i = 0; i < coords.length; i++)
        {
	c1++;
	c1 = c1%coords.length;
	c2++;
	c2 = c2%coords.length;
	
	var b1 = new EnemyBullet();
	b1.image = img_b16g;
	b1.delay = 50;
	b1.addMovement(new Movement(2, 0, 0, coords[c1].x, coords[c1].y));
	s.addBullet(b1);
	
	var b2 = new EnemyBullet();
	b2.image = img_b16g;
	b2.delay = 60;
	b2.addMovement(new Movement(2, 0, 0, coords[c2].x, coords[c2].y))
        }
        
        e.spellcard = s;
}
// cosine flow curtain
function spellCard015(e)
{
        var s = new SpellCard();
        s.ts = 150;
        
        for (var i = 0; i <= 100; i++)
        {
	var nx = Math.cos(i/2)*(i/2);
	
	var b1 = new EnemyBullet();
	b1.image = img_b8c;
	b1.delay = i;
	b1.homing = 1;
	b1.addMovement(new Movement(2.5, nx, 0, nx*0.5, bg.h));
	s.addBullet(b1);
        }
        
        e.spellcard = s;
}

// spiralling circle curtain + random big bullets = boss spellcard 2
function spellCard016(e)
{
        var s = new SpellCard();
        s.ts = 240;
        
        var coords = getCircle();
        var c1 = 0, c2 = 10, c3 = 20, c4 = 30, c5 = 40, c6 = 50;
        for (var i = 0; i < 80; i++)
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
	b1.image = img_b8g;
	b1.delay = 50+(i*2);
	b1.addMovement(new Movement(1, 0, 0, coords[c1].x, coords[c1].y));
	s.addBullet(b1);
	
	var b2 = new EnemyBullet();
	b2.image = img_b8b;
	b2.delay = 50+(i*2);
	b2.addMovement(new Movement(1, 0, 0, coords[c2].x, coords[c2].y));
	s.addBullet(b2);
	
	var b3 = new EnemyBullet();
	b3.image = img_b8g;
	b3.delay = 50+(i*2);
	b3.addMovement(new Movement(1, 0, 0, coords[c3].x, coords[c3].y));
	s.addBullet(b3);
	
	var b4 = new EnemyBullet();
	b4.image = img_b8b;
	b4.delay = 50+(i*2);
	b4.addMovement(new Movement(1, 0, 0, coords[c4].x*2, coords[c4].y*2));
	s.addBullet(b4);
        }
        
        for (var i = 0; i < 8; i++)
        {		
	var b1 = new EnemyBullet();
	b1.w = 16; b1.h = 16;
	b1.image = img_b16g;
	b1.delay = 60+(i*5);
	b1.homing = 1;
	b1.addMovement(new Movement(5, 0, 0, coords[c1].x, rand(-20,20)));
	s.addBullet(b1);
	
	var b2 = new EnemyBullet();
	b2.w = 16; b2.h = 16;
	b2.image = img_b16f;
	b2.delay = 180+(i*5);
	b2.homing = 1;
	b2.addMovement(new Movement(3, 0, 0, rand(-20,20), coords[c1].y));
	s.addBullet(b2);
        }
        
        e.spellcard = s;
}