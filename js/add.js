
function addItem() {
    var texto = document.getElementById("nombre");
    if (texto.value != "") {
        comprobarBD();

        //AlertAddConfirmation();

        var i = crearRutina(texto.value);
        /*
        var lista = document.getElementById("div-container");
        var texto = document.getElementById("nombre");
        var elemento = document.createElement("div");
        //elemento.setAttribute("id",texto.value);
        elemento.setAttribute("id", i);
        elemento.setAttribute("class", "row mb-3");
        var elemento2 = document.createElement("div");
        elemento2.setAttribute("class", "col-md-3 themed-grid-col align-self-start");
        elemento.appendChild(elemento2);
        var foto = document.createElement("img");
        foto.setAttribute("src", "pesas.jpg");
        foto.setAttribute("width", "250");
        foto.setAttribute("height", "120");
        elemento2.appendChild(foto);
        var elemento3 = document.createElement("div");
        elemento3.setAttribute("class", "col-md-4 themed-grid-col align-self-center");
        //elemento3.setAttribute("title",texto.value);
        //elemento3.appendChild(document.createTextNode(texto.value));
        var tDentro = document.createTextNode(texto.value);
        elemento3.appendChild(tDentro);
        elemento.appendChild(elemento3);
        var elemento4 = document.createElement("div");
        elemento4.setAttribute("class", "col-md-2 themed-grid-col align-self-center");
        elemento.appendChild(elemento4);
        var elemento5 = document.createElement("button");
        elemento5.setAttribute("id", "Ver Ejercicios Rutina");
        var tDentro2 = document.createTextNode("Ver Ejercicios Rutina");
        elemento5.appendChild(tDentro2);
        elemento4.appendChild(elemento5);
        var elemento6 = document.createElement("div");
        elemento6.setAttribute("class", "col-md-3 themed-grid-col align-self-center");
        elemento.appendChild(elemento6);
        var elemento7 = document.createElement("button");
        elemento7.setAttribute("id", "Eliminar");
        elemento7.setAttribute("onclick", "removeItem()");
        elemento7.setAttribute("class", "btn btn-danger");
        var tDentro3 = document.createTextNode("Eliminar");
        elemento7.appendChild(tDentro3);
        elemento6.appendChild(elemento7);

        //elemento.appendChild(document.createTextNode(texto.value));
        //elemento.appendChild(document.createNode());*/
        var id = i;
        var lista = document.getElementById("div-container");
        var elemento = document.createElement("div");
        //elemento.setAttribute("id",texto.value);
        elemento.setAttribute("id", id);
        elemento.setAttribute("class", "card mb-3 mx-auto col-10 col-lg-8");
        var elemento2 = document.createElement("div");
        elemento2.setAttribute("class", "row g-0");
        elemento.appendChild(elemento2);
        var elemento3 = document.createElement("div");
        elemento3.setAttribute("class", "col-md-4");
        elemento2.appendChild(elemento3);

        valor = elemento.getAttribute("id");
        var foto = document.createElement("img");
        foto.setAttribute("src", "pesas.jpg");
        foto.setAttribute("class", "img-fluid rounded-start")
        //foto.setAttribute("width","230");
        //foto.setAttribute("height","120");
        foto.setAttribute("alt", "...");
        elemento3.appendChild(foto);
        var elemento4 = document.createElement("div");
        elemento4.setAttribute("class", "col-md-8");
        elemento2.appendChild(elemento4);
        var elemento5 = document.createElement("div");
        elemento5.setAttribute("class", "card-body");
        elemento4.appendChild(elemento5);
        var elemento6 = document.createElement("h5");
        elemento6.setAttribute("class", "card-title");
        elemento5.appendChild(elemento6);
        var Nombre = document.createTextNode(texto.value);
        elemento6.appendChild(Nombre);
        var elemento7 = document.createElement("p");
        elemento7.setAttribute("class", "card-text");
        var elemento8 = document.createElement("small");
        elemento8.setAttribute("class", "text-muted");
        elemento7.appendChild(elemento8);
        elemento5.appendChild(elemento7);

        var elemento11 = document.createElement("button");
        var tDentro11 = document.createTextNode("Añadir");

        elemento11.setAttribute("id", "anyadirARutina");
        elemento11.setAttribute("name", "anyadirARutina");
        elemento11.setAttribute("class", "btn btn-primary");
        elemento11.setAttribute("onclick", "anyadirARutina(this)");
        elemento11.setAttribute("style", "display: none");
        elemento11.appendChild(tDentro11);
        elemento5.appendChild(elemento11);

        var elemento9 = document.createElement("button");
        var tDentro1 = document.createTextNode("Ver Ejercicios Rutina");

        elemento9.setAttribute("id", "vejrutina");
        elemento9.setAttribute("name", "vejrutina1");
        elemento9.setAttribute("class", "btn btn-primary");
        elemento9.setAttribute("onclick", "irAEjercicios(this)");
        elemento9.appendChild(tDentro1);
        elemento5.appendChild(elemento9);
        var elemento10 = document.createElement("button");
        var tDentro2 = document.createTextNode("Eliminar");
        elemento10.setAttribute("id", "delete1");
        elemento10.setAttribute("name", "delete1");
        elemento10.setAttribute("class", "btn btn-danger");
        elemento10.setAttribute("onclick", "removeItem(this)");
        elemento10.appendChild(tDentro2);
        elemento5.appendChild(elemento10);

        lista.appendChild(elemento);

        AlertAdd()
    } else {
        AlertTextoError();
    }
}

