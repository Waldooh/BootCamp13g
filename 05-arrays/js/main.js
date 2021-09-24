
// CLASE

/*
let arrayKoders = [
    "Paco", 
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo"
]
*/

// Hola, mi nombre es ${nombre}

for(let i=0; i < arrayKoders.length; i++) {
  console.log(`Hola, Mi nombre es ${arrayKoders[i]}`)
}

console.log(arrayKoders)

/* Métodos de array */

/*
.push()  Agrega uno o mas items al final del array
*/

arrayKoders.push("Emi", "Pao", "Mike")

console.log(arrayKoders)

/*
.pop() Remueve el ultimo item del array y 
devuelve el item removido
*/

arrayKoders.pop()
console.log(arrayKoders)



/*
.shift() Remueve el primer item del array y 
devuelve el item removido
*/

arrayKoders.shift()
console.log(arrayKoders)

/*
.reverse() Invierte al array, modificando al array original
*/

/*
.unshift() agrega un item al inicio del array,
y devuelve la longitud del array
*/

/*
.concat() concatenar uno o más arrays
*/


let arrayKoders10ma = ["Cintia", "JuanPi", "Vero"]

let arrayAllKoders = arrayKoders.concat(arrayKoders10ma)

console.log(arrayAllKoders)

/*
.splice(index, howmany, items.., itemN)

index-> Selecciona el indice de un item en el array
howmany -> Cuantos elementos se eliminaran a partir del indice
items -> Items a agregar a partir del indice indicado

Regresa -> los items removidos
*/




/********************************************************************/




/*
Ejercicio 1:
Crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombre completos de koders como se haya indicado, y 
que imprima el nombre del koder y su numero asignado.
Ejemplo:
input   
   - Emi de Leon
   - Elias Herrera
   - Armando Rios
output: 
    koder 1: Emi de Leon
    koder 2: Elias Herrera
    koder 3: Armando Rios
*/

// Team Armando, Toño y Emilio

let numeroKoders = prompt("indica el número de koders: ")
let nombreKoders =[]

for(let i=1; i<=numeroKoders; i++){
    let ingresaNombres = prompt("Ingresa el nombre completo: ")
    nombreKoders.push(ingresaNombres)
}
for (let i=0; i<nombreKoders.length; i++){
    console.log(`Koder ${i+1}: ${nombreKoders[i]}`)
}


/*
A partir del ejercicio anterior:
Crear una funcion que permita saber el nombre de algun koder
basado en su numero asignado
- imprimir la lista de koders en orden alfabetico descendiente
- Crear una nueva lista que contenga los nombres de los koders
  con la siguiente estructura
  [
      "koder 1: Emi de Leon (E. D. L.)"
      "koder 2: Elias Herrera (E. H.)"
      "koder 3: Armando Rios (A. R.)"
  ]
- Permitir agregar un koder en alguna posicion deseada, 
  por ejemplo: "Fanny Alvarez, lugar 3"
*/


const arrayKoders = [
  "Fanny Alvarez",
  "Elias Herrera",
  "Kraken Perez Salinas",
  "Clau Rodriguez"
]

function addKoder() {
  let koder = prompt("Agregar koder:")
  arrayKoders.push(koder)
}

function printKoders(arrayKoders) {
  for(let i = 0; i < arrayKoders.length; i++) {
    console.log(`koder ${i+1}: ${arrayKoders[i]}`)
  }
}

function koderWithInitials() {
  let arrayKodersWithInitials = []
  for(let i = 0; i < arrayKoders.length; i++) {
    // console.log(arrayKoders[i])
    let arrayWords = arrayKoders[i].split(" ")
    let initials = getInitials(arrayWords)
    // console.log(initials)
    let nameComplete = arrayKoders[i]+ " " + initials
    arrayKodersWithInitials.push(nameComplete)
  }
  printKoders(arrayKodersWithInitials)
}

function getInitials(wordsArray) {
  let initials = ""
  for(let i = 0; i < wordsArray.length; i++) {
    initials += wordsArray[i].charAt(0).toUpperCase() + "."
  }
  return initials
}

