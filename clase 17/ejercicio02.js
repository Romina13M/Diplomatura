function ocultarMensaje() {

const mensaje = document.getElementById('mensaje');//amarillo nombre del id que esta en el html
mensaje.style.display = 'none';

}

setTimeout(ocultarMensaje, 5000);
