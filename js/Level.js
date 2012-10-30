/*
 * Level.js
 * Represents a level as an array of enemies.
 * 
 * Copyright (c) Sako 2010 - zomgsako@gmail.com
 * Freely redistributable and editable.
*/
function Level()
{	
	this.enemies = []; // enemy array
	
	this.cs = 0; // current frame
	
	this.ts = 4500;
	
	this.finished = 0; // if 1, level is completed
}

Level.prototype.addEnemy = function(e)
{
	this.enemies[this.enemies.length] = e;
}

// returns an array of enemies that must be spawned in the current frame.
Level.prototype.spawn = function(e)
{
	if (this.cs == this.ts)
	{
		this.finished = 1;
		return [];
	}
	else
	{
		this.finished = 0;
	}
	
	var spawned = [];
	for (var i = 0; i < this.enemies.length; i++)
	{
		var e = this.enemies[i];
		
		// check if enemy must be spawned in the current frame
		if (e.delay == this.cs)
		{
			spawned[spawned.length] = e;
			this.enemies.splice(i,1);
		}
	}
	this.cs++;
  
	return spawned;
}
