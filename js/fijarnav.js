function fijar(){
	var html=document.getElementsByTagName("html")[0];
	var nav=document.getElementById("navprinc");
	var tope=document.getElementById("tope");


	html.addEventListener("wheel", function(){
		var topVent=html.scrollTop;

		if(topVent>400){
			nav.style.position="fixed";
			nav.style.ZIndex="1000";
			nav.style.width="100%";
			tope.style.display="block";
			}
		else{
			nav.style.position="relative";
			tope.style.display="none";
		}

		
		
	});
}
fijar();
