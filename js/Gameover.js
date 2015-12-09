window.onload=function()
{
	var Evt = document.getElementById("dianji");
	var Gameover=document.getElementById("over");
	var Music =document.getElementById("mi1");
	Evt.onclick = function (){
		Gameover.style.display="block";
	}
	Music.onclick=function(){
		var bg_sound=document.createElement("embed");
		bg_sound.id="i_bg";
		document.body.appendChild(bg_sound);
		//bg_sound.src="1.mp3";
		bg_sound.src="1.mp3";
		i_bg.style.width=0;
		i_bg.style.height=0;
		i_bg.loop=true;
		i_bg.type="audio/mpeg";
	}
}