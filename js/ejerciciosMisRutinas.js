actualizarEjercicios();
mostrarEjercicios();

function actualizarEjercicios() {
    var idRutina = localStorage.getItem("idRutina");

    rutinasBD = new Map(JSON.parse(localStorage.getItem("rutinas")))

    var rutina = rutinasBD.get(idRutina);

    var Titulo = document.querySelector("#nombreRutina");
    Titulo.textContent = "Ejercicios de la rutina: " + rutina["Titulo"];

    localStorage.setItem("Ejercicios", rutina["Ejercicios"]);
}

function mostrarEjercicios() {
    ejercicios = new Map(JSON.parse(localStorage.getItem("Ejercicios")));
    ejercicios.forEach((value, key) => {
        console.log(ejercicios)
        var ejercicioInfo = value;
        console.log(ejercicioInfo);

        var id = ejercicioInfo["id"];
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
        var Nombre = document.createTextNode(ejercicioInfo["Nombre"]);
        elemento6.appendChild(Nombre);
        var elemento7 = document.createElement("p");
        elemento7.setAttribute("class", "card-text");
        var elemento8 = document.createElement("small");
        elemento8.setAttribute("class", "text-muted");
        elemento7.appendChild(elemento8);
        elemento5.appendChild(elemento7);
        var elemento9 = document.createElement("button");
        var tDentro1 = document.createTextNode("Ver Ejercicio");

        elemento9.setAttribute("id", "vejrutina1");
        elemento9.setAttribute("name", "vejrutina1");
        elemento9.setAttribute("class", "btn btn-primary");
        //elemento9.setAttribute("onclick", "irAEjercicios(this)");
        elemento9.appendChild(tDentro1);
        elemento5.appendChild(elemento9);
        var elemento10 = document.createElement("button");
        var tDentro2 = document.createTextNode("Eliminar");
        elemento10.setAttribute("id", "delete1");
        elemento10.setAttribute("name", "delete1");
        elemento10.setAttribute("class", "btn btn-danger");
        //elemento10.setAttribute("onclick", "removeItem(this)");
        elemento10.appendChild(tDentro2);
        elemento5.appendChild(elemento10);

        //elemento3.setAttribute("title",texto.value);
        //elemento3.appendChild(document.createTextNode(texto.value));


        //elemento.appendChild(document.createTextNode(texto.value));
        //elemento.appendChild(document.createNode());
        lista.appendChild(elemento);
    });
}