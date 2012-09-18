/*
 * Sprite.js
 * Represents a sprite in the game canvas.
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/

function Sprite()
{
	this.w = 1;
	this.h = 1;
	
	this.image = null;
	this.color = 'rgba(0,0,0,255)';
	
	this.dead = 0; // if 1, sprite must be removed before next frame
	
	this.movements = []; // array of all movement objects
	this.movement = null; // current movement object
}

Sprite.prototype.addMovement = function(mov)
{
	this.movements[this.movements.length] = mov;
	
	if (this.movements.length == 1 && this.movement == null)
		this.movement = this.movements[0];
}

Sprite.prototype.addRelativeMovement = function(mov)
{
	mov.relative = 1;
	this.addMovement(mov);
}

Sprite.prototype.addLoopingMovement = function(mov)
{
	mov.relative = 1;
	mov.loop = 1;
	this.addMovement(mov);
}

// handles sprite movement
Sprite.prototype.move = function()
{
	// no more movements left, die
	if (this.movements.length == 0)
	{
		this.dead = 1;
		return;
	}
	
	// initialize movement if null
	if (this.movement == null)
	{
		this.movement = this.movements[0];
	}
	
	// movement is complete
	if (this.movement.finished == 1)
	{
		// save ending coords of movement
		var fx = this.movement.cx;
		var fy = this.movement.cy;
		
		// remove first movement (the current one) from the array
		this.movements.splice(0,1);
		
		// if loop, put it back at the end of the array
		if (this.movement.loop == 1)
		{
			this.movement.reset();
			this.movements[this.movements.length] = this.movement;
		}
			
		// read first movement from the array and use it as the current one
		if (this.movements.length > 0)
		{
			this.movement = this.movements[0];
			
			// new movement is relative, use last coordinates
			if (this.movement.relative)
			{
				var m = new Movement(this.movement.speed, fx, fy, this.movement.ex, this.movement.ey);
				m.relative = 1;
				m.loop = this.movement.loop;
				m.tl = this.movement.tl;
				this.movement = m;
			}
		}
		else
		{
			this.dead = 1;
			return;
		}
	}
		
	this.movement.move();
}

// performs checks to remove the sprite
Sprite.prototype.check = function()
{
	// check if sprite is gone outside of the screen
	if (this.movement.cx > bg.w+10 ||
	    this.movement.cy > bg.h+10 ||
	    this.movement.cx < -10 ||
	    this.movement.cy < -10)
  {
    this.dead = 1;
  }
}
  
Sprite.prototype.draw = function()
{
	if (this.image == null)
	{
		ctx.fillStyle = this.color;
		ctx.fillRect(this.movement.cx-(this.w/2), this.movement.cy-(this.h/2), this.w, this.h);
	}
	else
	{
		ctx.drawImage(this.image, this.movement.cx-(this.w/2), this.movement.cy-(this.h/2));
	}
}
 
// return active rectangular area of the sprite 
Sprite.prototype.area = function()
{
	return {
		x1: this.movement.cx-this.w/3+4, 
		y1: this.movement.cy-this.h/3, 
		x2: this.movement.cx+this.w/3-4, 
		y2: this.movement.cy+this.h/3	        
	        };
}

// lifecycle of the sprite for each frame
Sprite.prototype.work = function()
{
	this.move();
	this.check();
	this.draw();
}
