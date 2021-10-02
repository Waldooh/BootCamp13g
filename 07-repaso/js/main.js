/*
Para todos los ejercicios generarlas con funciones donde puedan identificar si recibira o no parametros:

1. Dado un string de palabras, devolver la palabra más larga.

2. Crear un programa que permita detectar si una frase finaliza con punto.

3. Crear un programa que permita al usuario retornar el numero de coincideas de una palabra en una frase que el mismo usuario introduzca

4. Crear un programa que permita al usuario extraer uns subcadena de una cadena dada.

5. Crear un programa que permita comparar dos palabras dadas por el usuario y determine si son iguales o no.

6. Crear un programa que permita a una cadena de texto muestra el caracter '-' ebtre cada caracter de la cadena.

7. Sabiendo que una cadena de texto contiene parentesis. Crear un programa qye me devuelva la cadena que se encuetra entre los parentesis.
*/

// Ejercicio 1 (Metodo basico)
function ejercicio1A (palabra) {
    let array = palabra.split(" ")
    let auxPal = array[0] // funciona también con "palabra[0]"

    for(let i = 0; i < array.length; i++) {
        if(auxPal.length < array[i].length) {
            auxPal = array[i]
        }
    }
    return auxPal
}

// Ejercicio 1 (Metodo avanzado)
function ejercicio1B(palabra) {
    return palabra.split(" ").reduce((first, next) => {
        if(first.length < next.length) {
            first = next
        }
        return first
    })
}

