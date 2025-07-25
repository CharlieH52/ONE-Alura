// DESAFIO 1
function concat_name(){
    let userName = prompt("Ingresa tu nombre para acceder:");
    alert("Bienvenido! " + userName);
}

let min = 1;
let max = 10;
while (min <= 10) {
    console.log("Conteo actual: " + min);
    min++;
}

let numStart = 10;
let numEnd = 0;

while (numStart >= numEnd) {
    console.log("Contador hacia atras: " + numStart);
    numStart--;
}

let temporizador = prompt("Asigna un valor al temporizador:");
let tiempoFinal = 0;

while (temporizador >= tiempoFinal) {
    console.log("Cuenta actual: " + temporizador);
    temporizador--;
}

let conteo = prompt("Digita el numero a contar:");
let inicio = 0;

while (inicio <= conteo) {
    console.log("Pasos alcanzados: " + inicio + ", " + conteo);
    inicio++;
}

conteo == 1 ? "a" : "b";

// DESAFIO 2

/*
    Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function hello_world() {
    console.log("Hola, mundo!");
}

/*
    Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/
function say_my_name(name) {
    console.log(`Hello, ${name}`);
}

/*
    Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/
function double(number) {
    return number * 2;
}

/*
    Crear una función que reciba tres números como parámetros y devuelva su promedio.
*/
function average(number1, number2, number3) {
    return (number1 + number2 + number3) / 3;
}

/*
    Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
*/
function min_max(number1, number2) {
    let max = ""
    if (number1 > number2) {
        max = `${number1} es mayor que ${number2}`;
        console.log(max);
    }

    if (number2 > number1) {
        max = `${number2} es mayor que ${number1}`;
        console.log(max);
    }

    return max;
}

/*
    Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/
function plus_ultra(number) {
    return number * number;
}

// DESAFIO 3
/*
    Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/
function calculate_imc(weight, height) {
    return weight / (height * height);
}

/*
    Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/
function calculate_factorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        console.log(`${factorial} X ${i} = ${factorial * i}`);
        factorial *= i;
    }
}

/*
    Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
*/
function money_converter(dollar) {
    return 18.56 * dollar;
}

/*
    Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
*/
function rectangle(width, height) {
    let area = width * height;
    let perimeter = (width * 2) + (height * 2);
    console.log(`Perimetro: ${perimeter}, Area: ${area}`);
}

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/
function circle(radio) {
    let area = Math.PI * (radio * radio);
    let perimeter = 2 * pi * radio;
    console.log(`Perimetro: ${perimeter}, Area: ${area}`);
}

/*
    Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/
function generate_table(number) {
    let base = 1;
    while (base <= 10) {
        product = number * base;
        console.log(`${number} X ${base} = ${product}`);
        base++;
    }
}