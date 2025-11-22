const nombre = document.getElementById('name');
const boton = document.getElementById('btn-Guardar');

boton.addEventListener('click', () => {
    const usuario = {
        nombre: nombre.value
    };
    const json = JSON.stringify(usuario);
    console.log(json);
});