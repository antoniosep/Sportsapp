var idRutina = localStorage.getItem("idRutina");

rutinasBD = new Map(JSON.parse(localStorage.getItem("rutinas")))

var rutina = rutinasBD.getItem(idRutina);

var Titulo = document.querySelector("#nombreRutina");
Titulo.textContent = "Ejercicios de la rutina "+rutina["Titulo"];

function mostrarEjercicios(){
    
}