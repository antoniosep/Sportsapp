
document.getElementById("myForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    let email = document.querySelector("#floatingEmail");
    let password = document.querySelector("#floatingPassword");
    
    if(email.value=="antoniosepulveda@uma.es" && password.value=="12345"){
        localStorage.setItem("auth", true);
        document.location.href="index.html";
    }else{
        document.getElementById("myForm").reset();
    }
}, false);
