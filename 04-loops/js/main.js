// Input: "kodemia"
// Output: "KoDeMiA"


// let str = prompt("Ingresa una palabra: ")
// let lengthStr = str.length
// let result = ""

// for(let index = 0; index < lengthStr; index++){
//     if(index % 2 === 0){
//         result += str.charAt(index).toUpperCase()
//     }
//     else{
//         result += str.charAt(index).toLowerCase()
//     }
// }
// console.log("Input: ", str)
// console.log("Output: ", result)


// let str = "**************"
// let lengthStr = str.length
// let result = ""

// for(let index = 0; index < lengthStr; index++){
//     // if(index % 2 === 0){
//     //     result += str.charAt(index).toUpperCase()
//     // }
//     // else{
//     //     result += str.charAt(index).toLowerCase()
//     console.log("Output: ", result)
//     }


// console.log("Input: ", str)


// Ejercicio 2

let num = prompt("Ingresa un numero: ")
num = Number(num)

for(let i=0; i<=10; i++){
    result = i * num
    console.log(`${num} x ${i} = ${result}`)
}

