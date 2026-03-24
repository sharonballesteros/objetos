/**
 * OBJETO ALUMNO - ESTRUCTURA COMPLETA
 */
let alumno = {
    id: 424118451,
    nombre: "Sharon",
    primerApellido: "Caltempa",
    segundoApellido: "Ballesteros",
    edad: 21,
    titulado: false,
    egresado: {
        estado: true
    },
    domicilio: { 
        calle: {
            nombre: "Gobernador C. Riva Palacio",
            numero: "3",
            interior: "no",
            manzana: 32,
            lote: 75
        },
        numero: "25A",
        colonia: "Granjas México",
        CP: "55270",
        alcaldia: "Gustavo A. Madero",
        estado: "CDMX",
        pais: "México",
        continente: "Latinoamérica"
    },
    kinder: {
        nombre: "Aguilera Dorantes",
        actividadPrimerdia: function () {
            console.log("jugar con bloques");
        },
        actividadRecurrente: function () {
            console.log("cantar canciones");
        },
        datosMiss: {
            nombre: "Paloma",
            edad: 29,
            studies: "Maestría"
        }
    },
    primaria: {
        nombre: "Octavio Paz",
        comer(comida) {
            // Usando BACKTICKS para que funcione la variable
            return `Ahora está comiendo ${comida}`;
        },
        mensaje(mensajeAlumno) {
            // Usando BACKTICKS y 'this' para acceder al nombre de la primaria
            return `${this.nombre} es la Primaria y el alumno tiene que ir a ${mensajeAlumno}`;
        }
    }
}

/**
 * CONSOLA - PRUEBAS DE FUNCIONAMIENTO
 */
console.log("Nombre de la Miss:", alumno.kinder.datosMiss.nombre);
console.log(alumno.primaria.mensaje("Dirección"));
console.log(alumno.primaria.comer("Pastel"));

/**
 * RENDERIZADO EN EL HTML
 * Estas líneas buscan los IDs en tu index.html y les asignan el valor del objeto
 */
// 1. Nombre completo concatenado
document.getElementById("nombre-alumno").innerText = `${alumno.nombre} ${alumno.primerApellido} ${alumno.segundoApellido}`;

// 2. ID Universitario
document.getElementById("id-alumno").innerText = alumno.id;

// 3. Ubicación (Alcaldía y Estado)
document.getElementById("ubicacion-alumno").innerText = `${alumno.domicilio.alcaldia}, ${alumno.domicilio.estado}`;

// 4. Estatus académico (Uso de operador ternario para mostrar texto bonito)
document.getElementById("estatus-alumno").innerText = alumno.egresado.estado ? "Egresado" : "Estudiante Activo";