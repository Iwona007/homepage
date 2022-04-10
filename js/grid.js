const myFunction = () => {
    console.log("to jest funkcja")
}

console.log(typeof myFunction === "function") //true

(
    () => {

        welcome();

        function welcome () {
            console.log("Hello")
        }

        var variable = 5;
        
    }
)(); // samowywolujaca sie funkcja