function showListRutinas(id, nombre) {
    comprobarBD();
    var id = id;
    var lista = document.getElementById("div-container");
    var elemento = document.createElement("div");
    //elemento.setAttribute("id",texto.value);
    elemento.setAttribute("id", id);
    elemento.setAttribute("class", "card mb-3 mx-auto col-10 col-lg-8");
    var elemento2 = document.createElement("div");
    elemento2.setAttribute("class", "row g-0");
    elemento.appendChild(elemento2);
    var elemento3 = document.createElement("div");
    elemento3.setAttribute("class", "col-md-4");
    elemento2.appendChild(elemento3);

    valor = elemento.getAttribute("id");
    var foto = document.createElement("img");
    foto.setAttribute("src", "pesas.jpg");
    foto.setAttribute("class", "img-fluid rounded-start")
    //foto.setAttribute("width","230");
    //foto.setAttribute("height","120");
    foto.setAttribute("alt", "...");
    elemento3.appendChild(foto);
    var elemento4 = document.createElement("div");
    elemento4.setAttribute("class", "col-md-8");
    elemento2.appendChild(elemento4);
    var elemento5 = document.createElement("div");
    elemento5.setAttribute("class", "card-body");
    elemento4.appendChild(elemento5);
    var elemento6 = document.createElement("h5");
    elemento6.setAttribute("class", "card-title");
    elemento5.appendChild(elemento6);
    var Nombre = document.createTextNode(nombre);
    elemento6.appendChild(Nombre);
    var elemento7 = document.createElement("p");
    elemento7.setAttribute("class", "card-text");
    var elemento8 = document.createElement("small");
    elemento8.setAttribute("class", "text-muted");
    elemento7.appendChild(elemento8);
    elemento5.appendChild(elemento7);

    var elemento11 = document.createElement("button");
    var tDentro11 = document.createTextNode("Añadir");

    elemento11.setAttribute("id", "anyadirARutina");
    elemento11.setAttribute("name", "anyadirARutina");
    elemento11.setAttribute("class", "btn btn-primary");
    elemento11.setAttribute("onclick", "anyadirARutina(this)");
    elemento11.setAttribute("style", "display: none");
    elemento11.appendChild(tDentro11);
    elemento5.appendChild(elemento11);

    var elemento9 = document.createElement("button");
    var tDentro1 = document.createTextNode("Ver Ejercicios Rutina");

    elemento9.setAttribute("id", "vejrutina");
    elemento9.setAttribute("name", "vejrutina1");
    elemento9.setAttribute("class", "btn btn-primary");
    elemento9.setAttribute("onclick", "irAEjercicios(this)");
    elemento9.appendChild(tDentro1);
    elemento5.appendChild(elemento9);
    var elemento10 = document.createElement("button");
    var tDentro2 = document.createTextNode("Eliminar");
    elemento10.setAttribute("id", "delete1");
    elemento10.setAttribute("name", "delete1");
    elemento10.setAttribute("class", "btn btn-danger");
    elemento10.setAttribute("onclick", "removeItem(this)");
    elemento10.appendChild(tDentro2);
    elemento5.appendChild(elemento10);

    //elemento3.setAttribute("title",texto.value);
    //elemento3.appendChild(document.createTextNode(texto.value));


    //elemento.appendChild(document.createTextNode(texto.value));
    //elemento.appendChild(document.createNode());
    lista.appendChild(elemento);


}

function removeItem(elem) {
    //confirm("¿Seguro que desea eliminar la rutina?")
    /* Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
     }).then((result) => {
         if (result.isConfirmed) {
             Swal.fire(
                 'Deleted!',
                 'Your file has been deleted.',
                 'success'
             )
         }
     })*/

    //AlertEliminar();

    parent = elem.parentNode.parentNode.parentNode.parentNode;
    borrarRutina(parent.getAttribute("id"))
    parent.parentNode.removeChild(parent);

    AlertEliminarExito();
}

function AlertEliminarExito() {
    Swal.fire({
        title: 'Rutina Eliminada',
        icon: 'success',
        text: 'Rutina Eliminada con éxito',
        width: '25%',
        timer: 5000,
        autoHeight: true,
        position: 'top',
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        confirmButtonArialLabel: 'Aceptar',
        showConfirmationButton: false,
    })
}

function AlertEliminar() {
    Swal.fire({
        title: 'Eliminar Rutina',
        icon: 'question',
        text: '¿Seguro que desea eliminar esa rutina?',
        width: '25%',
        showCancelButton: true,
        autoHeight: true,
        position: 'top',
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        confirmButtonArialLabel: 'Confirmar',
        showConfirmationButton: false,
    })
}

function AlertTextoError() {
    Swal.fire({
        title: 'Añadir Rutina',
        icon: 'error',
        text: 'Campo de texto vacío',
        width: '25%',
        showCancelButton: false,
        autoHeight: true,
        position: 'top',
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,

    })
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

function AlertAddConfirmation() {
    Swal.fire({
        title: 'Añadir Rutina',
        icon: 'question',
        text: '¿Seguro que desea añadir esta rutina?',
        width: '25%',
        showCancelButton: true,
        autoHeight: true,
        position: 'top',
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        confirmButtonArialLabel: 'Confirmar',
        showConfirmationButton: false,
    })
}

function irAEjercicios(elem) {

    var parent = elem.parentNode.parentNode.parentNode.parentNode;
    var id = parent.getAttribute("id")
    localStorage.setItem("idRutina", id);

    document.location.href = "EjerciciosMisRutinas.html"
}

function anyadirARutina(elem){
    var parent = elem.parentNode.parentNode.parentNode.parentNode;
    var id = parent.getAttribute("id");
    anyadirEjercicioRutina(id, JSON.parse(localStorage.getItem("ejercicio")));
    localStorage.setItem("flagAnyadir", false);
    localStorage.removeItem("ejercicio");
    actualizarRutinas();
}