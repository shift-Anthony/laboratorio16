const productos = [
    { nombre: "Monitor", precio: 200 },
    { nombre: "Teclado", precio: 40 },
    { nombre: "Ratón", precio: 20 }
];
const jsonString = JSON.stringify(productos);
const productoJSON = JSON.parse(jsonString);

const contenedor = document.getElementById('contenedor');
const ul = document.createElement('ul');

productoJSON.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = producto.nombre;
    ul.appendChild(li);
});

contenedor.appendChild(ul);