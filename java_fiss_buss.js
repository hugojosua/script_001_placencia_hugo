
function addClass(contenedordiv, className) {
    contenedordiv.classList.add(className);
}

function createMatrix(dimension, container) {
    let counter = 1;

    for (let i = 0; i < dimension; i++) {
        const div = document.createElement("div");
        addClass(div, "demo");

        for (let j = 0; j < dimension; j++) {

            const content = document.createElement("div");
            addClass(content, "content");

            content.textContent = counter;

            fizz(2, content, counter);
            buzz(3, content, counter);
            fizzBuzz(2, 3, content, counter);

            div.appendChild(content);
            counter++;
        }

        container.appendChild(div);
    }
}
function buzz(divisor, square, number) {
    if (number % divisor === 0) {
        console.log("BUZZ:", number);
        addClass(square, "buzz");
    }
}

function fizz(divisor, square, number) {
    if (number % divisor === 0) {
        console.log("FIZZ:", number);
        addClass(square, "fizz");
    }
}

function fizzBuzz(fizzDiv, buzzDiv, square, number) {
    const isFizz = number % fizzDiv === 0;
    const isBuzz = number % buzzDiv === 0;

    if (isFizz && isBuzz) {
        console.log("FIZZBUZZ:", number);
        addClass(square, "fizz");
        addClass(square, "buzz");
        addClass(square, "fizzbuzz");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    createMatrix(3, container);
});
