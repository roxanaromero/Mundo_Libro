
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
        errores.push("El Nombre no puede estar vacío.");
    }

    if (!apellido) {
        errores.push("El Apellido no puede estar vacío.");
    }

    if (!email) {
        errores.push("El Email no puede estar vacío.");
    } else if (!emailRegex.test(email)) {
        errores.push("Por favor, introduce un correo electrónico válido.");
    }

    if (!mensaje) {
        errores.push("El Mensaje no puede estar vacío.");
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

