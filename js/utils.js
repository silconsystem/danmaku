////////////////////////////////////////
// UTILITIES
////////////////////////////////////////

// returns the coordinates of 18 equidistant points on a circumference
// centered in 0,0 with radius of 500
function getCircle()
{
        var coords = [];

        var rr = 500;
        for (var xx = 0; xx < rr*2; xx+=50)
        {
	var nx = Math.cos(Math.PI*(xx/(rr*2)))*rr;
	var ny = Math.sqrt(Math.pow(rr,2)-Math.pow(nx,2));
	coords[coords.length] = {x: nx, y: ny};
        }
        for (var xx = rr*2; xx > 0; xx-=50)
        {
	var nx = Math.cos(Math.PI*(xx/(rr*2)))*rr;
	var ny = Math.sqrt(Math.pow(rr,2)-Math.pow(nx,2));
	coords[coords.length] = {x: nx, y: -ny};
        }

        return coords;
}

function getDenseCircle()
{

        var coords = [];

        var rr = 600;
        for (var xx = 0; xx < rr*2; xx+=100)
        {
	var nx = Math.cos(Math.PI*(xx/(rr*2)))*rr;
	var ny = Math.sqrt(Math.pow(rr,2)-Math.pow(nx,2));
	coords[coords.length] = {x: nx, y: ny};
        }
        for (var xx = rr*2; xx > 0; xx-=80)
        {
	var nx = Math.cos(Math.PI*(xx/(rr*2)))*rr;
	var ny = Math.sqrt(Math.pow(rr,2)-Math.pow(nx,2));
	coords[coords.length] = {x: nx, y: -ny};
        }

        return coords;
}