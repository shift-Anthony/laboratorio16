const form = document.getElementById('form');
const tabla = document.getElementById('tabla');
let filaEditar = null;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const html = `<td>${form.n.value}</td><td>${form.e.value}</td>
                  <td><button class="ed">Editar</button> <button class="el">Borrar</button></td>`;
    if (filaEditar) {
        filaEditar.innerHTML = html;
        filaEditar = null; 
    } else {
        const tr = document.createElement('tr');
        tr.innerHTML = html;
        tabla.appendChild(tr);
    }
    form.reset();
});

tabla.addEventListener('click', (e) => {
    const btn = e.target;
    const fila = btn.closest('tr');
    if (!fila) return; 
    if (btn.className === 'el')fila.remove(); // Eliminar
    if (btn.className === 'ed') {
        form.n.value = fila.cells[0].textContent;
        form.e.value = fila.cells[1].textContent;
        filaEditar = fila; 
    }
});