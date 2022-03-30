console.log("Cześć :), witaj na mojej stronie");

let buttonRemove = document.querySelector(".buttonRemove");
let showTextButton2 = document.querySelector(".textShow2");
let section = document.querySelector(".section");
let cloneImage = document.querySelector(".buttonClone");
let imageAction = document.querySelector(".imageStyle");
let target = document.querySelector(".imageStyle"); 
let todo = document.querySelector(".todo");
let changeColor = document.querySelector(".todoChangecolor");
let color = document.querySelector(".color");
let changeText = document.querySelector(".changeText");
let textContain = document.querySelector(".textContain");


cloneImage.addEventListener("click", e => {
    let imageAction = document.querySelector(".imageStyle");
    let cloneImage = imageAction.cloneNode(true);
    target.appendChild(cloneImage);
    console.log("obraz.jpg zostało skopiowane.");
});

buttonRemove.addEventListener("click", () => {
    imageAction.remove();
});

changeText.addEventListener("click", e => {
    console.log("tekst który się wyświetla w konsoli developera po naciśnięciu \"kliknij aby przeczytać\" ");
    section.classList.toggle("newText");
    if(section.classList.contains("newText")) {
        textContain.innerHTML= "taniec";
    } else {
        textContain.innerHTML = "kliknij aby przeczytać";
    }
});

showTextButton2.addEventListener("click", e => {
    showTextButton2.innerText = "To jest nowy tekst napisay za pomocą innerText";
    console.log("teskt który wyświtli się w konsloki developera po naciśnięciu przycisku \"Pokaż dodatkowy tekst\"");
});

changeColor.addEventListener("click", e => {
    todo.classList.toggle("newcolor");
    if (todo.classList.contains("newcolor")) {
        color.innerHTML = "Alice blue";
        console.log(`teraz jest: Alice blue`)
    } else {
        color.innerHTML = "Snow";
        console.log(`teraz jest: Snow`)
    }
});










