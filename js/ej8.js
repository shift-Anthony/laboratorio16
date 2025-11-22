const formulario = document.getElementById('formulario');
const nombre = document.getElementById('name');
const email = document.getElementById('email');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const erroresPrevios = document.querySelectorAll('.mensaje-error');
    erroresPrevios.forEach(error => error.remove());
    let esValido = true;
    //validando
    if (nombre.value.trim() === '') {
        crearError(nombre, 'El nombre es obligatorio');
        esValido = false; 
    }

    if (email.value.trim() === '') {
        crearError(email, 'El correo es obligatorio');
        esValido = false;
    }
    if (esValido) alert("¡Formulario enviado con éxito!");
});

function crearError(input, mensaje) {
    const span = document.createElement('span');
    span.textContent = mensaje;
    span.classList.add('mensaje-error');
    span.style.color = 'red';
    span.style.display = 'block';
    input.parentNode.appendChild(span);
}