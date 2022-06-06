actualizarEjercicios();
mostrarEjercicios();

function actualizarEjercicios() {
    var idRutina = localStorage.getItem("idRutina");

    rutinasBD = new Map(JSON.parse(localStorage.getItem("rutinas")))

    var rutina = rutinasBD.get(idRutina);

    var Titulo = document.querySelector("#nombreRutina");
    Titulo.textContent = "Ejercicios de la rutina: " + rutina["Titulo"];

    localStorage.setItem("ejercicios", rutina["Ejercicios"]);
}

function mostrarEjercicios() {
    rutinasBD = new Map(JSON.parse(localStorage.getItem("Ejercicios")));
    rutinasBD.forEach((value, key) => {
        showListRutinas(key, value["Titulo"]);
    });
}