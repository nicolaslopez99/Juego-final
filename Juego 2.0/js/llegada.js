function Llegada(cax,cay){
	this.x = cax;
	this.y = cay;
	this.img = [$("#llegada")[0]];
	this.sprite = 0;
	this.llegar=0;
	
	this.dibujar = function(ctx){
		var img = this.img[this.sprite];
		
		var x = this.x;
		var y = this.y;
		ctx.drawImage(img, x, y);
		ctx.save();
		ctx.fillStyle = "#ffffff";
		ctx.restore();
	}
}