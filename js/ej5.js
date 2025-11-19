const boton = document.getElementById('oscuro');
const titulo = document.getElementById('texto');

boton.addEventListener('click', () => {
    titulo.classList.toggle('destacado');
});