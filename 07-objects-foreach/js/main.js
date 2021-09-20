
let dataArray = [
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

const getArrayWithObject = (arrayMentor) => 
{
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
let otherArrayMentor = getArrayWithObject(dataArray)
console.log(otherArrayMentor)

