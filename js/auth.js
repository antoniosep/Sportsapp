const buttonLogin = document.querySelector("#iniciarSesionButton");
const buttonLogOut = document.querySelector("#cerrarSesionButton");

function logIn(){
    buttonLogin.style.display = "none";
    buttonLogOut.style.display = "inline-flex";
}

function logOut(){
    buttonLogOut.style.display = "none";
    buttonLogin.style.display = "inline-flex";
}


