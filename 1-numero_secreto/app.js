// CONFIG
let startedgame = false;
let capNumber = 10;
let userTrys = 3;
let count = 0;
let secretNumber = set_random_number();

const tryCap = document.getElementById("tryCap");
const tryButton = document.getElementById("try");
const resetButton = document.getElementById("reiniciar");
const finalMsg = document.querySelector("h1");
const outMsg = document.querySelector(".texto__parrafo");

function win_game(){
    finalMsg.innerText = "GANASTE!";
}

function lose_game() {
    finalMsg.innerText = "UPS!"
    outMsg.innerText = "Mas suerte para la proxima..."
}

function get_try_cap_number() {
    cap = tryCap.value;
    return cap;
}

function set_random_number() {
    let randomNumber = Math.random() * capNumber;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

function user_try(sNumber) {
    let userChoice = tryCap.value;

    if (userChoice < sNumber) {
        console.log(`El numero es mayor que ${userChoice}`);
    }

    if (userChoice > sNumber) {
        console.log(`E numero es menor que ${userChoice}`);
    }

    if (userChoice == sNumber) {
        console.log(`Felicidades, has ganado! El numero es: ${sNumber}.`);
        win_game();
    }
}

tryButton.addEventListener("click", function() {
    if (count < userTrys) {
        user_try(secretNumber);
        count++;
    } else {
        console.log("Ya no quedan intentos.");
        lose_game();
    }

});

resetButton.addEventListener("click", function() {
    if (startedgame == true) {
        startedgame = false;
        console.log("Juego detenido");
    }
});