function add() {
	var comments = document.getElementById("msj").value;
	document.getElementById("msj").value ="";
	var msj = document.createElement("div");
	var cont = document.getElementById("cont");

	var nodoText=document.createTextNode(comments);
	msj.appendChild(nodoText);

	cont.appendChild(msj);
}	