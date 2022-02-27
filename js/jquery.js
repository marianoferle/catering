
var v_alto = $(window).height();
var v_largo = $(window).width();
var v_emp = $('#empresa').height();

var navv=41;
var empp=180;
var servv=200;
var ne=navv+empp;
var nes=navv+empp+servv;
var med_alto=v_alto-navv;
var med_alto2=v_alto-ne;
var med_alto3=v_alto-nes;

var mh_l=v_alto/2;
var med_1=mh_l-160;
var med_2=mh_l-250;
var mw_l=v_largo/2;
var vid_w=v_largo-800;
var vid_h=v_alto-490;
var vid_w2=vid_w/2;
var vid_h2=vid_h/2;

var b_emp=false;
var b_sec=false;

var fs=false;
var bot_v=false;
var vl,va;



 //PRIMERO-------------------------------------
function primero(){
	 v_alto = $(window).height();
     v_largo = $(window).width(); 
if(med_alto<=490){
	 med_alto=490;
	 med_alto2=310;
	 med_alto3=110;  
	 $('#centro').css({'height':490});
	 $('#sec_todo').css({'height':navv});
	 $('#indexx').css({'height':531});
	 $('#arriva').css({'bottom':190});
	 $('#abajo').css({'bottom':170});
	 $('#medio_logo').css({'top':med_1+170});
	 $('#logg').css({'top':med_1});
	 $('#ingresarr').css({'top':mh_l+100});
	 $('#twi_t').css({'top':med_alto3-30});
	 $('#bot_video').css({'top':med_alto3-45});
	 $('#videoo').css({'top':0});
	 $('#arriva').css({'top':200});
	 $('#abajo').css({'top':220});
}else if(med_alto>490){
	 $('#centro').css({'height':med_alto});	                           // Altura comienzo ---------
	 $('#sec_todo').css({'height':navv});
	 $('#indexx').css({'height':med_alto+41});	
	 $('#arriva').css({'bottom':330}); 
	 $('#abajo').css({'bottom':310});
	 $('#medio_logo').css({'top':med_2+170});
	 $('#logg').css({'top':med_2});
	 $('#ingresarr').css({'top':mh_l+10});
	 $('#twi_t').css({'top':med_alto3-30}); 
	 $('#bot_video').css({'top':med_alto3-45});
	 $('#videoo').css({'top':vid_h2});


}
//------------------------

if(v_largo<=1000){
 $('#indexx').css({'width':1000});	 
 $('#logg').css({'left':340});
 $('#propa').css({'left':1000-300});
 $('#abajo').css({'left':700});
 $('#arriva').css({'left':700});
 $('#ingresarr').css({'left':490});
 $('#bot_video').css({'left':100});
 $('#videoo').css({'left':120});
 $('#arriva').css({'left':720});
 $('#abajo').css({'left':720});
}else if(v_largo>1000){                                               // Ancho comienzo -----------
 $('#indexx').css({'width':'100%'});		 
 $('#logg').css({'left':mw_l-195});
 $('#ingresarr').css({'left':mw_l-50});
 $('#propa').css({'left':v_largo-300});
 $('#bot_video').css({'left':120});
 $('#videoo').css({'left':vid_w2});
}
}


 //ACTION1------------------------------------------
function action1(){	
		  $('#medio_logo').fadeOut(500);
		  $('#logg').fadeOut(500);
		  $('#logo_chico').fadeIn(500);
		  	
	      $('#centro').animate({'height':med_alto2},500);
		  $('#sec_todo').animate({'height':ne},500);      
          $('#empresa').fadeIn(50);
		  b_emp=true;		   	    
}

function cerrar1(){
	      $('#centro').animate({'height':med_alto},500);
		  $('#sec_todo').animate({'height':navv},500);
          $('#empresa').fadeOut(50);
		  b_emp=false;
		  $('#secciones').fadeOut(400);
		 
		  $('#medio_logo').fadeIn(700);
		  $('#logg').fadeIn(700);
		  $('#logo_chico').fadeOut(700);
}

function action2(){
	    $('#centro').css({'height':med_alto3});
		$('#sec_todo').css({'height':nes});             
		$('#secciones').fadeIn(800);
		$('.cos').hide();
		b_sec=true;		


		$('.bbb').css({'color':'#FFF'});
}

function cerrar3(){
	  $('#nav').hide(50);

	  $('#medio_logo').fadeIn(700);
	  $('#logg').fadeIn(700);
	  $('#logo_chico').fadeOut(700);
		  
	  $('#centro').animate({'height':med_alto},500);
	  $('#sec_todo').animate({'height':navv},500);
	  $('#secciones').fadeOut(50);
	  $('#empresa').fadeOut(50);
	  $('#nav').fadeIn(1000);
	   b_emp=false;
	   b_sec=false;
	  $('.bbb').css({'color':'#FFF'});
	   
}

//-------------------------------------
var bajarElemento = function (ul, element) {
   var posTop = $(ul).scrollTop()
   var elTop =  $(element).position().top - $(element).height();
   $(ul).animate({scrollTop: posTop + elTop},1000);
}

