function slider(){
	var slider=document.getElementById("slider");
	var numslides=document.getElementsByClassName("slide").length;
	var btn_sig=document.getElementsByClassName("siguiente");
	var btn_ant=document.getElementsByClassName("anterior");

	for(i=0; i<numslides-1; i++){
		function botonSiguiente(i){
			btn_sig[i].addEventListener("click",function(){
				slider.style.top=-600*(i+1)+"px";
				});
		}
		botonSiguiente(i);
	}

	for(i=1; i<numslides; i++){
		function botonAnterior(i){
			btn_ant[i].addEventListener("click",function(){
				slider.style.top= -600*(i-1)+"px";
				});
		}
		botonAnterior(i);
	}

}

slider();