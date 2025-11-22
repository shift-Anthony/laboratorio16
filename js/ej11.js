const lista = document.getElementById('lista');

lista.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        lista.removeChild(e.target);
    }
});