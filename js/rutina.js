const rutinas = new Map()

var rutina = {
    Titulo: "Rutina nueva"
}

const ejercicios = new Map()

var ejercicio = {
    id: 1,
    Titulo: "Ejercicio espalda"
}

ejercicios.set(1, ejercicio);

rutina["Ejercicios"] = JSON.stringify(Array.from(ejercicios));

rutinas.set(1, rutina);

localStorage.setItem("rutinas", JSON.stringify(Array.from(rutinas)));


map = new Map(JSON.parse(localStorage.getItem("rutinas")));
console.log(map.get(1));