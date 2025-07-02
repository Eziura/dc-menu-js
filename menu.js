
// ESTA PARTE ES PARA PREGUNTAR POR EL HORARIO AL CLIENTE

// La variable para almacenar el horario
let horario = undefined;
const horarioInvalido = "Por favor, introduzca un horario con la hora y los minutos en formato HH:MM.";
// Un bucle while para preguntar el horario hasta que se introduzca un horario correcto (Y si cancela qué hago? mirar cómo funciona)
// Mientras horario siga siendo undefined se pasa el prompt
while (horario === undefined) {
    let preguntaHorario = prompt("Escriba la hora del servicio: \n\n1. Desayuno: 8:00 - 10:00\n2. Comida: 12:00 - 15:00\n3. Cena: 20:00 - 23:00\n\n");

    // El usuario puede no meter nada, o puede meter algo incorrecto, primero veo si hay algún fallo antes de seguir
    // Si le da a cancelar apareceria como null, le voy a poner break para que corte el bucle
    if (preguntaHorario === null) {
        break;
    } else if (preguntaHorario === '') {
        alert("Por favor, introduzca un horario.");
        continue;
    } else if (preguntaHorario.includes(':')) {
        const horarioSeparado = preguntaHorario.split(':');
        // mirar si la longitud de cada split es de 2 unidades, osea hora y minuto y comprobar que son numeros tanto la hora como minutos
        if (horarioSeparado.length !== 2) {
            alert(horarioInvalido);
            continue;
        } else if (horarioSeparado[1].length !== 2) {
            alert(horarioInvalido);
            continue;
        } else if (isNaN(horarioSeparado[0]) || isNaN(horarioSeparado[1])) {
            alert(horarioInvalido);
            continue;
        }

        const horaHorario = parseInt(horarioSeparado[0]);
        const minutosHorario = parseInt(horarioSeparado[1]);

        // Ver si los minutos están correctamente puestos
        if (minutosHorario < 0 || minutosHorario > 59) {
            alert(horarioInvalido);
            continue;
        }

        // Comprobar que el horario introducido es correcto
        if (horaHorario >= 8 && horaHorario <= 10) {
            // En caso de que la hora sea 10, como es limite, los minutos son 0. Para las demás horas los minutos entre 0 y 59
            if (horaHorario === 10) {
                if (minutosHorario !== 0) {
                    alert("El horario de desayuno termina a las 10:00, por favor, selecciona un horario entre 8:00 y 10:00.");
                    continue;
                } else {
                    horario = 'desayuno';
                }

            } else {
                horario = 'desayuno';
            }
        } else if (horaHorario >= 12 && horaHorario <= 15) {
            if (horaHorario === 15) {
                if (minutosHorario !== 0) {
                    alert("El horario de comida termina a las 15:00, por favor, selecciona un horario entre 12:00 y 15:00.");
                    continue;
                } else {
                    horario = 'comida';
                }
            } else {
                horario = 'comida';
            }
        } else if (horaHorario >= 20 && horaHorario <= 23) {
            if (horaHorario === 23) {
                if (minutosHorario !== 0) {
                    alert("El horario de cena termina a las 23:00, por favor, selecciona un horario entre 20:00 y 23:00.");
                    continue;
                } else {
                    horario = 'cena';
                }
            } else {
                horario = 'cena';
            }
        } else {
            alert("Por favor, introduzca una hora dentro del horario de desayuno, comida o cena en formato HH:MM.");
            continue;
        }
    } else {
        alert(horarioInvalido);
        continue;
    }
}

