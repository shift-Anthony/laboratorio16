const cuadrado = document.getElementById('cuadrado');
const btnMover = document.getElementById('btn-Mover');
const btnReiniciar = document.getElementById('btn-Reiniciar');

btnMover.addEventListener('click', () => {
    cuadrado.classList.add('mover');
});

btnReiniciar.addEventListener('click', () => {
    cuadrado.classList.remove('mover');
});