var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);
$(document).keydown(capturaTeclado2);
function inicio(){
	jugando = true;
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");
	watergirl = new Personajes(25,460,"water",3);
	fireboy = new Personajes(580,25,"fire",2);
	h= new Llegada(570,240);

	run();	
	
	$('#instrucciones').click(function(){
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });
    
    $('#close').click(function(){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
    
    $("#iniciar").click(function(){	
		if(jugando==false)
			inicio();	
	});
}

function capturaTeclado(event){
	if(event.which==38 )
		watergirl.actualizar('arriba');
	if(event.which==40)
		watergirl.actualizar('abajo');
	if(event.which==39)
		watergirl.actualizar('derecha');
	if(event.which==37)
		watergirl.actualizar('izquierda');
	
}

function capturaTeclado2(event){
	if(event.which==87)
		fireboy.actualizar('arriba');
	if(event.which==83)
		fireboy.actualizar('abajo');
	if( event.which==68)
		fireboy.actualizar('derecha');
	if(event.which==65)
		fireboy.actualizar('izquierda');
	
}

function run(){ 
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");
		 
	if(jugando){
		if(watergirl.ganar>=0||fireboy.llegar>=0){
			contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
			watergirl.dibujar(contextoBuffer,true);
			fireboy.dibujar(contextoBuffer,true);
			h.dibujar(contextoBuffer);
			if(watergirl.colision(h.x,h.y)){
				watergirl.ganar--;
			}
			if(fireboy.colision(h.x,h.y)){
				fireboy.llegar--;
			}
		}else{
			jugando=false;
		}

		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
			
	}else{
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
		contextoBuffer.fillStyle = "#ffffff";
		h.dibujar(contextoBuffer);
		contextoBuffer.font = "50px sans-serif";
		contextoBuffer.fillText("Gano", 300, 440);
		contextoBuffer.fillStyle = "#ff0000";
		contextoBuffer.font = "15px sans-serif";
		contextoBuffer.fillText("try again", 550, 460);
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
	}	
}


