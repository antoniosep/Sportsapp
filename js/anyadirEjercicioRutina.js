const buttonAnyadir = document.querySelectorAll("#anyadirARutina");
const buttonVerEjercicios = document.querySelectorAll("#vejrutina");
actualizarRutinas();

function actualizarRutinas(){
    if(localStorage.getItem("flagAnyadir")=="true"){
        for(let x of buttonAnyadir){
            x.style.display = "initial";
        }
        
        for(let x of buttonVerEjercicios){
            x.style.display = "none";
        }
    }else{
        for(let x of buttonAnyadir){
            x.style.display = "none";
        }
        
        for(let x of buttonVerEjercicios){
            x.style.display = "initial";
        }
    }
}





