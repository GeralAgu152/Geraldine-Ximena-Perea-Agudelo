
//* ----------------------CLASE 2------------- *

// * ------------------------------------------- VARIABLES Y CONDICIONALES ----------------------------- *

/*
function checkAge(age) {
    let message; 
    if (age < 18) {
        message = "Eres menor de edad";
    } else if (age >= 18 && age < 59) {  // y -> && / o -> ||
        message = "Eres mayor de edad";
    } else if (age >= 60){
        message = "Eres de la tercera edad";
    }

    return message;

}

console.log(checkAge(62))
*/

/*
function parImpar (number) {
    let message; 
    if (number % 2 === 0 ) {
        message = "El número es par";
    } else {  // y -> && / o -> ||
        message = "El número es impar";
    }
    return message;

}

console.log(parImpar(55))
*/

/*
document.getElementById("runCode").addEventListener ("click", function() {

    const number = prompt ("Ingrese un número:")

    if( number %2 === 0){
        alert ("El número es par");
    } else{
        alert ("El número es impar");
    }
    document.getElementById("output").textContent = `Número ingresado: ${number}`;
    
});
*/

// * ------------------------------------------------- CICLOS -------------------------------------- *
// Permite que se repita una instrucción varias veces con su respectivo límite.

/*
function listNumber(){
    let numbers = [1,2,3,4,];
    for (let i = 1; i <=5; i++){
        numbers.push(i);
    }
    return numbers;
}
*/

/* 
ejercicio: Función que ejecute un ciclo de números del 1 al 50 pero que solo sume los números pares

function sumaNumber(){
    let suma = 0;
    for (let i = 1; i <= 50; i++){
        if (i % 2 === 0 ) {
            suma += i;
        }
    }
    return suma;
}
console.log(suma());
*/

// * ----------------------------------------------- ARREGLOS ----------------------------------- *

/*
function sumArray(){
    let sum = 0;
    for (let i=0; i < arr.length; i++){
        sum += arr(i);
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])) //siempre se cuenta desde cero
*/

// * ----------------------------------------------- JSON  (DICCIONARIO -> PYTHON) ----------------------------------------- *

/* Permite organizar información, se crea una variable con un tipo especifico. (muchos datos -> clave valor)
Mapa Mental
No tiene como objetivo la creación de programas, sino el acceso, almacenamiento e intercambio de datos. Usualmente es conocido como una alternativa al lenguaje XML.
página Json crack
*/

/*
function getPersonInfo(){
    const person = {
        name:"Juan",
        age: 25,
        city: "Madrid"
    };
    return JSON.stringify(person, null, 2); 
    
}
*/

/* Ejercicio: procesar información de un estudiante: hacer una función con 3 parámetros
    1. Determinar si el estudiante es mayor de edad
    2. Calcular el promedio de las notas
    3. Determimar el rango de la clsificacion final
    4. Devolver un nuevo objeto Json
*/

/*

const calificacion = [20, 30, 100, 25, 70, 80]
function processStudentData(nombre, edad, calificacion){
    const esMayorEdad = edad >= 18
    let promedio;
    let sumaCalificaciones = 0

    for (let i = 0; i <= calificacion.length; i++){
        sumaCalificaciones += calificacion[i]
    }

    promedio = sumaCalificaciones / calificacion.length

    function gradelevel(promedio) {
        if (promedio >= 90) {
            return "A";
        } else if (promedio >= 80) {
            return "B";
        } else if (promedio >= 70) {
            return "C";
        } else if (promedio >= 60) {
            return "D";
        } else {
            return "F";
        }
    }

    const rangoPromedio = gradelevel(promedio)

    const informaciónEstudiante = {
        nombre: nombre,
        edad: esMayorEdad ? "Es mayor de edad": "Es menor de edad", 
        calificacion: rangoPromedio, 
    }

    return informaciónEstudiante
}

console.log(processStudentData("Daniela", 27, []))
*/


/*EJERCICIO: 
1. Crear funcion processEmployeeData
2. Determinar si el empleado es elegible para un bono, que se otorga si el salario es menor o igual a $50,000.
3. Determinar el rango de desempeño basado en el promedio de calificaciones 
4. Devolver un nuevo objeto JSON que incluya el nombre del empleado...
*/

const calificacion = [50, 60, 90, 30, 100, 20];

function processEmployeeData(nombre, edad, salario, calificacion) {

    const esElegibleParaBono = salario <= 50000;

    let sumaCalificaciones = 0;
    for (let i = 0; i < calificacion.length; i++) {
        sumaCalificaciones += calificacion[i];
    }
    const promedio = sumaCalificaciones / calificacion.length;

    function desempeno(promedio) {
        if (promedio >= 90 && promedio <= 100) {
            return "A";
        } else if (promedio >= 80 && promedio <= 89) {
            return "B";
        } else if (promedio >= 70 && promedio <= 79) {
            return "C";
        } else if (promedio >= 60 && promedio <= 69) {
            return "D";
        } else {
            return "F";
        }
    }

    const rangoPromedio = desempeno(promedio);

    const informaciónEmpleado = {
        nombre: nombre,
        elegibleBono: esElegibleParaBono,
        promedioCalificaciones: promedio,
        rangoDesempeño: rangoPromedio,
    };

    return informaciónEmpleado;
}

const empleado = {
    nombre: "Juan Pérez",
    edad: 35,
    salario: 45000,
    calificacion: calificacion
};

const resultadoEmpleado = processEmployeeData(empleado.nombre, empleado.edad, empleado.salario, empleado.calificacion);
console.log(resultadoEmpleado);
