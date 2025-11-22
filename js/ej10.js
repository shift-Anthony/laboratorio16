const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
];
const boton = document.getElementById('btn-Generar');
const contenedor = document.getElementById('contenedorTabla');
boton.addEventListener('click', () => {
    contenedor.innerHTML = '';
    //creando la tabla
    const tabla = document.createElement('table');
    const encabezado = document.createElement('tr');
    
    const thNombre = document.createElement('th');
    thNombre.textContent = 'Nombre';
    const thPrecio = document.createElement('th');
    thPrecio.textContent = 'Precio';

    encabezado.appendChild(thNombre);
    encabezado.appendChild(thPrecio);
    tabla.appendChild(encabezado);
    //agregando los productos
    productos.forEach(producto => {
        const fila = document.createElement('tr');
        
        const tdNombre = document.createElement('td');
        tdNombre.textContent = producto.nombre;
        
        const tdPrecio = document.createElement('td');
        tdPrecio.textContent = producto.precio;

        fila.appendChild(tdNombre);
        fila.appendChild(tdPrecio);
        tabla.appendChild(fila);
    });
    contenedor.appendChild(tabla);
});