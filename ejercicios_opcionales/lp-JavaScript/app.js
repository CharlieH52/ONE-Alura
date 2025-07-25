/*
 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
    De lo contrario, muestra "¡Buena semana!".
*/

function day_week(){
    let day = prompt("Que dia de la semana es?");
    
    if (day == "Sabado" || day == "Domingo") {
        alert("Buen fin de semana!");
    } else {
        alert("Bonita semana!");
    }
}

/*
2.  Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
*/
function positive_negative(){
    let number = prompt("Ingresa un numero:");
    
    if (number != 0){
        if (number > 0) {
            alert("El numero es positivo.");
        }
        
        if (number < 0) {
            alert("El numero es negativo.");
        }
    } else {
        alert("El numero es cero.");
    }
}

/*
3.  Crea un sistema de puntuación para un juego.
    Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
    En caso contrario, muestra "Intentalo nuevamente para ganar.".
*/
function my_score(){
    const maxPuntaje = 100;
    let puntaje = prompt("Ingresa tu puntaje:");
    if (puntaje < maxPuntaje) {
        alert("Intentalo nuevamente para ganar.");
    }
    
    if (puntaje >= maxPuntaje){
        alert("Felicidades, has ganado!");
    }
}

/*
4.  Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
*/
function cash(){
    let saldo = 5000;
    alert("Tu saldo actual es: $" + saldo);
}

/*
5.  Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

