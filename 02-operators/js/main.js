
// 3 métodos para interactuar con el usuario

console.log("Hola compañeros")

console.error("Esto es un error")

console.warn("Esto es un warning")

alert("Esto es un mensaje para alertarlos!!")

// let name = prompt("Ingresa tu nombre")
// retorna un string

// console.log(name)

/* 
   Operadores:

   ----- Aritmeticos -------
   [ + - * / % () ]

   ----- Relacionales -------
   [< > <= >= == === != !==]

   ----- Asignación ---------

   = -> Asigna un valor a una variable
   == -> Comparación de valores
   === -> Comparación de tipo de datos y de valor

   ----- Incremento | Decremento ----------
*/


// console.log("----------Aritméticos--------------")
// let operation=5+(5-10)*3
// console.log(operation)


// console.log("----------Relacionales--------------")

// console.log(8>9)
// console.log(10<20)
// console.log(8>=15)
// console.log(9<=10)   --->   *Retorna "true" o "false"

// let string1="a"
// let string2="b"

// console.log(string1>string2)

// console.log("------------Comparación-------------")

// console.log(7==7)
// console.log("7"==7)
// console.log("7"===7)


// console.log("----------Operadores de Asignación--------------")

let number1 = 1
let suma = 5 + 10

// number1 = number1 + 5
number1 += suma
number1 *= 2
number1 /= 5
number1 -= 10

console.log(number1)



// console.log("----------Incremento y Decremento--------------")

// let  number2 = 2

// number2++
// number2--

// console.log(number2)



// console.log("----------Operadores Lógicos--------------")

// ----------------Else-if------------------

/*
if(condicion) {
   true
   --> Se hace algo
}else {
   --> Hace otra cosa
}
*/

let age = 17

if(age > 17){
    console.log("Eres mayor de Edad")
}else {
    console.log("Eres menor de Edad")
}

/*
Deja Dormir - 0hrs 5hrs
Buenos Dias - 6hrs - 11 hrs
Buenas tardes - 12hrs - 19hrs
Buenas noches - 8hrs - 23hrs
*/

let hora = 16

if(hora >= 0 && hora <= 5) {
    console.log("Mimido...")

}else if(hora >= 6 && hora <= 11) {
    console.log("Buenos días...")

}else if(hora >= 12 && hora <= 19) {
    console.log("Buenas tardes...")

}else {
    console.log("Buenas noches...")
}


// ----------------Operador Ternario------------------

// "Se utiliza mucho en react (operador ternario)"

// Sintaxis:

// (Condicion) ? (Verdadero) : (Falso)

// Ejemplo:
let edad = 25

//              Condición  ? Si se cumple condicion : Sino se cumple condicion
let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"

console.log("Validación de operador ternario: ", eresMayor)
//  let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
// (eresMayor = variable nueva donde se almacena el resultado de la condición) 
// (edad = variable asignada)



// ----------------Switch------------------

/*
   domingo - 0
   lunes - 1
   martes - 2
   miercoles -3
   jueves - 4
   viernes - 5 
   sabado - 6
*/

let today = 6

switch(today) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    default:
        console.log("Dia invalido")
        break;
}





console.log("----------EJERCICIOS--------------")

// Ejercicio 1
function ejercicio1() {
   let num1 = prompt("Ingresa un número:")
   let num2 = prompt("Ingresa otro número:")
   // retorna un string

   num1 = Number(num1);
   num2 = Number(num2);

   let result1 = num1 + num2
   let result2 = num1 - num2
   let result3 = num1 * num2
   let result4 = num1 / num2
   let result5 = num1 % num2

   console.log("El resultado de la suma de " + num1 + " y "+ num2 + " es: " +result1)
   console.log("El resultado de la resta de " + num1 + " y "+ num2 + " es: " +result2)
   console.log("El resultado de la multiplicación de " + num1 + " y "+ num2 + " es: " +result3)
   console.log("El resultado de la división de " + num1 + " y "+ num2 + " es: " +result4)
   console.log("El resultado del módulo de " + num1 + " y "+ num2 + " es: " +result5)
}



// Ejercicio 2
function ejercicio2() {
   let num1 = prompt("Ingresa un número:")
   let num2 = prompt("Ingresa otro número:")
   num1 = Number(num1);
   num2 = Number(num2);

   if (num1>num2)
       console.log(num1 + " es mayor que "+ num2)
   else if (num1<num2)
       console.log(num2 + " es mayor que "+ num1)
   else
       console.log(num2 + " y "+ num1 + " son iguales")
}

// Ejercicio 3
function ejercicio3() {
   let letter1=prompt("Ingresa una letra:")
   let letter2=prompt("Ingresa otra letra:")

   if (letter1 < letter2)
       console.log(letter1 + " aparece primero en el abecedario que "+ letter2)
   else 
       console.log(letter2 + " aparece primero en el abecedario que "+ letter1)
}

// Ejercicio 5
function ejercicio5() {
   let num1=prompt("Ingresa un número:")
   num1=Number(num1);
   
   if ((num1 > 1) && (num1 < 100))
       if ((num_uno % 2)==0)
           console.log("El número es Par")
       else
           console.log("El número es Impar")
}

console.log("---------Calculadora de Gravedad-------------")

let widht, result, seleccion, factor, astro

widht = prompt("Cual es tu peso:")
seleccion = prompt("Donde quieres calcular tu peso(L=Luna, M=Marte, J=Jupiter")
 
if ( seleccion === 'L' )
   { 
      factor = 1.622 
      astro  = "Luna"
   }
else if ( seleccion === 'M' )
   { 
      factor = 3.711 
      astro  = 'Marte'
   }
else if ( seleccion === 'J' )
   { 
      factor = 24.79 
      astro  = 'Jupiter'
   }
else
   { console.log ('No seleccionó ninguna opción') }

if ( seleccion != '')
    {
    result = ( widht / 9.8 ) * factor
    console.log ('Su peso en ',astro,' es de ',result) 
    }