var subirElemento = function (ul, element) {
   var posIn = $(ul).scrollTop()
   var elIn =  $(element).position().top - $(element).height();
   $(ul).animate({scrollTop: posIn-elIn},1000);
}

$('#neww').click(function(){ 
primero();
});


//READY++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
$(document).ready(function() {


$('body').hover(function(){ 
  vl=$(window).width();
  va=$(window).height();
    if(vl!=v_largo || va!=v_alto){ primero(); }
});



var r_sup = 5;
var r_inf = 1;
var rann = Math.floor(Math.random()*(r_sup-(r_inf-1))) + r_inf;
document.getElementById('au_mp3').src = 'sonidos/sonido'+rann+'.mp3';
document.getElementById('au_ogg').src = 'sonidos/sonido'+rann+'.ogg';
document.getElementById("tem_a").innerHTML = rann;
document.getElementById('player').play();

$('#pause1').click(function(){
$('#play1').css({'display':'block'});	
$('#pause1').css({'display':'none'}); 
});
$('#play1').click(function(){
$('#play1').css({'display':'none'});	
$('#pause1').css({'display':'block'}); 
});
//INGRESAR -----------------------------
$('#ingresarr').fadeIn(1000);
$('#ingresarr').click(function(){ 
  $('#medio_logo').fadeIn(800);
  $('#indexx').fadeOut(1000);
  $('#ingresarr').fadeOut(1000);
  $('#nav').fadeIn(500);
});

//FUNCTION PRIMERO -----------------------------
primero();

//NAV 1 ABRE Y CIERRA ---------------
$('#nav').hover(function(){ if(b_emp==false){ action1(); } });  //seccion 1  abre 
$('#centro').click(function(){  if(b_emp==true && b_sec==false){ cerrar1();} if(b_emp==true && b_sec==true){ cerrar3();  } });  //seccion 1 cierra 

//SALIR AL INDEX -----------------------
$('#salirr').click(function(){ 
  $('#medio_logo').fadeOut(500);
  $('#indexx').fadeIn(500);
});

//TEXTO STAFF --------------------------
$('#arriva').click(function () { subirElemento('#info_staff', this); });  
$('#abajo').click(function () { bajarElemento('#info_staff', this); });

//GALERIA -----------------------------
$('#galeri').css({'width':v_largo});
$('#mycarousel').jcarousel(); //Carrusel en tira 
$(".group3").colorbox({rel:'group3', transition:"none", width:"90%", height:"90%"});  //imagen FULL SCREEN---

$('#galeri2').css({'width':v_largo});
$('#mycarousel2').jcarousel(); //Carrusel en tira 
$(".group4").colorbox({rel:'group4', transition:"none", width:"90%", height:"90%"});  //imagen FULL SCREEN---

//BOTONES -----------------------------
$("li#boton_0").click(function(){
action2();
$("#contenido0").fadeIn(1000);
$('#boton_0').css({'color':'#FC6'});
});

$("li#boton_1").click(function(){
action2();
$("#contenido1").fadeIn(1000);
$('#boton_1').css({'color':'#FC6'});
});

$("li#boton_2").click(function(){
action2();
$('#contenido2').fadeIn(1000);
$('#boton_2').css({'color':'#FC6'});
});

$("li#boton_3").click(function(){
action2();
$('#contenido3').fadeIn(1000);
$('#boton_3').css({'color':'#FC6'});
});


//FONDO DE PANTALLA QUE CAMBIA -------------
runIt();
function runIt() { 
$(".f_01").delay(10).fadeIn(600).delay(8000).fadeOut(600);
$(".f_02").delay(9210).fadeIn(600).delay(8000).fadeOut(600);
$(".f_03").delay(18410).fadeIn(600).delay(8000).fadeOut(600);
$(".f_04").delay(27610).fadeIn(600).delay(8000).fadeOut(600, runIt);
}


//ENVIAR FORMULARIO -------------------------
$('#fo3').submit(function(){ 
event.preventDefault(); 
var url = $(this).attr('action');
var datos = $(this).serialize();
$.ajax({
				  type: 'POST',
				  url: url,
				  data: datos,
				  beforeSend: mostrarLoader, 
				  success: mostrarRespuesta 
});
 
}); 


var ao=med_alto3-125;
$('#face_s').css({'top':ao});


$('#bot_video').click(function(){
if(bot_v==false){
$('#vid_w').css({'display':'block'});
$('#videoo').css({'display':'block'});
bot_v=true;
pauss();
playy_v();
}
});

$('#vid_w').click(function(){
if(bot_v==true){
$('#vid_w').css({'display':'none'});
$('#videoo').css({'display':'none'});
bot_v=false;
stopp_v();
playy();
}
});


}); // funcion Ready ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function mostrarLoader(){
 $('#loader_gif').fadeIn("slow");
}; 
function mostrarRespuesta (responseText){
$("#loader_gif").fadeOut("slow"); 
$("#ajax_loader").append("<br>Mensaje: "+responseText);
};



	