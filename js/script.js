console.log("Hello my friend");

let przyciskHide = document.querySelector(".buttonHide");
let przyciskShow = document.querySelector(".buttonShow");
let przyciskText = document.querySelector(".textShow");
let przyciskText2 = document.querySelector(".textShow2");

let slonceAkcji = document.querySelector(".myImage");
let target = document.querySelector(".myImage");
let todo = document.querySelector(".todo");
let changeColor = document.querySelector(".todoChangecolor");

const newElement = slonceAkcji.cloneNode();
console.log(newElement);

const clone2 = slonceAkcji.cloneNode(true);
console.log(clone2);

przyciskShow.addEventListener("click", e => {
    let slonceAkcji = document.querySelector(".myImage");
    let clone = slonceAkcji.cloneNode(true);
    target.appendChild(clone);
    // console.log("obraz .jpg zostalo skopowane.")
});

przyciskHide.addEventListener("click", () => {
    slonceAkcji.remove();
    console.log("obraz .jpg zostalo usunięte");
});

przyciskText.addEventListener("click", e => {
    przyciskText.innerText = " taniec"
    console.log("tekst który się wyświetla w konsoli developera po naciśnięciu \"kliknij aby przeczytać\" ");
});

przyciskText2.addEventListener("click", e => {
    przyciskText2.innerHTML = "To jest nowy tekst napisay <span>za pomocą innerHTML </span>"
    console.log("teskt który wyświtli się w konsloki developera po naciśnięciu przycisku \"Pokaż dodatkowy tekst\"");
});


changeColor.addEventListener("click", e => {
    todo.classList.toggle("newcolor")
});







