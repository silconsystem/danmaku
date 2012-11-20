
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
	

	
function startMusic()
{
	var songToPlay = currentLevel;
	if (currentLevel == 4) {
		songToPlay = 5;
	}
	backgroundMusic[songToPlay].play();
}

function stopAllMusic()
{
	for (var i=1;i<backgroundMusic.length;i++) {
		backgroundMusic[i].pause();
	}
}

function stopMusic()
{
	var songToStop = currentLevel;
	if (currentLevel == 4) {
		songToStop = 5;
	}
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
		if (sfxtype == "playershot") {
			snd_shot[number].play();
		}
		if (sfxtype == "homingenemyshot") {
			if (number == 1) {		
				snd_enemyshot[3].play();
			}
			else if (number == 2) {
				snd_enemyshot[4].play();
			}
			else if (number == 3 || number == 4) {
				snd_enemyshot[7].play();
			}
			else if (number == 5) {
				snd_enemyshot[8].play();
			}
		}
		if (sfxtype == "enemyshot") {
			if (number == 1) {
				snd_enemyshot[1].play();			        
			}
			else if (number == 2 || number == 5)  {
				snd_enemyshot[2].play();
			}
			else if (number == 3) {
				snd_enemyshot[5].play();
			}
			else if (number == 4) {
				snd_enemyshot[6].play();
			}
		}
		if (sfxtype == "explosion") {
			snd_explode[0].play();
		}
		if (sfxtype == "powerup") {
			snd_item[number].play();
		}
	}
	
}