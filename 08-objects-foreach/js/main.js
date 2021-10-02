
const personObject = {
    name: "Armando",
    lastName: "Rios",
    gender: "Masculino",
    age: 26,
    isSingle: true,
    hobbies: [
        "Ver series",
        "Programar",
        "Jugar tennis",
        "Tocar guitarra"
    ],
    socialNetwork: {
        facebook: "Armando Rios",
        instagram: "@armandoriosg"
    },
    saludo: function () {
        console.log("Qué pasa chavales!!")
    }
}
console.log(personObject) 

// Accedo a las propiedades del objeto
// por medio de la notación de punto.
console.log(personObject.name)
console.log(personObject.age)
console.log(personObject.gender)

// también por medio de la notación de CORCHETES
console.log(personObject["hobbies"])


// Para agregar una propiedad con la siguiente sintaxis:
personObject.birthDate = "1995/04/29"
personObject.zodiacal = "Tauro"
console.log(personObject)

// Para acceder a un string del objeto:
console.log(personObject.hobbies[2])

// Para acceder a las propiedades de un objeto dentro de otro objeto: 
console.log(personObject.socialNetwork.instagram)

// Para ejecutar una función dentro del objeto:
personObject.saludo()

// Para agregar elementos a un arreglo dentro del objeto:
personObject.hobbies.push("Cantar")



// Imprimir "Hola soy {name} {lastName} y tengo {age}"
let concatName = `Hola soy ${personObject.name} ${personObject.lastName} y tengo ${personObject.age} años`
console.log(concatName)

// Otra forma de imprimir declarando variables
let namePerson = personObject.name
let lastNamePerson = personObject.lastName
let agePerson = personObject.age

console.log(`Hola soy ${namePerson} ${lastNamePerson} y tengo ${agePerson} años`)


// DESTRUCTURING ASSIGMENT
// Sintaxis: {Que propiedades quiero obtener} = De que objeto las voy a obtener ?

let { name, lastName, age } = personObject

console.log(name)
console.log(lastName)
console.log(age)

console.log(`Hola soy ${name} ${lastName} y tengo ${age} años`)





let arrayMentor = [
    ["Fernanda", "Palacios"],
    ["Alfred", "Altamirano"],
    ["Angel", "Resendiz"],
    ["Elda", "Corona"],
    ["Tux", "Tuxtla"],
    ["Jorge", "De Buen"]
]

/*
const arrayMentor = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },
]
*/

console.log("-------------------Ejercicio------------------------")

// Logica tradicional
const getArrayWithObject = (arrayMentor) => {
    let newArrayMentor = []
    for(let i = 0; i < arrayMentor.length; i++) 
    {
        console.log(arrayMentor[i])
        let name = arrayMentor[i][0]
        let lastName = arrayMentor[i][1]
        let mentorObject = {name, lastName}
        newArrayMentor.push(mentorObject)
    }
    return newArrayMentor
}
let otherArrayMentor = getArrayWithObject(arrayMentor)
console.log(otherArrayMentor)

// Mismo ejercicio con For Each

let printMentor = []
arrayMentor.forEach((array)=>{
    const objectMentor = {
        name: array[0],
        lastName: array[1]
    }
    printMentor.push(objectMentor)
})
console.log(printMentor)


console.log("---------------------For Each------------------------")

// Recorrer array con ForEach:
let namesArray = [
    "Elias",
    "Pao",
    "Pepe",
    "Toño",
    "Nancy",
    "Pablo"
]

namesArray.forEach((name, index) => {
    console.log(`El nombre es: ${name} en la posición ${index}`)
})




/****************************************************************/



let mentorsArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
            {
                signature:  "HTML",
                score: 10
            },
        ]
    }
]

/*
- Obtener el score promedio de cada materia (HTML, CSS, JS)

- Obtener el promedio de cada mentor

- Crear un array de string con la siguiente forma:
    "Mi nombre es {name} y mi promedio es {promedio}"

- Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/


console.log("-------------Promedio por Materia------------------")

const averageByAsignatures = (arrayMentor) => {

    let htmlAccum = 0
    let cssAccum = 0
    let jsAccum = 0
    let mentorsAccum = arrayMentor.length
    
    arrayMentor.forEach((mentorObject, index) => {
        // console.log(mentorObject)
        mentorObject.scores.forEach((scoreMentor) => {
            // console.log(scoreMentor)
            let signature = scoreMentor.signature
            let score = scoreMentor.score

            switch(signature) {
                case "HTML":
                    htmlAccum += score
                    break;
                case "CSS":
                    cssAccum += score
                    break;
                case "JS":
                    jsAccum += score
                    break;
                default:
                    console.log("Nada de nada")
            }
        })
    })

    let promHtml = htmlAccum / mentorsAccum
    let promCss = cssAccum / mentorsAccum
    let promJs = jsAccum / mentorsAccum

    let objectAvg = {promHtml, promCss, promJs}
    return objectAvg
}
// Invocar
let promedioAsignatura = averageByAsignatures(mentorsArray)
console.log(promedioAsignatura)

/******************Promedio individual por mentor**************************/
console.log("-------------Promedio por Mentor------------------")

const averageByMentor = (scoresArray) => {
    let accumMentor = 0
    let scoresAccum = scoresArray.length
    scoresArray.forEach((scoreMentor) => {
        let valueScore = scoreMentor.score
        accumMentor += valueScore
    })
    let promMentor = accumMentor / scoresAccum
    return promMentor
}

let arrayAverageMentors = []
mentorsArray.forEach((mentor) => {
    let avg = averageByMentor(mentor.scores)
    let objectMentor = { name: mentor.name, average: avg }
    arrayAverageMentors.push(objectMentor)
})
console.log(arrayAverageMentors)

console.log("-------------Promedio Mayor a 9.5------------------")

let mentorsTop = []

arrayAverageMentors.forEach((mentor) => {
    mentor.average >= 9.5 ? mentorsTop.push(mentor) : null
})
console.log(mentorsTop)