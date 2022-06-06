function AlertHiloCrear (){
    Swal.fire({
        title: 'Hilo creado correctamente',
        icon: 'success',
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        confirmButtonArialLabel: 'Confirmar',
    }).then(function(){
        window.location.reload();
    }
    )
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

