// Input: "kodemia"
// Output: "KoDeMiA"

// Ejercicio 1
let word = prompt("Ingresa una palabra:")
let lengthStr = word.length
let result = ""

function ejercicio1() {
    for(let index = 0; index < lengthStr; index++){
        if(index % 2 === 0){
            result += word.charAt(index).toUpperCase()
        }
        else{
            result += word.charAt(index).toLowerCase()
        }
    }
    return result
}
console.log("Input: ", word)
console.log("Output: ", ejercicio1())


// Ejercicio 2
let num = prompt("Ingresa un numero:")
num = Number(num)

for(let i=0; i<=10; i++){
    result = i * num
    console.log(`${num} x ${i} = ${result}`)
}

// Ejercicio 5
let aster = "**************"
let lengthAster = aster.length
let resultado = ""

for(let index = 0; index < lengthAster; index++){
    resultado += aster.charAt(index)
    console.log(resultado)
}

