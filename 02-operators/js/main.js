// console.log("Hola compañeros")

// console.error("Esto es un error")

// console.warn("Esto es un warning")

// // 3 métodos para interactuar con el usuario

// // alert("Esto es un mensaje para alertarlos!!")

// let name = prompt("Ingresa tu nombre")
// // retorna un string

// console.log(name)

// /* 

// Operadores:

 
// ----- Aritmeticos -------
// [ + - * / % () ]

// ----- Relacionales -------
// [< > <= >= == === != !==]

// ----- Asignación ---------

// = -> Asigna un valor a una variable
// == -> Comparación de valores
// === -> Comparación de tipo de datos y de valor

// ----- Incremento | Decremento ----------

// */
// console.log("----------Operadores--------------")
// let operation=5+(5-10)*3
// console.log(operation)


// console.log("----------Relacionales--------------")

// console.log(8>9)
// console.log(10<20)
// console.log(8>=15)
// console.log(9<=10)

// let string1="hola"
// let string2="hola koders"

// console.log(string1>string2)

// console.log("------------Comparación-------------")

// console.log(7==7)
// console.log("7"==7)
// console.log("7"===7)


// console.log("----------Operadores de Asignación--------------")


// let number1=1

// // number1 = number1 + 5
// number1+=5
// number1*=2
// number1/=5
// number1-10

// console.log(number1)



// console.log("----------Incremento y Decremento--------------")

// let  number2=2

// number2++
// number2--

// console.log(number2)

console.log("----------Ejercicios--------------")

let num1 = prompt("Ingresa un número")
let num2 = prompt("Ingresa otro número")
// retorna un string
num1=Number(num1);
num2=Number(num2);

let result1=num1+num2
let result2=num1-num2
let result3=num1*num2
let result4=num1/num2
let result5=num1%num2

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)


console.log("-------------Calculadora de Gravedad----------------")

let name, widht, result, seleccion, factor, astro
name = prompt("Cual es tu nombre:")
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
