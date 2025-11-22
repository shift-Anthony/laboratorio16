const contenedor = document.getElementById('contenedor');
const imagenGrande = document.getElementById('grande');

contenedor.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        imagenGrande.src = e.target.src;
    }
});