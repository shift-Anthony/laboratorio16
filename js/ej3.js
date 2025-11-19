const parrafo = document.getElementById('parrafo');
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    parrafo.textContent = 'Texto cambiado';
});