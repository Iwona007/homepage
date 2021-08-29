let heightElement = document.querySelector(".js-height");
let wightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");
// console.log(heightElement)
// heightElement.focus()

heightElement.addEventListener("input", () => {
    console.log(`Aktualny wzrost ${heightElement.value}`)
});

formElement.addEventListener("reset", () => {
    console.log('Formularz zosta zresetowany.')
});


// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log('Formularz zosta wysłany.')
// });

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let height = heightElement.value;
    let weight = wightElement.value;
    let bmi = weight / ((height / 100) ** 2)

    bmiElement.innerText = bmi.toFixed(2)
    console.log(bmi)
});


// tak przelicza się cały czas czyli że w locie, dochodzi do interakcji natychmiast gdy użytkownik zmieni cś
// w polu . lepiej submit bo wtedy formularz jest zwalidowany, sprawdzony czy np są właście licze, czy nie ma np NaN
// EventListener wystrczy dodąc w jednym miejscu w formularzu dlatego że zdarzenia ida w górę DOM w górę formularza a więć 
// wystrczy w jednym miejscu. 
// formElement.addEventListener("input", () => {
  
//     let height = heightElement.value;
//     let weight = wightElement.value;
//     let bmi = weight / ((height / 100) ** 2)

//     bmiElement.innerText = bmi.toFixed(2)
//     console.log(bmi)
// });