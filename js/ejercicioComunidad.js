function anyadirARutina(elem){
    index = parseInt(localStorage.getItem("nuevoIndex"), 10);
    id = "ejercicio"+index;


    var ejercicio = {
        id: id,
        Nombre: elem.parentNode.childNodes[1].textContent,
        Descripcion: elem.parentNode.childNodes[3].textContent
    }

    localStorage.setItem("flagAnyadir", true);
    localStorage.setItem("ejercicio", JSON.stringify(ejercicio));
    localStorage.setItem("nuevoIndex", index+1);
    
    document.location.href = "MisRutinas.html";

}