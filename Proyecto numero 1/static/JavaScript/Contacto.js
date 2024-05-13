
/*
const validarFormulario= (event) => {
    event.preventDefault()
    const Nombre = document.getElementById("nombre")
    const divErrorNombre = document.querySelector("#error-nombre")
    divErrorNombre.innerHTML = ""

    if (Nombre.value === "") {
        
        divErrorNombre.insertAdjacentText("afterbegin","El nombre no puede ser vacio!!!")
    }

    }
*/
document.getElementById('enviar').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var area = document.getElementById('area').value;
    var mensa = document.getElementById('mensaje').value;

    var errores = [];

    if (nombre.trim() === '') {
        errores.push("El Nombre no puede estar vacío.");
    }

    if (apellido.trim() === '') {
        errores.push("El Apellido no puede estar vacío.");
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        errores.push("El Email no puede estar vacío.");
    } 
    
    if (!emailRegex.test(email)){
        errores.push("Por favor, introduce un correo electrónico válido.");
    } 
        
    if (mensa.trim() === '') {
        errores.push("El Mensaje no puede estar vacío.");
    }
    if (errores.length > 0) {
        document.getElementById('errores').innerText = errores.join("\n");
        return;
    } 
    if(errores.length=0) {
        document.getElementById('errores').innerText = ""; // Clear error message if there are no errors
    }

    
    var datos = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        area: area,
        mensa:mensa
    };

    console.log(datos);
});


/*
const formularioRegistro = document.querySelector("#formContacto")
formularioRegistro.addEventListener('submit',validarFormulario)
*/