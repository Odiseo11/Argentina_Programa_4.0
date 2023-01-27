
document.getElementById('btn-oscuro').addEventListener('click', function() {
    mensaje;
    if (mensaje) {
        modo_oscuro;
    }
    else {
        return modo_oscuro;
    }
    
})
document.getElementById('btn-claro').addEventListener('click', function() {
    mensaje;
    if (mensaje) {
        modo_claro;
    }
    else {
    return modo_claro;
    }
})
document.getElementById('btn-reload').addEventListener('click', function() {
    reload_page;
})

//-------------------------------------------------------------------------------//

function modo_oscuro() {
    document.getElementById('div-perfil').style.backgroundColor = 'black';
    document.getElementById('div-perfil').style.color = 'white';
}
function modo_claro() {
    document.getElementById('div-perfil').style.backgroundColor = 'white';
    document.getElementById('div-perfil').style.color = 'black';
}
function reload_page() {
    location.reload(true);
}
function mensaje() {
    alert("Tema cambiado exitosamente");   
}