/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Fernanda"
    input Apellido = "Palacios Vera"
    Output: "fernanda PALACIOS VERA"
*/
alert("Esto es un mensaje de alerta")
console.log("-------Ejercicio 1-------")

// Declaración
let name = prompt("Ingresa tu nombre: ")
let lastName = prompt("Ingresa tu apellido: ")

//Función
function nameFormatted(name, lastName) {
    let nameTransformed = name.toLowerCase()
    let lastNameTransformed = lastName.toUpperCase()
    let nameConcatened = nameTransformed + " " + lastNameTransformed
    return nameConcatened
}
console.log(nameFormatted(name, lastName))

/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/
/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/
/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
/*
Ejercicio 5:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

// console.log("---------Ejercicio 5----------")
// // Declaración
// function compareString(string1, string2) {
//     let lengthString1 = string1.length
//     let lengthString2 = string2.length
//     let result
//     if(lengthString1 > lengthString2) {
//         result = "String 1 es mayor"
//     }else if(lengthString1 < lengthString2) {
//         result = String 2 es mayor
//     }else {
//         return "Ambos strings son iguales"
//     }
// }
// // Ejecutar función
// console.log(compareString("Ingresa un string, El segundo string es más largo"))

/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

console.log("-------Ejercicio 6-------")

let dobleString = prompt("Ingresa un string de dos palabras: ")
let largerString = dobleString.split(" ")

console.log(largerString)

if(largerString[0].length > largerString[1].length) {
    console.log(`El string ${largerString[0]} es más larga`)
}
else if(largerString[0].length < largerString[1].length) {
    console.log(`El string ${largerString[0]} es más larga`)
}
else {
    console.log("Los strings tienen el mismo tamaño")
}


/*
    Crear una funcion que permita al usuario retornar el numero de coincidencias de 
    una palabra en una frase que el mismo usuario ingrese.
    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/
/*
- Obtener string 1


*/
let frase = prompt("Ingresa frase: ")
let word = prompt("Qué palabra buscas?")

function ejercicio7(frase, word){
    let rgxp = new RegExp(word, "g");
    let cantidad = frase.match(rgxp).length;
    let result = "Veces que aparece la palabra "+ word +": " + cantidad;
    return result;
}
console.log(ejercicio7(frase, word))




/*
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/

function operations(number1, number2, operation) {
    let result
    switch (operation) {
        case "suma":
            let result = number1 + number2
            break;
        case "resta":
            let result = number1 - number2
            break;
        case "multiplicacion":
            let result = number1 * number2
            break;
        case "division":
            let result = number1 / number2
            break;
        default:
            alert("Operación inexistente")
            break;
    }
    return `El resultado de "${operation}" de los numero es: ${result}`
}
let operationChoice = prompt("Infresa qué operacion quieres realizar \n [suma / resta / multiplicacion / divicion]")
let num1 = parseInt(prompt("Ingresa número 1: "))
let num2 = parseInt(prompt("Ingresa número 2: ")) // "parseInt convierte un string a número entero"

console.log(operations(number1, number2, operationChoice))
