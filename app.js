let alumno = {
    id:424118451,
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
            estudios: "Maestría"
        }
    },
    primaria: {
        nombre: "Octavio Paz",
        comer(comida) {
            return 'ahora está comiendo ${comida}';
        },
        mensaje(mensajeAlumno) {
            return '${this.nombre} es la Primaria y el alumno tiene que ir a ${mensajeAlumno}';
        }
    }
}
console.log(alumno.kinder.datosMiss.nombre);
console.log(alumno.primaria.mensaje("Direccion"));
console.log(alumno.primaria.comer("Pastel"));

/** 
 * calle
 * numero
 *  interior
 * colonia
 * CP
 * Municipio o Alcaldia
 * estado
 * pais
 * continente
 * 
*/