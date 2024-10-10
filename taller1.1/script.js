const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const elemento = document.querySelector('#elemento')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const inputNombre = document.querySelector('#input-nombre');
const guardarNombre = document.querySelector('#guardar-nombre');
const nombreUsuario = document.querySelector('#nombre-usuario');
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let LIST

let id // para que inicie en 0 cada tarea tendra un id diferente
// Referencias al campo de nombre y botón

// Límite de caracteres para el nombre
const maxCaracteresNombre = 25;


// Expresión regular para validar solo letras
const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

// Guardar y mostrar el nombre cuando el usuario haga clic en el botón
guardarNombre.addEventListener('click', () => {
    const nombre = inputNombre.value.trim(); // Capturar el nombre ingresado
    if (nombre.length > maxCaracteresNombre) {
        alert(`El nombre no puede tener más de ${maxCaracteresNombre} caracteres.`);
    } else if (!soloLetras.test(nombre)) {
        alert('El nombre solo puede contener letras.');
    } else if (nombre) {
        nombreUsuario.textContent = `Hola, ${nombre}`; // Actualizar el nombre en la interfaz
        inputNombre.value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor ingresa un nombre válido.');
    }
});

inputNombre.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const nombre = inputNombre.value.trim();
        if (nombre.length > maxCaracteresNombre) {
            alert(`El nombre no puede tener más de ${maxCaracteresNombre} caracteres.`);
        } else if (!soloLetras.test(nombre)) {
            alert('El nombre solo puede contener letras.');
        } else if (nombre) {
            nombreUsuario.textContent = `Hola, ${nombre}`;
            inputNombre.value = '';
        } else {
            alert('Por favor ingresa un nombre válido.');
        }
    }
});

// Creación de fecha actualizada
const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX', { weekday: 'long', month: 'short', day: 'numeric' })


// Límite de palabras
const maxPalabras = 80

// Función para contar palabras
function contarPalabras(texto) {
    return texto.trim().split(/\s+/).length
}

// Función de agregar tarea 
function agregarTarea(tarea, id, realizado, eliminado) {
    if (eliminado) { return } // si existe eliminado es true si no es false

    const REALIZADO = realizado ? check : uncheck // si realizado es verdadero check, si no uncheck

    const LINE = realizado ? lineThrough : ''

    const elemento = `
                        <li id="elemento">
                        <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="${id}"></i> 
                        </li>
                    `
    lista.insertAdjacentHTML("beforeend", elemento)
}

// Función de tarea realizada
function tareaRealizada(element) {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    LIST[element.id].realizado = LIST[element.id].realizado ? false : true
}

// Función de tarea eliminada
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado = true
}

// Evento para el botón de agregar tarea
botonEnter.addEventListener('click', () => {
    const tarea = input.value
    const numeroDePalabras = contarPalabras(tarea)

    if (numeroDePalabras > maxPalabras) {
        alert(`La tarea no puede tener más de ${maxPalabras} palabras.`)
    } else if (tarea) {
        agregarTarea(tarea, id, false, false)
        LIST.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        })
        localStorage.setItem('TODO', JSON.stringify(LIST))
        id++
        input.value = ''
    }
})

// Evento para detectar la tecla Enter
document.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        const tarea = input.value
        const numeroDePalabras = contarPalabras(tarea)

        if (numeroDePalabras > maxPalabras) {
            alert(`La tarea no puede tener más de ${maxPalabras} palabras.`)
        } else if (tarea) {
            agregarTarea(tarea, id, false, false)
            LIST.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false
            })
            localStorage.setItem('TODO', JSON.stringify(LIST))
            input.value = ''
            id++
        }
    }
})

// Eventos para marcar como realizado o eliminar una tarea
lista.addEventListener('click', function (event) {
    const element = event.target
    const elementData = element.attributes.data.value

    if (elementData == 'realizado') {
        tareaRealizada(element)
    } else if (elementData == 'eliminado') {
        tareaEliminada(element)
    }
    localStorage.setItem('TODO', JSON.stringify(LIST))
})

// Cargar lista desde localStorage
let data = localStorage.getItem('TODO')
if (data) {
    LIST = JSON.parse(data)
    id = LIST.length
    cargarLista(LIST)
} else {
    LIST = []
    id = 0
}

// Función para cargar lista
function cargarLista(array) {
    array.forEach(function (item) {
        agregarTarea(item.nombre, item.id, item.realizado, item.eliminado)
    })
}
