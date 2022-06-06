comprobarBD();
comprobarBDComunidad();

function comprobarBDComunidad(){
    if(localStorage.getItem("rutinasComunidad")==null){
        var rutinas = new Map();

        var Ejercicios1 = new Map();
        var ejercicio1 = {
            id: "idEjercicioComunidad1",
            Nombre: "Ejercicio de flexiones para el pecho",
            Descripcion: ""
        }
        Ejercicios1.set("idEjercicioComunidad1", ejercicio1);
        rutinaComunidad1={
            Titulo: "Rutina de pecho/espalda",
            Ejercicios: JSON.stringify(Array.from(Ejercicios1))
        }

        rutinas.set("adrutinas1", rutinaComunidad1);

        var Ejercicios2= new Map();
        var ejercicio2 = {
            id: "idEjercicioComunidad2",
            Nombre: "Ejercicio de abdominales",
            Descripcion: ""
        }
        Ejercicios2.set("idEjercicioComunidad2", ejercicio2);
        rutinaComunidad2={
            Titulo: "Rutina completa de 20 mins",
            Ejercicios: JSON.stringify(Array.from(Ejercicios2))
        }

        rutinas.set("adrutinas2", rutinaComunidad2);

        localStorage.setItem("rutinasComunidad", JSON.stringify(Array.from(rutinas)));
    }
}

function addRutina(elem){
    rutinasBD = new Map(JSON.parse(localStorage.getItem("rutinas")));
    rutinasComunidad = new Map(JSON.parse(localStorage.getItem("rutinasComunidad")));

    console.log(elem.getAttribute("id"));

    value = rutinasComunidad.get(elem.getAttribute("id"));

    index = parseInt(localStorage.getItem("nuevoIndex"), 10);
    idRutina = "rutinaId"+index;
    localStorage.setItem("nuevoIndex", index+1);

    rutinasBD.set(idRutina, value);
    localStorage.setItem("rutinas", JSON.stringify(Array.from(rutinasBD)));
    AlertAdd();
}

function AlertAdd() {
    Swal.fire({
        title: 'Añadir Rutina',
        icon: 'success',
        text: 'Rutina añadida exitosamente',
        width: '25%',
        showCancelButton: false,
        autoHeight: true,
        position: 'top',
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,

    })
}