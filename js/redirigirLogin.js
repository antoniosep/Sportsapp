if (localStorage.getItem("auth") == null || localStorage.getItem("auth") == "false") {
    localStorage.setItem("direccion", document.location.href);
    document.location.href = "login.html";
}else{
    localStorage.removeItem("direccion");
}