
// CLASE

function suma(a, b) {
    return a + b
}
const resultSuma = suma(3, 5)
console.log(resultSuma)



const addition = function(a, b) {
    return a + b
}
console.log(addition(10, 15))



const resta = (a,b) => {
    return a - b
}
let resultResta = resta(15, 8)
console.log(resultResta)
// Tambien se puede imprimir como:
console.log(resta(15, 8))



const arrayKoders = [
    "Fanny Alvarez",
    "Elias Herrera",
    "Kraken Perez Salinas",
    "Clau Rodriguez"
  ]


/*
Obtener:
[
    ["Fanny", "Alvarez"],
    ["Elias", "Herrera"],
    ["Kraken", "Perez", "Salinas"],
    ["Clau", "Rodriguez"]
]
*/

const splitKoders = (array) => {
    let splittedNames = []
    for(let i = 0; i < array.length; i++) {
        splittedNames.push(array[i].split(" "))
    }
    return splittedNames
}



function printKoders(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

let someArray = splitKoders(arrayKoders)
console.log(someArray)

console.log("-------------------------------")

// Pasamos como argumento el valor del return de la función
printKoders(splitKoders(arrayKoders))



/*
Si solo recibe un parametro
podemos los omitir parentesis
*/
// const printKoders = array => {
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }

/*
Cuando recibamos 2 o más parametros
es necesario agregar los parentesis
*/
// const multiplicacion = (a, b) => {
//     return a * b
// }

/*
Return Implicito
Si lo que ejecutando en mi funcion
se puede reducir a una sola linea,
no necesitaremos las llaves, ni el return
*/
// const multiplicacion = (a, b) => a * b

// const resultMulti = multiplicacion(10, 2) 
// console.log(resultMulti)





/************************************************************/




/*
Ejercicio 1:
- Funcion que me regrese un numero aleatorio desde 0 hasta array.length
- Funcion que reciba el indice para imprimir el nombre
*/

const tenisPlayers = [
    "Fanny Alvarez", 
    "Elias Herrera",
    "Roger Federer",
    "Rafael Nadal",
    "Novak Djockovic",
    "Ivan Lendel",
    "John McEnrow",
    "Serena Wiliams",
    "Maria Sharapova",
    "Andy Murry",
    "Denis Shapovalov",
    "Mariano Zavaleta",
    "Juand Martin Del Potro"
]

const random = array => Math.floor(Math.random() * array.length)

console.log(random(tenisPlayers))

const printPlayers = index => tenisPlayers[index]

console.log(printPlayers(random(tenisPlayers)))



/* 
Ejercicio 2:
función que reciba un array, un número, y debe de imprimir 
cada uno de los items del array con los caracteres limitados al número ingresado 
*/

/*
Ejercicio 3:
Función que me permita ingresar el nombre de un array, 
y contar cuántos items tiene, si el array no existe, 
debe enviar un prompt que diga "tu array no existe"
*/