const usuario = {
    nombre: "Anthony",
    correo: "acondorichoc@unsa.edu.pe@",
    rol: "Programador"
};

localStorage.setItem('datosUsuario', JSON.stringify(usuario));

const jsonRecuperado = localStorage.getItem('datosUsuario');

const usuarioFinal = JSON.parse(jsonRecuperado);

const divPerfil = document.getElementById('perfil');

divPerfil.innerHTML = `
    <p><strong>Nombre:</strong> ${usuarioFinal.nombre}</p>
    <p><strong>Correo:</strong> ${usuarioFinal.correo}</p>
    <p><strong>Rol:</strong> ${usuarioFinal.rol}</p>
`;