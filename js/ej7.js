const input = document.getElementById('text');
const lista = document.getElementById('lista-Items');
const btnAgregar = document.getElementById('btn-Agregar');
const btnBorrar = document.getElementById('btn-Borrar');

//agregar
btnAgregar.addEventListener('click', () => {
    const textoUsuario = input.value;
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = textoUsuario;
    lista.appendChild(nuevoLi);
    input.value = '';
});

// borrar
btnBorrar.addEventListener('click', () => {
    const ultimoElemento = lista.lastElementChild;
    lista.removeChild(ultimoElemento);
});