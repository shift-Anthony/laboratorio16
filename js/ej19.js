const jsonString = '{"nombre": "Anthony", "edad": 23, "ciudad": "Arequipa"}';
document.getElementById('pAntes').textContent = jsonString;

const usuario = JSON.parse(jsonString);
usuario.edad = 21;

const jsonNuevo = JSON.stringify(usuario);
document.getElementById('pDespues').textContent = jsonNuevo;