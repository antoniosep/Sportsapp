function AlertHiloCrear (){
    Swal.fire({
        title: 'Hilo creado correctamente',
        icon: 'success',
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        confirmButtonArialLabel: 'Confirmar',
    })
}
function AlertHiloError (){
    Swal.fire({
        title: 'Error:',
        text: 'El campo Título no puede estar vacio',
        icon: 'error',
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        confirmButtonArialLabel: 'Confirmar',
    }
    )
}

function AlertComentarioCrear (){
    Swal.fire({
        title: 'Comentario publicado',
        icon: 'success',
        timer: 2000,
        width: '25%',
        autoHeight: true,
        position: 'top',
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        confirmButtonArialLabel: 'Confirmar',
        showConfirmationButton: false,

    })
}


function AlertComentarioError (){
    Swal.fire({
        title: 'Error',
        icon: 'error',
        text: 'No es posible publicar un comentario vacio',
        timer: 2000,
        width: '25%',
        autoHeight: true,
        position: 'top',
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        confirmButtonArialLabel: 'Confirmar',
        showConfirmationButton: false,

    })
}


