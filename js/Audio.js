
// Background Music
var bgm_st1 = new Audio("audio/bgm_st1.mp3");
var bgm_st2 = new Audio("audio/bgm_st2.mp3");
var bgm_st3 = new Audio("audio/bgm_st3.mp3");
var bgm_st4 = new Audio("audio/bgm_st4.mp3");
var bgm_st5 = new Audio("audio/bgm_st5.mp3");

// SFX
var snd_shot1 = new Audio("audio/shot1.mp3"),
    snd_shot2 = new Audio("audio/shot2.mp3"),
    snd_shot3 = new Audio("audio/shot3.mp3"),
    snd_shot0 = new Audio("audio/e_shot0.mp3"),
    snd_esht1 = new Audio("audio/e_shot1.mp3"),
    snd_esht2 = new Audio("audio/e_shot2.mp3"),
    snd_esht3 = new Audio("audio/e_shot3.mp3"),
    snd_esht4 = new Audio("audio/e_shot4.mp3"),
    snd_esht5 = new Audio("audio/e_shot5.mp3"),
    snd_esht6 = new Audio("audio/e_shot6.mp3"),
    snd_esht7 = new Audio("audio/e_shot7.mp3"),
    snd_esht8 = new Audio("audio/e_shot8.mp3"),
    snd_item1 = new Audio("audio/item1.mp3"),
    snd_item2 = new Audio("audio/item2.mp3"),
    snd_selct = new Audio("audio/select.mp3"),
    snd_xpld1 = new Audio("audio/explode.mp3");
	

function startMusic()
{
	if (currentLevel == 1) {
		bgm_st1.play();
	}
	if (currentLevel == 2) {
		bgm_st2.play();
	}
	if (currentLevel == 3) {
		bgm_st3.play();
	}
	if (currentLevel == 4) {
		bgm_st5.play();
	}
}

function stopAllMusic()
{
	bgm_st1.pause();
	bgm_st2.pause();
	bgm_st3.pause();
	bgm_st5.pause();
}

function stopMusic()
{
	if (currentLevel == 1) {
		bgm_st1.pause();
	}
	if (currentLevel == 2) {
		bgm_st2.pause();
	}
	if (currentLevel == 3) {
		bgm_st3.pause();
	}
	if (currentLevel == 4) {
		bgm_st5.pause();
	}
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
			if (number == 1) {
				snd_shot1.play();
			}
			if (number == 2) {
				snd_shot2.play();
			}
			if (number == 3) {
				snd_shot3.play();
			}
		}
		if (sfxtype == "homingenemyshot") {
			if (number == 1) {		
				snd_esht3.play();
			}
			else if (number == 2) {
				snd_esht4.play();
			}
			else if (number == 3 || number == 4) {
				snd_esht7.play();
			}
			else if (number == 5) {
				snd_esht8.play();
			}
		}
		if (sfxtype == "enemyshot") {
			if (number == 1) {
				snd_esht1.play();			        
			}
			else if (number == 2) {
				snd_esht2.play();
			}
			else if (number == 3) {
				snd_esht5.play();
			}
			else if (number == 4) {
				snd_esht6.play();
			}
			else if (number == 5) {
				snd_esht2.play();
			}
		}
		if (sfxtype == "explosion") {
			snd_xpld1.play();
		}
		if (sfxtype == "powerup") {
			if (number == 1) {
				snd_item1.play();
			}
			if (number == 2) {
				snd_item2.play();
			}
		}
	}
	
}