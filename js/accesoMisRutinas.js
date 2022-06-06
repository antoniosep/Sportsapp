function comprobarBD(){
    if(localStorage.getItem("rutinas")==null){
        var rutinas = new Map();
        localStorage.setItem("rutinas", JSON.stringify(Array.from(rutinas)));
        localStorage.setItem("nuevoIndex", 0);
    }
}

function crearRutina(titulo){
    console.log("crear");
    rutinasBD = new Map(JSON.parse(localStorage.getItem("rutinas")));
    index = parseInt(localStorage.getItem("nuevoIndex"), 10);

    var rutina = {
        Titulo: titulo,
        Ejercicios: JSON.stringify(Array.from(new Map()))
    }

    idRutina = "rutinaId"+index;
    
    rutinasBD.set(idRutina, rutina);
    localStorage.setItem("rutinas", JSON.stringify(Array.from(rutinasBD)));
    localStorage.setItem("nuevoIndex", index+1);

    return idRutina;
}

function borrarRutina(idRutina){
    rutinasBD = new Map(JSON.parse(localStorage.getItem("rutinas")));
    
    rutinasBD.delete(idRutina);

    localStorage.setItem("rutinas", JSON.stringify(Array.from(rutinasBD)));
}

function anyadirEjercicioRutina(idRutina, ejercicio){
    rutinasBD = new Map(JSON.parse(localStorage.getItem("rutinas")));

    rutina = rutinasBD.get(idRutina);
    Ejercicios = new Map(JSON.parse(rutina["Ejercicios"]))
    Ejercicios.set(ejercicio["id"], ejercicio);

    rutina["Ejercicios"] = JSON.stringify(Array.from(Ejercicios));

    rutinasBD.set(idRutina, rutina);
    localStorage.setItem("rutinas", JSON.stringify(Array.from(rutinasBD)));
}

function borrarEjercicioRutina(idRutina, ejercicioId){
    rutinasBD = new Map(JSON.parse(localStorage.getItem("rutinas")));

    rutina = rutinasBD.get(idRutina);
    Ejercicios = new Map(JSON.parse(rutina["Ejercicios"]))
    Ejercicios.delete(ejercicioId);

    rutina["Ejercicios"] = JSON.stringify(Array.from(Ejercicios));

    rutinasBD.set(idRutina, rutina);
    localStorage.setItem("rutinas", JSON.stringify(Array.from(rutinasBD)));
}
