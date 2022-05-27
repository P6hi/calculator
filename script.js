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
    let result = a / b;
    display.textContent = '';
    display.textContent += result;
}

function operate(a, o, b) {
    if (o == "+") {
        addition(a,b);
    } else if (o == "-") {
        subtraction(a,b);
    } else if (o == "×") {
        multiplication(a,b);
    } else if (o == "÷") {
        division(a,b);
    }
}

const buttons = document.querySelectorAll(".button-number");
const display = document.querySelector(".display");
const clear = document.querySelector('#clear');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equal');
const digits = {
    number1: null,
    operator: null,
    number2: null
}

// Numbers added to display get an HTML id with their value
// Value is used when adding to number1 and number 2
// After operator button is pushed, if number1 has a value, the next number is added with an id of the value, and based on that value it is added to number2