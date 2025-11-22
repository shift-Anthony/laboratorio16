const jsonTareas = `[
    {"titulo": "Aprender", "completada": true},
    {"titulo": "Hacer ejercicio", "completada": false},
    {"titulo": "Leer", "completada": true},
    {"titulo": "Limpiar", "completada": false}
]`;

const tareas = JSON.parse(jsonTareas);
const lista = document.getElementById('lista-Tareas');
tareas.forEach(tarea => {
    const item = document.createElement('li');
    item.textContent = tarea.titulo;

    if (tarea.completada) {
        item.style.color = 'green';
        item.style.fontWeight = 'bold';
    } else {
        item.style.color = 'red';
    }

    lista.appendChild(item);
});