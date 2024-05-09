document.getElementById('terminosCondiciones').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace redirija a otra página
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('cerrarPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});