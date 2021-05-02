console.log("Hello my friend")

let przyciskHide = document.querySelector(".przyciskUkryj")
let przyciskShow = document.querySelector(".przyciskShow")
let przycisktext = document.querySelector(".textShow")

let slonceAkcji = document.querySelector(".slonce");
let target = document.querySelector(".slonce")

// const newElement = slonceAkcji.cloneNode()
// console.log(newElement)

// const clone2 = slonceAkcji.cloneNode(true)
// console.log(clone2)


przyciskShow.addEventListener("click", e => {
    let slonceAkcji = document.querySelector(".slonce");
    let clone = slonceAkcji.cloneNode(true)
    target.appendChild(clone)

});

przyciskHide.addEventListener("click", () => {
    slonceAkcji.remove()
    console.log("Przycisk jest usunięty")
});

przycisktext.addEventListener("click", e => {
    przycisktext.innerText = "Nowy text"

    console.log("tekst który się wyświetla w konsoli developera")
})









