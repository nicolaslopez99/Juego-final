function Personajes(cax,cay,saber,spr){
	this.x = cax;
	this.y = cay;
	this.img1 = [$("#abajo1")[0],$("#arriba1")[0],$("#izquierda1")[0],$("#derecha1")[0]];
	this.img = [$("#abajo")[0],$("#arriba")[0],$("#izquierda")[0],$("#derecha")[0]];
	this.sprite = spr;
	this.d = saber;
	
	this.dibujar = function(ctx){
		var saber = this.d
		if( saber == "water"){
			var img = this.img[this.sprite];
		} else {
			var img = this.img1[this.sprite];
		}
		var x = this.x;
		var y = this.y;
		ctx.drawImage(img, x, y);
		ctx.save();
		ctx.fillStyle = "#ffffff";
		ctx.font = "12px sans-serif";
		ctx.restore();
	}
	
	this.actualizar = function(accion){
		if(accion=="arriba" && this.y > 25){
			this.y -= 20;
			this.sprite = 1;
		}
		if(accion=="abajo"  && this.y < 450){
			this.y += 20;
			this.sprite = 0;
		}
		if(accion=="izquierda" && this.x>32){
			this.x -= 20;
			this.sprite = 2;
		}
		if(accion=="derecha" && this.x<573){
			this.x += 20;
			this.sprite = 3;
		}

	}
}