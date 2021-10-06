
// Vanilla
document.getElementById("save-user").addEventListener("click", () => {
    console.log("Guardando usuario...")
})

// jQuery
$("#save-user").click(() => {
    console.log("Click desde jQuery")
})

$("#toggle-text").click(() => {
    // ocultar elemento con vanilla y clases
    // document.getElementById("text").classList.add("d-none")

    // // ocultar elemento con jQuery
    // $("#text").hide()

    // // vanilla
    // let elemento = document.getElementById("text")
    // let elementoHasClass = elemento.classList.contains("d-none")

    // elementoHasClass
    //     ? elemento.classList.remove("d-none")
    //     : elemento.classList.add("d-none")

    // jQuery
    $("#text").toggle()


})