let numbersArrays = [20, 15, 2, 5]

const total = numbersArrays.reduce((accum, number) => {
    // console.log(accum)
    return accum + number
}, 0)
 
console.log(total)
console.log("----------------Reduce arrayFruits-----------------")

const arrayFruits = [
     "banana",
     "banana",
     "fresa", 
     "naranja", 
     "chicozapote", 
     "banana",
     "pera",
     "pera",
     "naranja"
    ]

/*
Obtener
{
    banana: 2,
    fresa: 1,
    naranja: 2,
    chicozapote: 1,
    pera: 2
}
*/

const result = arrayFruits.reduce((accum, fruit, index)=>{
    let count = accum[fruit] ? accum[fruit] + 1 : 1
    // console.log(count)
    // console.log(accum)
    return {
        ...accum,
        [fruit]: count
    }
}, {})
// console.log("----------------")
console.log(result)


/*
 Práctica:
   - obtener los productos de tipo chips and drink
   - obtener todos los productos < a $50 y obtener >= $50
   - obtener el inventario total en valor de todos los productos
   - obtener el inventario total en valor de los productos tipo chips
   - obtener el inventario total en valor de los productos tipo drink
*/

const products = [
    {
        name: 'Coca lata 355ml',
        description: 'Coca lata 355ml',
        price: 11,
        type: 'drink'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    },
    {
        name: 'Boing Mango 1lt',
        description: 'Boing Mango 1lt',
        price: 18,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 3lt No Retornable',
        description: 'Coca-Cola 3lt No Retornable',
        price: 40,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 600ml',
        description: 'Coca-Cola 600ml',
        price: 14,
        type: 'drink'
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      price: 27.5,
      type: 'chip'
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      price: 25.5,
      type: 'chip'
    },
    {
      name: 'Botanas Chips Papas Jalapeño 100 g',
      description: 'Botanas Chips Papas Jalapeño 100 g',
      price: 29.7,
      type: 'chip'
    },
    {
      name: 'Botana Paketaxo Quexo 215 g',
      description: 'Botana Paketaxo Quexo 215 g',
      price: 52.8,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Incógnita 64 g',
      description: 'Botana Doritos Incógnita 64 g',
      price: 18.15,
      type: 'chip'
    },
    {
      name: 'Botana Fritos Sal y Limón 57 g',
      description: 'Botana Fritos Sal y Limón 57 g',
      price: 15.4,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Nacho 58 g',
      description: 'Botana Doritos Nacho 58 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Flamin Hot 62 g',
      description: 'Botana Doritos Flamin Hot 62 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Botanas Chips Papas Fuego Limón 100 g',
      price: 29.7,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Original 42 g',
      description: 'Papas Sabritas Original 42 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Adobadas 42 g',
      description: 'Papas Sabritas Adobadas 42 g',
      price: 16.5,
      type: 'chip'
    },
    {
      name: 'Cacahuates Hot Nuts Multintenso 50 g',
      description: 'Cacahuates Hot Nuts Multintenso 50 g',
      price: 11,
      type: 'chip'
    },
    {
      name: 'Botana Fritos Chorizo Chipotle 57 g',
      description: 'Botana Fritos Chorizo Chipotle 57 g',
      price: 15.95,
      type: 'chip'
    },
    {
      name: 'Botana Chips Sal de Mar Bolsa 170 g',
      description: 'Botana Chips Sal de Mar Bolsa 170 g',
      price: 49.5,
      type: 'chip'
    },
    {
      name: 'Botana Cheetos Poffs 100 g',
      description: 'Botana Cheetos Poffs 100 g',
      price: 34.1,
      type: 'chip'
    },
    {
      name: 'Papas Fritas Stax Cheddar 156 g',
      description: 'Papas Fritas Stax Cheddar 156 g',
      price: 47.85,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Original 240 g',
      description: 'Papas Sabritas Original 240 g',
      price: 75.35,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Nacho 370 g',
      description: 'Botana Doritos Nacho 370 g',
      price: 82.5,
      type: 'chip'
    },
    {
      name: 'Chicharrón de Cerdo Sabritas 115 g',
      description: 'Chicharrón de Cerdo Sabritas 115 g',
      price: 55,
      type: 'chip'
    },
    {
      name: 'Botana Cheetos Torciditos 150 g',
      description: 'Botana Cheetos Torciditos 150 g',
      price: 34.1,
      type: 'chip'
    },
    {
      name: 'Papas Ruffles Queso 290 G',
      description: 'Papas Ruffles Queso 290 G',
      price: 71.5,
      type: 'chip'
    },
    {
      name: 'Dip Tostitos Queso Suave 255 g',
      description: 'Dip Tostitos Queso Suave 255 g',
      price: 69.3,
      type: 'chip'
    }
  ]

/*
*/

const cartShoppings = [
    {
        name: 'Dip Tostitos Queso Suave 255 g',
        description: 'Dip Tostitos Queso Suave 255 g',
        price: 69.3,
        type: 'chip'
    },
    {
        name: 'Dip Tostitos Queso Suave 255 g',
        description: 'Dip Tostitos Queso Suave 255 g',
        price: 69.3,
        type: 'chip'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    }
]

/*
Obtener el importe total a pagar del carrito de los productos selecionados
nombre prodcuto                | cantidad | importe
Dip Tostitos Queso Suave 255 g |     2    |  138.3
Boing Mango 500ml              |     2    |   20
total                                     |  158.3
*/


/**********************************************************************/


console.log("--------------------Practica-----------------------")

// - Obtener los productos de tipo drink and chip
// función producto drink
const productoDrink = producto => producto.type == "drink"
// función productos chip
const productoChip = producto => !productoDrink(producto)

// metodo drink
const drinkProduct = products.filter(productoDrink)
console.log("Productos drink:")
console.log(drinkProduct)

// metodo chip
const chipProduct = products.filter(productoChip)
console.log("Productos chip:")
console.log(chipProduct)

// - Obtener todos los productos < a $50 y obtener >= $50
// función producto barato
const productoBarato = producto => producto.price < 50
const chipperProduct = products.filter(productoBarato)
console.log("Productos Baratos:")
console.log(chipperProduct)

// función producto caro
const productoCaro = producto => !productoBarato(producto)
const costlyProduct = products.filter(productoCaro)
console.log("Productos Caros:")
console.log(costlyProduct)


// - Obtener el inventario total en valor de todos los productos
const inventary = products.reduce((accum, producto) => {
    return producto.price + accum
}, 0)
console.log(`Inventario total productos: $ ${inventary}`)


// - Obtener el inventario total en valor de los productos tipo chips
const totalInventaryChip = (arrayProducts) => {
    let inventaryChip = arrayProducts.filter(producto => producto.type === "chip")
    let totalChip = inventaryChip.reduce((accum, producto) => {
        return accum + producto.price
    }, 0)
    return totalChip
}
let chip = totalInventaryChip(products)
console.log(`Inventario total productos chip: $ ${chip}`)


// - Obtener el inventario total en valor de los productos tipo drink
const totalInventaryDrink = (arrayProducts) => {
    let inventaryDrink = arrayProducts.filter(producto => producto.type === "drink")
    let totalDrink = inventaryDrink.reduce((accum, producto) => {
        return accum + producto.price
    }, 0)
    return totalDrink
}
let drink = totalInventaryDrink(products)
console.log(`Inventario total productos drink: $ ${drink}`)