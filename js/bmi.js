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
})