if (localStorage.getItem("auth") == null || localStorage.getItem("auth") == "false") {
    console.log("hola");
    document.location.href = "login.html";
}