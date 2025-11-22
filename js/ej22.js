const formulario = document.getElementById('formPerfil');
const vista = document.getElementById('vistaPerfil');

function verPerfil() {
    const jsonGuardado = localStorage.getItem('usuarioPerfil');
    
    if (jsonGuardado) {
        const usuario = JSON.parse(jsonGuardado);
        vista.innerHTML = `
            <p><strong>Nombre:</strong> ${usuario.nombre}</p>
            <p><strong>Edad:</strong> ${usuario.edad}</p>
            <p><strong>País:</strong> ${usuario.pais}</p>
        `;
    }
}

verPerfil();

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevoUsuario = {
        nombre: document.getElementById('nombre').value,
        edad: document.getElementById('edad').value,
        pais: document.getElementById('pais').value
    };

    localStorage.setItem('usuarioPerfil', JSON.stringify(nuevoUsuario));
    
    verPerfil();
    alert("Perfil guardado");
});