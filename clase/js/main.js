let mentorsArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature: "HTML",
                score: 10
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature: "HTML",
                score: 10
            },
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature: "HTML",
                score: 10
            },
            {
                signature: "CSS",
                score: 8
            },
            {
                signature: "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "HTML",
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