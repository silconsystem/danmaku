/*
 * Movement.js
 * Represents a linear movement from one point to another. 
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/
function Movement(speed, start_x, start_y, end_x, end_y)
{
	this.speed = speed; // movement speed
	
	this.sx = start_x; // start x position
	this.sy = start_y; // start y position
	this.ex = end_x; // end x position
	this.ey = end_y; // end y position
	this.cx = start_x; // current x position
	this.cy = start_y; // current y position
	this.px = start_x; // previous x position
	this.py = start_y; // previous y position
	
	var xspan = this.ex - this.sx; // movement span, x axis
	var yspan = this.ey - this.sy; // movement span, y axis
	var dspan = Math.sqrt(Math.pow(xspan,2)+Math.pow(yspan,2)); // diagonal span length
	
	this.ts = dspan/this.speed; // total motion frames (distance/speed)
	this.cs = 0; // current motion frame
	this.tl = 0; // time limit (if > 0, movement will be cut to this length)
	
	this.relative = 0; // if 1, movement will start where the previous one ended
	this.loop = 0; // if 1, movements will loop until time limit
	
	this.mx = xspan/this.ts;		// movement per frame, x axis
	this.my = yspan/this.ts;		// movement per frame, y axis
	
	// movements in still life
	if (this.speed == 0)
	{
		this.mx = 0;
		this.my = 0;
	}
	
	this.finished = 0;
}

// perform a single frame movement
Movement.prototype.move = function()
{
	// save current position in previous position
	this.px = this.cx;
	this.py = this.cy;
	
	// increment current position
	this.cx += this.mx;
	this.cy += this.my;
	
	// increment frame count
	this.cs++;
	
	// check if movement is finished
	if (this.cs >= this.ts || (this.tl > 0 && this.cs >= this.tl))
	{
		this.finished = 1;
	}
}

// reset movement to initial values
Movement.prototype.reset = function()
{
	this.cx = this.sx;
	this.cy = this.sy;
	this.px = this.sx;
	this.py = this.sy;
	this.cs = 0;
	this.finished = 0;
}
