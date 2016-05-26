$(document).on('deviceready', 
	function() {
	var canvas = document.getElementById('canvas');
	var amplada_pantalla = screen.width ;
	var alcada_pantalla = screen.height ;
	var amplada_pantalla_CSS = window.innerWidth ;
	var alcada_pantalla_CSS = window.innerHeight ;
	
	var ctx = canvas.getContext('2d');
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	
	$(window).resize(girardis);
	
	//listeners
	document.addEventListener("offline", offline,false);
	document.addEventListener('touchstart', touchstart, false);
	document.addEventListener('touchmove', movetouch, false);

	//funcs
	function girardis()
	{
		ctx.canvas.width  = window.innerHeight;
		ctx.canvas.height = window.innerWidth;
	}
	
	function offline()
	{
		alert("offline");
		
	}
	
	function touchstart(event)
	{
		for(var i = 0; i < event.touches.length; i++)
		{
			clickX[i] = event.touches[i].pageX;
			clickY[i] = event.touches[i].pageY;
		}
		//dibuixar triangle a X:Y
	triangle(clickX[i],clickY[i]);
	}
	
	function movetouch(event)
	{
		for(var i = 0; i < event.touches.length; i++)
		{
			clickX[i] = event.touches[i].pageX;
			clickY[i] = event.touches[i].pageY;
		}
		//moure triangle a X:Y
		triangle(clickX[i],clickY[i]);
	}
	
	function triangle(eixx,eixy)
	{
		var canvas = document.getElementById('canvas');   
			if (canvas.getContext){	
				var ctx = canvas.getContext('2d');
				var amplada_rect = amplada_pantalla_CSS  - 20 ;
				var alcada_rect = alcada_pantalla_CSS - 20 ;
				roundedRect(ctx,eixx,eixy,amplada_rect,alcada_rect,10);
				var img = new Image();
				var centre_x = amplada_pantalla_CSS / 2 ;
				var centre_y = alcada_pantalla_CSS / 2 ;
				var mida_x_bola = amplada_pantalla_CSS * ( 10 / 100 ) ;
				var mida_y_bola = mida_x_bola ;
				var posicio_x_bola = centre_x - ( mida_x_bola / 2 ) ;
				var posicio_y_bola = centre_y - ( mida_y_bola / 2 ) ;
				img.onload = function(){ctx.drawImage(img,posicio_x_bola,posicio_y_bola,mida_x_bola,mida_y_bola);};
				img.src = 'img/myImage.png';
				for (i = 0; i < 20; i++)
				{
					sleep(200);
					ctx.clearRect(posicio_x_bola,posicio_y_bola,mida_x_bola,mida_y_bola );
					ctx.drawImage(img,posicio_x_bola+5,posicio_y_bola,mida_x_bola,mida_y_bola);
			}
		}
	}
	
	function roundedRect(ctx,x,y,width,height,radius)
	{
		ctx.beginPath();
		ctx.moveTo(x,y+radius);
		ctx.lineTo(x,y+height-radius);
		ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
		ctx.lineTo(x+width-radius,y+height);
		ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
		ctx.lineTo(x+width,y+radius);
		ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
		ctx.lineTo(x+radius,y);
		ctx.quadraticCurveTo(x,y,x,y+radius);
		ctx.stroke();
	}
	
	function sleep(ms)
	{
		ms += new Date().getTime();
		while (new Date() < ms){}
	}
	
	}
);
