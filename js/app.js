// función d+para agregar tuit.
function add() {
var comments = document.getElementById("msj").value;
	document.getElementById("msj").value ="";
var msj = document.createElement("div");
var cont = document.getElementById("cont");
var textoNuevo = document.createElement("p")
var nodoText=document.createTextNode(comments);
// fecha y hora del tuit.
var spanName = document.createElement("span");
var spanData = document.createElement("span");
spanName.textContent = "@Ale14Abreu";
spanData.textContent = new Date().toTimeString();
// los padres y sus hijos.
msj.appendChild(nodoText);
msj.appendChild(spanName);
msj.appendChild(spanData);
msj.appendChild(textoNuevo);
cont.appendChild(msj)

}
// dinamismo de altura en el textearea donde va el tuit escrito
var msj = document.querySelector('textarea');
msj.addEventListener('keydown', autosize);    
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // para el tamaño de caja que no sea el uso del "cuadro de contenido": 
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
// conteo de catacteres
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
   //finito.