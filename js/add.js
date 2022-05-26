function addItem(){

    var lista=document.getElementById("div-container");
    var texto= document.getElementById("nombre");
    var elemento=document.createElement("div");
    //elemento.setAttribute("id",texto.value);
    elemento.setAttribute("id","original");
    elemento.setAttribute("class","row mb-3");
    var elemento2=document.createElement("div");
    elemento2.setAttribute("class","col-md-3 themed-grid-col align-self-start");
    elemento.appendChild(elemento2);
    var foto=document.createElement("img");
    foto.setAttribute("src","pesas.jpg");
    foto.setAttribute("width","250");
    foto.setAttribute("height","120");
    elemento2.appendChild(foto);
    var elemento3=document.createElement("div");
    elemento3.setAttribute("class","col-md-4 themed-grid-col align-self-center");
    //elemento3.setAttribute("title",texto.value);
    //elemento3.appendChild(document.createTextNode(texto.value));
    var tDentro=document.createTextNode(texto.value);
    elemento3.appendChild(tDentro);
    elemento.appendChild(elemento3);
    var elemento4=document.createElement("div");
    elemento4.setAttribute("class","col-md-2 themed-grid-col align-self-center");
    elemento.appendChild(elemento4);
    var elemento5=document.createElement("button");
    elemento5.setAttribute("id","Ver Ejercicios Rutina");
    var tDentro2=document.createTextNode("Ver Ejercicios Rutina");
    elemento5.appendChild(tDentro2);
    elemento4.appendChild(elemento5);
    var elemento6=document.createElement("div");
    elemento6.setAttribute("class","col-md-3 themed-grid-col align-self-center");
    elemento.appendChild(elemento6);
    var elemento7=document.createElement("button");
    elemento7.setAttribute("id","Eliminar");
    elemento7.setAttribute("onclick","removeItem()");
    elemento7.setAttribute("class","btn btn-danger");
    var tDentro3=document.createTextNode("Eliminar");
    elemento7.appendChild(tDentro3);
    elemento6.appendChild(elemento7);

    //elemento.appendChild(document.createTextNode(texto.value));
    //elemento.appendChild(document.createNode());
    lista.appendChild(elemento);



}

function removeItem(){
    var lista=document.getElementById("div-container");
    var element=document.getElementById("original");
    lista.removeChild(element);


}