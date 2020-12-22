function navdesp(nombre, velocidad){
	function altura(){
		 var alturaVent=window.innerHeight;
		 return alturaVent;		 
	}

	function ancho(){
		var anchoVent=window.innerWidth;
		 return anchoVent;	
	}

	function desplegar(){
		var elemento=document.getElementById(nombre);
		var primerli=elemento.getElementsByTagName("li")[0];
		elemento.style.height=60+"px";
		elemento.style.overflow="hidden";
		elemento.style.width=ancho()+"px";
		elemento.style.transition="height"+velocidad+"s";

		primerli.addEventListener("click",function(){
			if(elemento.style.height!=60+"px"){
				elemento.style.height=60+"px";
			}
			else{
				elemento.style.height=altura()+"px";
			}
		});
	}
	return desplegar();
}