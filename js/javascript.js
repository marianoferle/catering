function disableselect(e){return false}
function reEnable(){return true}
document.onselectstart=new Function ("return false")
if (window.sidebar){document.onmousedown=disableselect;document.onclick=reEnable;}


//----------------SONIDO--------------------------------
var audi=5;
var pau=false;


function antt(){
	var audio = document.getElementById('player');
	if(audi==1){
	document.getElementById('au_mp3').src ='sonidos/sonido5.mp3';
	document.getElementById('au_ogg').src ='sonidos/sonido5.ogg';
	document.getElementById("tem_a").innerHTML = '5';
    audi=5;
	audio.load();
	if(pau==false){ audio.play(); }
	}else	
	if(audi==2){
	document.getElementById('au_mp3').src ='sonidos/sonido1.mp3';
	document.getElementById('au_ogg').src ='sonidos/sonido1.ogg';
	document.getElementById("tem_a").innerHTML = '1';
    audi=1;
	audio.load();
	if(pau==false){ audio.play(); }
	}else
	if(audi==3){
	document.getElementById('au_mp3').src ='sonidos/sonido2.mp3';
	document.getElementById('au_ogg').src ='sonidos/sonido2.ogg';
	document.getElementById("tem_a").innerHTML = '2';
    audi=2;
	audio.load();
	if(pau==false){ audio.play(); }
	}else
	if(audi==4){
	document.getElementById('au_mp3').src ='sonidos/sonido3.mp3';
	document.getElementById('au_ogg').src ='sonidos/sonido3.ogg';
	document.getElementById("tem_a").innerHTML = '3';
    audi=3;
	audio.load();
	if(pau==false){ audio.play(); }
	}else
	if(audi==5){
	document.getElementById('au_mp3').src ='sonidos/sonido4.mp3';
	document.getElementById('au_ogg').src ='sonidos/sonido4.ogg';
	document.getElementById("tem_a").innerHTML = '4';
    audi=4;
	audio.load();
	if(pau==false){ audio.play(); }
	}
}

function sigo(){
	var audio2 = document.getElementById('player');
	if(audi==1){
	document.getElementById('au_mp3').src ='sonidos/sonido2.mp3';
	document.getElementById('au_ogg').src ='sonidos/sonido2.ogg';
    document.getElementById("tem_a").innerHTML = '2';
    audi=2;
	audio2.load();
	if(pau==false){ audio2.play(); }
	}else		
	if(audi==2){
	document.getElementById('au_mp3').src ='sonidos/sonido3.mp3';
	document.getElementById('au_ogg').src ='sonidos/sonido3.ogg';
	document.getElementById("tem_a").innerHTML = '3';
    audi=3;
	audio2.load();
	if(pau==false){ audio2.play(); }
	}else
	if(audi==3){
	document.getElementById('au_mp3').src ='sonidos/sonido4.mp3';
	document.getElementById('au_ogg').src ='sonidos/sonido4.ogg';
	document.getElementById("tem_a").innerHTML = '4';
    audi=4;
	audio2.load();
	if(pau==false){ audio2.play(); }
	}else
	if(audi==4){
	document.getElementById('au_mp3').src ='sonidos/sonido5.mp3';
	document.getElementById('au_ogg').src ='sonidos/sonido5.ogg';
	document.getElementById("tem_a").innerHTML = '5';
    audi=5;
	audio2.load();
	if(pau==false){ audio2.play(); }
	}else
	if(audi==5){
	document.getElementById('au_mp3').src ='sonidos/sonido1.mp3';
	document.getElementById('au_ogg').src ='sonidos/sonido1.ogg';
	document.getElementById("tem_a").innerHTML = '1';
    audi=1;
	audio2.load();
	if(pau==false){ audio2.play(); }
	}
}

function playy(){
	pau=false;
	document.getElementById('player').play();
}

function pauss(){
	pau=true;
	document.getElementById('player').pause();
}


function stopp_v(){
	stopp=true;
	document.getElementById('videoo').pause();
}

function playy_v(){
	stopp=false;
	document.getElementById('videoo').play();
}






