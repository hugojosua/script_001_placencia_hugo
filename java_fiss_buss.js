function addClass(element, className) {
    element.classList.add(className);
}

function createMatrix(dimension, container) {
    let counter = 1;

    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div");
        addClass(row, "demo");

        for (let j = 0; j < dimension; j++) {

            const box = document.createElement("div");
            addClass(box, "content");
            box.textContent = counter;

            // REGLAS
            const isFizz = counter % 2 === 0;
            const isBuzz = counter % 3 === 0;

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

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    createMatrix(10, container); // puedes subirlo a 10x10 como en tu foto
});
