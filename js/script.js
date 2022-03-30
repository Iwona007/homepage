console.log("Cześć :), witaj na mojej stronie");

let buttonRemove = document.querySelector(".section__button--remove");
let showTextButton2 = document.querySelector(".js-textShow2");
let section = document.querySelector(".section");
let cloneImage = document.querySelector(".section__button--clone");
let imageAction = document.querySelector(".body__imageStyle");
let target = document.querySelector(".body__imageStyle");
let changeColor = document.querySelector(".js-changeColor");
let colorUpdated = document.querySelector(".section--colorUpdated");
let colorName = document.querySelector(".js-colorName");
let changeText = document.querySelector(".js-changeText");
let textContain = document.querySelector(".js-textContain");

cloneImage.addEventListener("click", (e) => {
    let imageAction = document.querySelector(".body__imageStyle");
    let cloneImage = imageAction.cloneNode(true);
    target.appendChild(cloneImage);
    console.log("obraz.jpg zostało skopiowane.");
});

buttonRemove.addEventListener("click", () => {
    imageAction.remove();
});

changeText.addEventListener("click", (e) => {
    console.log(
        'tekst który się wyświetla w konsoli developera po naciśnięciu "kliknij aby przeczytać" '
    );
    section.classList.toggle("js-newText");
    section.classList.contains("js-newText")
        ? (textContain.innerHTML = "taniec")
        : (textContain.innerHTML = "kliknij aby przeczytać");
});

showTextButton2.addEventListener("click", (e) => {
    showTextButton2.innerText = "To jest nowy tekst napisay za pomocą innerText";
    console.log(
        'teskt który wyświtli się w konsloki developera po naciśnięciu przycisku "Pokaż dodatkowy tekst"'
    );
});

changeColor.addEventListener("click", (e) => {
    colorUpdated.classList.toggle("section--newColor");
    colorUpdated.classList.contains("section--newColor")
        ? (colorName.innerHTML = "Alice blue")
        : (colorName.innerHTML = "Snow");
});
