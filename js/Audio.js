
var backgroundMusic = [];
var snd_shot = [];
var snd_enemyshot = [];
var snd_item = [];
var snd_select = [];
var snd_explode = [];

// Load background Music
for (var i=1;i<=5;i++) {
	backgroundMusic[i] = new Audio("audio/bgm_st" + i + ".mp3");
}

// Load in SFX:
for (var i=1;i<=3;i++) {
	snd_shot[i] = new Audio("audio/shot" + i + ".mp3");
}

for (var i=0;i<=8;i++) {
	snd_enemyshot[i] = new Audio("audio/e_shot" + i + ".mp3");
}

for (var i=1;i<=2;i++) {
	snd_item[i] = new Audio("audio/item" + i + ".mp3");
}

snd_select[0] = new Audio("audio/select.mp3"),
snd_explode[0] = new Audio("audio/explode.mp3");
	
function currentSongNumber()
{
	var songToPlay = currentLevel;
	if (currentLevel == 4) {
		songToPlay = 5;
	}
	return songToPlay;
}
	
function startMusic()
{
	var songToPlay = currentSongNumber();
	
	var vol = document.getElementById("MusicVolume").value;
	backgroundMusic[songToPlay].volume = vol;

	backgroundMusic[songToPlay].play();
}

function ChangeMusicVolume(vol) 
{
	var songToPlay = currentSongNumber();
	backgroundMusic[songToPlay].volume = vol;
}

function stopAllMusic()
{
	for (var i=1;i<backgroundMusic.length;i++) {
		backgroundMusic[i].pause();
	}
}

function stopMusic()
{
	var songToStop = currentSongNumber();
	backgroundMusic[songToStop].pause();
}

function toggleMusic()
{
	if (document.getElementById('box7').checked) {
		startMusic();
	}
	else {
		stopMusic();
	}
}


function playSfx(sfxtype, number)
{
	if (document.getElementById('box8').checked) {
	
		var soundToPlay;
		
		if (sfxtype == "playershot") {
			soundToPlay = snd_shot[number];
		}
		else if (sfxtype == "homingenemyshot") {
			if (number == 1) {		
				soundToPlay = snd_enemyshot[3];
			}
			else if (number == 2) {
				soundToPlay = snd_enemyshot[4];
			}
			else if (number == 3 || number == 4) {
				soundToPlay = snd_enemyshot[7];
			}
			else if (number == 5) {
				soundToPlay = snd_enemyshot[8];
			}
		}
		else if (sfxtype == "enemyshot") {
			if (number == 1) {
				soundToPlay = snd_enemyshot[1];			        
			}
			else if (number == 2 || number == 5)  {
				soundToPlay = snd_enemyshot[2];
			}
			else if (number == 3) {
				soundToPlay = snd_enemyshot[5];
			}
			else if (number == 4) {
				soundToPlay = snd_enemyshot[6];
			}
		}
		else if (sfxtype == "explosion") {
			soundToPlay = snd_explode[0];
		}
		else if (sfxtype == "powerup") {
			soundToPlay = snd_item[number];
		}
		
		if (soundToPlay) {
			var vol = document.getElementById("SfxVolume").value;
			soundToPlay.volume = vol;
			soundToPlay.play();
		}
	}
	
}