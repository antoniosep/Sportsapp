localStorage.setItem("direccion", document.location.href);
if (localStorage.getItem("auth") == null || localStorage.getItem("auth") == "false") {
    document.location.href = "login.html";
}