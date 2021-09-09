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