function addition(a,b) {
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function multiplication(a,b) {
    return a * b;
}

function division(a,b) {
    return a / b;
}

function operate(a, o, b) {
    if (o == "+") {
        addition(a,b);
    } else if (o == "-") {
        subtraction(a,b);
    } else if (o == "*") {
        multiplication(a,b);
    } else if (o == "/") {
        division(a,b);
    }
}

const buttons = document.querySelectorAll(".button-number");
const display = document.querySelector(".display");
const clear = document.querySelector('#clear');
const operators = document.querySelectorAll('.operator');
let displayValue = display.textContent;
const digits = {
    number1: displayValue,
    operator: null,
    number2: 0
}

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        display.textContent += (` ${e.target.textContent}`);
        //if number 1 = empty add displayValue to digits.number1
        //if not empty = add displayValue to digits.number2
        //run operate function
        digits.operator = e.target.textContent;
        digits.number1 = displayValue;
    })
})

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let toDisplay = e.target.textContent;
        display.textContent += toDisplay;
        displayValue += toDisplay;
    })
})

clear.addEventListener('click', () => {
    display.textContent = '';
    displayValue = '';
    digits.number1 = null;
    digits.operator = null;
})