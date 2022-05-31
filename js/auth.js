const buttonLogin = document.querySelector("#iniciarSesionButton");
const buttonLogOut = document.querySelector("#cerrarSesionButton");

if(comprobarLogin()=="true"){
    buttonLogin.style.display = "none";
    buttonLogOut.style.display = "inline-flex";
}else{
    buttonLogin.style.display = "inline-flex";
    buttonLogOut.style.display = "none";
}

buttonLogin.addEventListener("click", ()=>{
    logIn();
    buttonLogin.style.display = "none";
    buttonLogOut.style.display = "inline-flex";
}, false);

buttonLogOut.addEventListener("click", ()=>{
    logOut();
    buttonLogin.style.display = "inline-flex";
    buttonLogOut.style.display = "none";
}, false);

function logIn(){
    var cuenta = {
        Nombre: "Antonio Sepúlveda",
        Email: "antoniosepulveda@uma.es",
        Usuario: "antonio086"
    }

    localStorage.setItem("cuenta", JSON.stringify(cuenta));
    localStorage.setItem("auth", "true");
}

function logOut(){
    localStorage.setItem("cuenta", "");
    localStorage.setItem("auth", "false");
}

function comprobarLogin(){
    let auth;
    try {
        auth = localStorage.getItem("auth");
    } catch (error) {
        auth = "false";
    }
    return auth;
}
