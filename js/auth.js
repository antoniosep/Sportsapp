function logIn(){
    var cuenta = {
        Nombre: "Antonio Sepúlveda",
        Email: "antoniosepulveda@uma.es",
        Usuario: "antonio086"
    }

    console.log("login");
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
