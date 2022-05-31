
document.getElementById("myForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    let email = document.querySelector("#floatingEmail");
    let password = document.querySelector("#floatingPassword");
    
    if(email.value=="antoniosepulveda@uma.es" && password.value=="12345"){
        localStorage.setItem("auth", true);
        let dir = localStorage.getItem("direccion");
        localStorage.removeItem("direccion");
        document.location.href=dir;
    }else{
        document.getElementById("myForm").reset();
    }
}, false);
