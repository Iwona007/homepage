console.log("Cześć :), witaj na mojej stronie");

let buttonRemove = document.querySelector(".buttonRemove");
let showTextButton = document.querySelector(".textShow");
let showTextButton2 = document.querySelector(".textShow2");

let cloneImage = document.querySelector(".buttonClone");
let imageAction = document.querySelector(".imageStyle");
let target = document.querySelector(".imageStyle");
let todo = document.querySelector(".todo");
let changeColor = document.querySelector(".todoChangecolor");
let color = document.querySelector(".color")

cloneImage.addEventListener("click", e => {
    let imageAction = document.querySelector(".imageStyle");
    let cloneImage = imageAction.cloneNode(true);
    target.appendChild(cloneImage);
    // console.log("obraz .jpg zostalo skopowane.")
});


buttonRemove.addEventListener("click", () => {
    imageAction.remove();
});

showTextButton.addEventListener("click", e => {
    showTextButton.innerText = " taniec"
    console.log("tekst który się wyświetla w konsoli developera po naciśnięciu \"kliknij aby przeczytać\" ");
});

showTextButton2.addEventListener("click", e => {
    showTextButton2.innerHTML = "To jest nowy tekst napisay <span>za pomocą innerHTML </span>"
    console.log("teskt który wyświtli się w konsloki developera po naciśnięciu przycisku \"Pokaż dodatkowy tekst\"");
});

changeColor.addEventListener("click", e => {
    todo.classList.toggle("newcolor");
    if (todo.classList.contains("newcolor")) {
        color.innerHTML = "Snow";
    } else {
        color.innerHTML = "Alice blue";
    }
});










