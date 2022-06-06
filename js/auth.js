const buttonLogin = document.querySelector("#iniciarSesionButton");
const buttonLogOut = document.querySelector("#cerrarSesionButton");

if(comprobarLogin()=="true"){
    if(localStorage.getItem("cuenta")==null || localStorage.getItem("cuenta")==""){
        logIn();
    }
    buttonLogin.style.display = "none";
    buttonLogOut.style.display = "inline-flex";
}else{
    buttonLogin.style.display = "inline-flex";
    buttonLogOut.style.display = "none";
}

buttonLogin.addEventListener("click", ()=>{
    document.location.href="login.html"
}, false);

buttonLogOut.addEventListener("click", ()=>{
    logOut();
    buttonLogin.style.display = "inline-flex";
    buttonLogOut.style.display = "none";
    document.location.href="index.html"
}, false);

function logIn(){
    var cuenta = {
        Nombre: "Antonio Sepúlveda",
        Email: "antoniosepulveda@uma.es",
        Usuario: "antonio086",
        Foto: "https://pbs.twimg.com/profile_images/932979382582415360/l8Uw4UMP_400x400.jpg"
    }

    localStorage.setItem("cuenta", JSON.stringify(cuenta));
}

function logOut(){
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