//ESTOS VAN A SER LOS MENUS Y LAS 5 FRASES AL AZAR PARA CADA SELECCIÓN
const tiposMenu = {
    'desayuno': {
        'plato1': [
            { nombre: 'Agua', precio: 1.9 },
            { nombre: 'Leche', precio: 1.2 },
            { nombre: 'Chocolate', precio: 2.5 }
        ],
        'plato2': [
            { nombre: 'Tostada de tomate', precio: 5.0 },
            { nombre: 'Tortilla de patatas', precio: 2.0 },
            { nombre: 'Huevos con bacon', precio: 3.5 },
        ],
        'plato3': [
            { nombre: 'Tarta de manzana', precio: 4.2 },
            { nombre: 'Napolitana', precio: 1.5 },
            { nombre: 'Galleta de chocolate', precio: 1.0 },
        ]
    },
    'comida': {
        'plato1': [
            { nombre: 'Croquetas', precio: 8.0 },
            { nombre: 'Tabla de quesos', precio: 13.0 },
            { nombre: 'Ensalada mixta', precio: 4.5 }
        ],
        'plato2': [
            { nombre: 'Chipirones', precio: 16.0 },
            { nombre: 'Chuletillas', precio: 12.5 },
            { nombre: 'Entrecot', precio: 19.0 },
        ],
        'plato3': [
            { nombre: 'Natillas', precio: 4.6 },
            { nombre: 'Fruta', precio: 2.0 },
            { nombre: 'Tarta de queso', precio: 4.9 },
        ]
    },
    //Cena igual que comida pero precios más altos
    'cena': {
        'plato1': [
            { nombre: 'Croquetas', precio: 9.0 },
            { nombre: 'Tabla de quesos', precio: 15.0 },
            { nombre: 'Ensalada mixta', precio: 5.0 }
        ],
        'plato2': [
            { nombre: 'Chipirones', precio: 17.0 },
            { nombre: 'Chuletillas', precio: 13.5 },
            { nombre: 'Entrecot', precio: 20.5 },
        ],
        'plato3': [
            { nombre: 'Natillas', precio: 5.5 },
            { nombre: 'Fruta', precio: 2.5 },
            { nombre: 'Tarta de queso', precio: 5.0 },
        ]
    }
}

//Las frases que tienen que aparecer al azar cada vez que se escoge un plato
const frasesMenu = [
    "¡Muy buena elección!",
    "¡Delicioso!",
    "¡Buenísimo!",
    "¡Excelente elección!",
    "¡Magnífica elección!",
]

// ESTA PARTE ES PARA MOSTRAR LOS PLATOS SEGÚN EL HORARIO SELECCIONADO

// Voy a entrar dentro del menu del horario seleccionado para mostrar los platos y pedir que seleccione uno de cada
const menu = tiposMenu[horario];

// Voy a extraer la lista de cada plato del menu elegido
const platosDisponibles = [menu['plato1'], menu['plato2'], menu['plato3']];

//Aqui guardo los platos elegidos y sumo los precios
let platosElegidos = [];
let precioTotal = 0;

// Uso prompt de nuevo para elegir los tres platos:
while (platosElegidos.length < 3) {
    for (let plato = 0; plato < platosDisponibles.length; plato++) {
        let preguntaPlato = prompt(`Escriba el plato que desea del menú de ${horario}: \n\n1. ${platosDisponibles[plato][0].nombre} -> ${platosDisponibles[plato][0].precio.toFixed(1)}€\n2. ${platosDisponibles[plato][1].nombre} -> ${platosDisponibles[plato][1].precio.toFixed(1)}€\n3. ${platosDisponibles[plato][2].nombre} -> ${platosDisponibles[plato][2].precio.toFixed(1)}€\n\n`);
        
        // Que sea valido aunque haya espacios y aunque haya mayusculas en cualquier parte (PENSAR: ALGUN OTRO POSIBLE ERROR? TILDES?)
        preguntaPlato = preguntaPlato.trim();
        preguntaPlato = preguntaPlato.toLowerCase();

        //verificar que el plato elegido existe en el menu, si no existe, volver a preguntar
        if (preguntaPlato !== null) {

            const existePlato = platosDisponibles[plato].some(plato => plato.nombre.toLowerCase() === preguntaPlato);

            if (existePlato) {
                const platoElegido = platosDisponibles[plato].find(plato => plato.nombre.toLowerCase() === preguntaPlato);
                platosElegidos.push(platoElegido);
                precioTotal += platoElegido.precio;
                break;
            } else {
                alert("Por favor, introduzca un plato disponible.");
                continue;
            }
        }
    }
}