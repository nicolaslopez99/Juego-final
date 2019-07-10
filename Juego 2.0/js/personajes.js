function Personajes(cax,cay,saber,spr){
	this.x = cax;
	this.y = cay;
	this.img1 = [$("#abajo1")[0],$("#arriba1")[0],$("#izquierda1")[0],$("#derecha1")[0],$("#trans")[0]];
	this.img = [$("#abajo")[0],$("#arriba")[0],$("#izquierda")[0],$("#derecha")[0],$("#trans")[0]];
	this.sprite = spr;
	this.d = saber;
	this.llegar=7;
	this.ganar=7;
	
	this.dibujar = function(ctx,a){
		var saber = this.d
		if( saber == "water"){
			var img = this.img[this.sprite];
		} else {
			var img = this.img1[this.sprite];
		}
		var x = this.x;
		var y = this.y;
		if(a==true){
			ctx.drawImage(img, x, y);
			ctx.save();
			ctx.fillStyle = "#ffffff";
			ctx.font = "12px sans-serif";
			ctx.restore();
		} else {
		}
		
	}
	
	this.actualizar = function(accion,a){
		if(accion=="arriba" && this.y > 35){
			this.y -= 5;
			this.sprite = 1;
		}
		if(accion=="abajo"  && this.y < 450){
			this.y += 5;
			this.sprite = 0;
		}
		if(accion=="izquierda" && this.x>32){
			this.x -= 5;
			this.sprite = 2;
		}
		if(accion=="derecha" && this.x<573){
			this.x += 5;
			this.sprite = 3;
		}

	}
	this.colision = function(x,y){
		var distancia=Math.sqrt( Math.pow( (x-this.x), 2)+Math.pow( (y-this.y),2));
		if(distancia>this.img[this.sprite].width)
		   return false;
		else
		   return true;	
	}
}