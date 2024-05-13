
// Obtener referencias a los elementos del formulario
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const areaInput = document.getElementById('area');
const mensajeInput = document.getElementById('mensaje');
const erroresDiv = document.getElementById('errores');
const formulario = document.getElementById('formContacto');

// Expresión regular para validar el correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mensajes de error
const ERROR_NOMBRE_VACIO = "El Nombre no puede estar vacío.";
const ERROR_APELLIDO_VACIO = "El Apellido no puede estar vacío.";
const ERROR_EMAIL_VACIO = "El Email no puede estar vacío.";
const ERROR_EMAIL_INVALIDO = "Por favor, introduce un correo electrónico válido.";
const ERROR_MENSAJE_VACIO = "El Mensaje no puede estar vacío.";

// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const email = emailInput.value.trim();
    const area = areaInput.value.trim();
    const mensaje = mensajeInput.value.trim();


    const errores = [];

    if (!nombre) {
        errores.push(ERROR_NOMBRE_VACIO);
    }

    if (!apellido) {
        errores.push(ERROR_APELLIDO_VACIO);
    }

    if (!email) {
        errores.push(ERROR_EMAIL_VACIO);
    } else if (!emailRegex.test(email)) {
        errores.push(ERROR_EMAIL_INVALIDO);
    }

    if (!mensaje) {
        errores.push(ERROR_MENSAJE_VACIO);
    }

    if (errores.length > 0) {
        erroresDiv.innerText = errores.join("\n");
    } else {
        erroresDiv.innerText = "";

        // Aquí puedes enviar los datos del formulario al servidor
        const datos = {
            nombre,
            apellido,
            email,
            area,
            mensaje
        };

        console.log(datos);
    }
}

// Agregar evento de submit al formulario
formulario.addEventListener('submit', validarFormulario);

