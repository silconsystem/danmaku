// Main function to generate the level.
// Creates various enemies with specified level, movements, 
// spellcards and spawn delay, and adds them to the main level.
function generateLevel3()
{
        var level = new Level();
        
        var e;
        
        for (var i = 100; i <= 200; i+=100)
        {
	e = createEnemy6(i);
	move011(e);
	spellCard017(e);	
	level.addEnemy(e);
        }
        
        for (var i = 500; i <= 600; i+=100)
        {
	e = createEnemy7(i);
	move012(e);
	spellCard017(e);
	level.addEnemy(e);
        }
        
        for (var i = 700; i <= 900; i+=100)
        {
	e = createEnemy6(i);
	move011a(e);
	spellCard018(e);
	level.addEnemy(e);
        }
       
        for (var i = 900; i <= 1100; i+=100)
        {
	e = createEnemy7(i);
	move012b(e);
	spellCard018(e);
	level.addEnemy(e);
        }
        
        for (var i = 1300; i <= 2000; i+=100)
        {
	e = createEnemy9(i);
	move001(e);
	spellCard019(e);
	level.addEnemy(e);
        }
        
        for (var i = 2200; i <= 3000; i+=200)
        {
	e = createEnemy9(i);
	move005(e);
	spellCard019b(e);
	level.addEnemy(e);
        }
        
        e = createEnemy13(3300);
        move014(e);
        spellCard020(e);        
        level.addEnemy(e);
               
        return level;
}


////////////////////////////////////////
// ENEMIES
////////////////////////////////////////

// return a level 1 enemy, spawning coords at the specified frame.
function createEnemy9(d)
{
        var e = new Enemy();
        e.level = 1;
        e.life = 15;
        e.image = img_e6;
        e.delay = d;
        return e;
}

// return a level 5 enemy, spawning at the specified frame.
function createEnemy13(d)
{
        var e = new Enemy();
        e.level = 5;
        e.life = 1600;
        e.w = 48; e.h = 64;
        e.image = img_bss3;
        e.delay = d;
        return e;
}

////////////////////////////////////////
// MOVEMENTS
////////////////////////////////////////

// enter from left, exit from right, diagonal direction
function move011(e)
{
        e.addMovement(new Movement(4, 0, bg.h/2, bg.w, bg.h/2-100));
}

function move012(e)
{
        e.addMovement(new Movement(4, bg.w, bg.h/2, 0, bg.h-100));
}

// enter from left, exit from right, diagonal direction but a bit higher
function move011a(e)
{
        e.addMovement(new Movement(4, 0, bg.h-600, bg.w, bg.h-100));
}

function move012b(e)
{
e.addMovement(new Movement(4, bg.w, bg.h-600, 0, bg.h-100));
}

// enter from top, do an X shape, exit from top, random position
function move013(e)
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

// Boss Pattern 3: enter from top, large looping triangle
function move014(e)
{
        e.addMovement(new Movement(1, bg.w/2, 0, bg.w/2, 50));
        
        e.addLoopingMovement(new Movement(1, 0, 0, bg.w/2-200, 100));
        e.addLoopingMovement(new Movement(1, 0, 0, bg.w/2+200, 100));
        e.addLoopingMovement(new Movement(1, 0, 0, bg.w/2, 450));
}

////////////////////////////////////////
// SPELLCARDS
////////////////////////////////////////

// homing, 3 small shots
function spellCard017(e)
{
        
        var s = new SpellCard();
        s.ts = 50;
        
        var coords = getCircle();
        
        for (var i = 0; i < coords.length; i++)
        {
	var b1 = new EnemyBullet();
	b1.image = img_b8h;
	b1.delay = 10;
	b1.homing = 1;
	b1.addMovement(new Movement(4, 0, 0, coords[i].x, coords[i].y*10));
	s.addBullet(b1);
        }
        
        e.spellcard = s;
}

// homing, 10 small shots
function spellCard019b(e)
{
        var s = new SpellCard();
        s.ts = 200;
        
        for (var i = 0; i < 20; i++)
        {
	var b1 = new EnemyBullet();
	b1.image = img_b8g;
	b1.delay = 10;
	b1.homing = 1;
	b1.addMovement(new Movement(4, 0, 0, -100, pg.movement.cy));
	
	s.addBullet(b1);
	
	var b2 = new EnemyBullet();
	b2.image = img_b8g;
	b2.delay = 20;
	b2.homing = 1;
	b2.addMovement(new Movement(6, 0, 0, +100, pg.movement.cy));
	s.addBullet(b2);
        }
        
        e.spellcard = s;
}

// homing, cloud of bullets, largely spread
function spellCard019(e)
{
        var s = new SpellCard();
        s.ts = 80;
        
        for (var i = 0; i < 10; i++)
        {
	var b1 = new EnemyBullet();
	b1.image = img_b8d;
	b1.delay = i;
	b1.homing = 1;
	b1.addMovement(new Movement(2, rand(-200,200), rand(-100,100), 0, 0));
	s.addBullet(b1);
	
	var b2 = new EnemyBullet();
	b2.image = img_b8c;
	b2.delay = i+10;
	b2.homing = 1;
	b2.addMovement(new Movement(3, rand(-250, 250), rand(-400, 400), 0, 0));
	s.addBullet(b2);
	
	
        }
        
        e.spellcard = s;
}

// single circle curtain
function spellCard018(e)
{
        var s = new SpellCard();
        
        var coords = getCircle();
        for (var i = 0; i < coords.length; i++)
        {
	var b1 = new EnemyBullet();
	b1.image = img_b16b;
	b1.delay = 50;
	b1.homing = 1;
	b1.addMovement(new Movement(2, 0, 0, coords[i].x, bg.h));
	s.addBullet(b1);
	
	var b2 = new EnemyBullet();
	b2.image = img_b8c;
	b2.delay = 60;
	b2.homing = 1;
	b2.addMovement(new Movement(4, 0, 0, coords[i].x, coords[i].y));
	s.addBullet(b2);
        }
        
        e.spellcard = s;
}

// spiralling circle curtain + random big bullets
function spellCard020(e)
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
	
	var b2 = new EnemyBullet();
	b2.image = img_b8h;
	b2.delay = 105;
	b2.addMovement(new Movement(2, 0, 0, coords[i].x, coords[i].y));
	s.addBullet(b2);
	
	var b2 = new EnemyBullet();
	b2.image = img_b8c;
	b2.delay = 110;
	b2.addMovement(new Movement(2, 0, 0, coords[i].x, coords[i].y));
	s.addBullet(b2);
	
	var b2 = new EnemyBullet();
	b2.image = img_b16b;
	b2.delay = 115;
	b2.addMovement(new Movement(2, 0, 0, coords[i].x, coords[i].y));
	s.addBullet(b2);
        }
        
        for (var j = 0; j < 15; j++)
        {
	var b3 = new EnemyBullet();
	
	b3.image = img_b8d;
	b3.delay = 10+(j*5);
	b3.homing = 1;
	b3.addMovement(new Movement(10, rand(-40,20), rand(-20,20), rand(-40,20), rand(-20,20)));
	s.addBullet(b3);
	
	var b4 = new EnemyBullet();
	b4.w = 16; b2.h = 16;
	b4.image = img_b16c;
	b4.delay = 10;
	b4.homing = 1;
	b4.addMovement(new Movement(15-j, 0, 0, 0, 0));
	s.addBullet(b4);
        }
        
        e.spellcard = s;
}