const jsonString = '{"producto": "Teclado Mecánico", "precio": 120}';
const objeto = JSON.parse(jsonString);
document.getElementById('json').textContent = objeto.producto;