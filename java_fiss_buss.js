function addClass(element, className) {
    element.classList.add(className);
}

function createMatrix(dimension, container, fizzDivisor, buzzDivisor) {
    container.innerHTML = ""; 

    let counter = 1;

    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div");
        addClass(row, "demo");

        for (let j = 0; j < dimension; j++) {

            const box = document.createElement("div");
            addClass(box, "content");
            box.textContent = counter;

        
            const isFizz = counter % fizzDivisor === 0;
            const isBuzz = counter % buzzDivisor === 0;

            if (isFizz && isBuzz) {
                addClass(box, "fizzbuzz");
            } else if (isFizz) {
                addClass(box, "fizz");
            } else if (isBuzz) {
                addClass(box, "buzz");
            }

            row.appendChild(box);
            counter++;
        }

        container.appendChild(row);
    }
}

function buttonClicked() {
    console.log("✅ Botón presionado");

    
    const dimensionInput = document.getElementById("dimension");
    const fizzInput = document.getElementById("fizz-divisor");
    const buzzInput = document.getElementById("buzz-divisor");

    const dimensionValue = parseInt(dimensionInput.value);
    const fizzValue = parseInt(fizzInput.value);
    const buzzValue = parseInt(buzzInput.value);

    console.log(`Dimension: ${dimensionValue}`);
    console.log(`Fizz divisor: ${fizzValue}`);
    console.log(`Buzz divisor: ${buzzValue}`);

    const matrixContainer = document.querySelector(".container");

    createMatrix(dimensionValue, matrixContainer, fizzValue, buzzValue);
}

document.addEventListener("DOMContentLoaded", function () {
    const btnGenerate = document.getElementById("generate");
    btnGenerate.addEventListener("click", buttonClicked);
});
