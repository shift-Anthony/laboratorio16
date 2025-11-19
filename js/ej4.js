const parrafo = document.getElementById('parrafo');
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    if (parrafo.textContent === 'Texto original') {
        parrafo.textContent = 'Texto cambiado';
        console.log("Cambio")
    } else {
        parrafo.textContent = 'Texto original';
        console.log("Original")
    }
});