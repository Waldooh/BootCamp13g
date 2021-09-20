/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Fernanda"
    input Apellido = "Palacios Vera"
    Output: "fernanda PALACIOS VERA"
*/

// Ejercicio 1
let name = prompt("Ingresa tu nombre:")
let lastName = prompt("Ingresa tus apellidos:")

function ejercicio1(name, lastName) {
    let nameTransformed = name.toLowerCase()
    let lastNameTransformed = lastName.toUpperCase()
    let nameConcatened = nameTransformed + " " + lastNameTransformed
    return nameConcatened  // La función no regresa ningún valor por default, para acceder al valor desde fuera de la función se necesita retornarlo ("return")
}
const nameConcatened = ejercicio1(name, lastName)
console.log(nameConcatened)

/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

// Ejercicio 2
let nombre = prompt("Ingresa tu nombre completo:")
function ejercicio2(nombre) {
    let nameCount = nombre.length
    return nameCount
}
const nameCount = ejercicio2(nombre)
console.log("Tu nombre tiene " + nameCount + " caracteres")

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

// Ejercicio 3
let fullName = prompt("Ingresa tu nombre completo:")
function ejercicio3(fullName) {
    let vocalCount = fullName.match(/[aeiou]/gi).length
    return vocalCount
}
const vocalCount = ejercicio3(fullName)
console.log("Tu nombre tiene " + vocalCount + " vocales")

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

// Ejercicio 4
let text = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
console.log("Proverbio Koder: " + text)

function ejercicio4() {
    let wordCount = text.split(" ")
    let Cont = 0
    let newText = ""

    newText = text.replace(/estudiante/gi, "Koder")

    for(let word of wordCount) {
        if(word == "estudiante") {
            Cont++
        }
    }
    console.log(`El proverbio tiene ${Cont} veces la palabra "estudiante"`)
    console.log(`Provervio nuevo: ${newText}`)
}
console.log(ejercicio4())


/*
Ejercicio 5:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

// Ejercicio 5
let Str1 = prompt("Ingresa una texto:")
let Str2 = prompt("Ingresa otro texto:")
function compareString(Str1, Str2) {
    let lengthString1 = Str1.length
    let lengthString2 = Str2.length
    if(lengthString1 > lengthString2) {
        console.log(`La cadena más larga es: "${Str1}"`)
    }else if(lengthString1 < lengthString2) {
        console.log(`La cadena más larga es: "${Str2}"`)
    }else {
        console.log("Ambas cadenas tienen la misma longitud")
    }
}
// Ejecutar función
console.log(compareString(Str1, Str2))

/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

// Ejercicio 6
let dobleString = prompt("Ingresa dos palabras:")
let largerString = dobleString.split(" ")

function ejercicio6(largerString) {
    if(largerString[0].length > largerString[1].length) {
        console.log(`La palabra ${largerString[0]} es más larga`)
    }
    else if(largerString[0].length < largerString[1].length) {
        console.log(`La palabra ${largerString[1]} es más larga`)
    }
    else {
        console.log("Los strings tienen el mismo tamaño")
    }
}
console.log(ejercicio6(largerString))






/*
    Crear una funcion que permita al usuario retornar el numero de coincidencias de 
    una palabra en una frase que el mismo usuario ingrese.
    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/

// - Obtener string 1


let frase = prompt("Ingresa frase: ")
let word = prompt("Qué palabra buscas?")

function ejercicio7(frase, word){
    let rgxp = new RegExp(word, "g");
    let cantidad = frase.match(rgxp).length;
    let result = "La palabra "+ word +" aparece: " + cantidad + " Veces";
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

/*
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
*/