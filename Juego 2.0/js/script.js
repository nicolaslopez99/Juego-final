var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);
$(document).keydown(capturaTeclado2);
function inicio(){
	jugando = true;
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");
	watergirl = new Personajes(45,453,"water",3);
	fireboy = new Personajes(550,35,"fire",2);

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
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);

		watergirl.dibujar(contextoBuffer);
		fireboy.dibujar(contextoBuffer);

		
		if(watergirl.vida <= 0)
			jugando = false;
		if(fireboy.vida <= 0)
			jugando = false;
		
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
		
	}else{
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
		contextoBuffer.fillStyle = "#ffffff";
		watergirl.sprite = 3;
		watergirl.vida = 0;
		fireboy.sprite=3;
		fireboy.vida=0;
		watergirl.dibujar(contextoBuffer);
		fireboy.dibujar(contextoBuffer);
		contextoBuffer.font = "50px sans-serif";
		contextoBuffer.fillText("GAMEOVER", 300, 440);
		contextoBuffer.fillStyle = "#ff0000";
		contextoBuffer.font = "15px sans-serif";
		contextoBuffer.fillText("try again", 550, 460);
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
	}
	
}


