
if(comprobarLogin()=="true"){
    cambiarPagina(localStorage.getItem("cuenta"));
}

buttonLogin.addEventListener("click", ()=>{
    console.log("hola");
    logIn();
    actualizarPagina();
    
}, false);

function actualizarPagina(){
    if(comprobarLogin()=="true"){
        cambiarPagina(localStorage.getItem("cuenta"));
    }else{
        window.location.href = "index.html";
    }
}

function cambiarPagina(cuentaJSON){
    var cuenta = JSON.parse(cuentaJSON);

    var nombres = document.querySelectorAll("#nombreUsuario");
    for (let x of nombres){
        x.textContent= cuenta["Nombre"];
    }

    var idUsuario =  document.querySelectorAll("#tagUsuario");
    for (let x of idUsuario){
        x.textContent= "@"+cuenta["Usuario"];
    }
    document.querySelector("#emailUsuario").textContent = cuenta["Email"];
    
    buttonLogin.style.display = "none";
    buttonLogOut.style.display = "inline-flex";
}

buttonLogOut.addEventListener("click", ()=>{
    logOut();
    buttonLogin.style.display = "inline-flex";
    buttonLogOut.style.display = "none";
    actualizarPagina();

}, false);

