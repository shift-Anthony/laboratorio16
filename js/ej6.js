const btnMas = document.getElementById('btn-Mas');
const btnMenos = document.getElementById('btn-Menos');
const contador = document.getElementById('contador');
let numero = 0;

btnMas.addEventListener('click', () => {
    numero++;
    contador.textContent = numero;
});

btnMenos.addEventListener('click', () => {
    if (numero > 0) {
        numero--;
        contador.textContent = numero;
//Muestra el mensaje
    } else alert("No se permite bajar de cero")
});