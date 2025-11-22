const jsonLibros = `[
    {"titulo": "Cien Años de Soledad", "autor": "Gabriel García Márquez"},
    {"titulo": "El Principito", "autor": "Antoine de Saint-Exupéry"},
    {"titulo": "1984", "autor": "George Orwell"}
]`;
const libros = JSON.parse(jsonLibros);
const contenedor = document.getElementById('contenedor');
const tabla = document.createElement('table');

libros.forEach(libro => {
    const fila = document.createElement('tr');
    const tdTitulo = document.createElement('td');
    tdTitulo.textContent = libro.titulo;
    const tdAutor = document.createElement('td');
    tdAutor.textContent = libro.autor;

    fila.appendChild(tdTitulo);
    fila.appendChild(tdAutor);
    tabla.appendChild(fila);
});
contenedor.appendChild(tabla);