

<div class="fijo">
<img src="imagenes/fondo/fondo1.jpg" class="f_01 fijo fond no_mostrar"/>
<img src="imagenes/fondo/fondo2.jpg" class="f_02 fijo fond no_mostrar"/>
<img src="imagenes/fondo/fondo3.jpg" class="f_03 fijo fond no_mostrar"/>
<img src="imagenes/fondo/fondo4.jpg" class="f_04 fijo fond no_mostrar"/>
</div>

<div id="loader_gif"><img id="l_gif" src="imagenes/loading.gif" alt="loading"/></div>

<div id="control_player"><ul>
<li id="botant" onclick="antt();"></li>
<li id="tem_a"></li>
<li id="botsig" onclick="sigo();"></li>
<li id="play1"><img src="imagenes/pause.png" onclick="playy();" alt="play"/></li>
<li id="pause1"><img src="imagenes/play.png" onclick="pauss();" alt="pause"/></li>
</ul></div>

<audio id="player" loop>
<source src="sonidos/sonido1.mp3" id="au_mp3" type="audio/mp3" />
<source src="sonidos/sonido1.ogg" id="au_ogg" type="audio/ogg" />
</audio>



<video id="videoo" controls="controls">
  <source src="imagenes/videos/unperu.webm" type='video/webm'>
  <source src="imagenes/videos/unperu.mp4"  type='video/mp4'>
  <source src="imagenes/videos/unperu.ogv"  type='video/ogg'>
 <p>su navegador no soporta - video - HTML5</p>
</video>
<div id="vid_w"></div>





</div>
</body>
</html>
