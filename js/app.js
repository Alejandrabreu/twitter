function add() {
var comments = document.getElementById("msj").value;
	document.getElementById("msj").value ="";
var msj = document.createElement("div");
var cont = document.getElementById("cont");

var nodoText=document.createTextNode(comments);
	

	msj.appendChild(nodoText);
	cont.appendChild(msj);

}

function desactivar(){
	
}

function contar() { 
         var max = "140"; 
         var cadena = document.getElementById("msj").value; 
         var longitud = cadena.length; 

             if(longitud <= max) { 
                  document.getElementById("contador").value = max-longitud; 
             } else if (logitud >=120){
             	contador.style.color = red;
             } else if (logitud >=130){
             	contador.style.color = blue;
             } else { 
                  document.getElementById("msj").value = cadena.substr(0, max);
             }
    }
   