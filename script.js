function addition(a,b) {
    let result =  +a + +b;
    display.textContent = '';
    display.textContent += result;
    digits.number1 = result;
    digits.operator = null;
    digits.number2 = null;
}

function subtraction(a,b) {
    let result = +a - +b;
    display.textContent = '';
    display.textContent += result;
    digits.number1 = result;
    digits.operator = null;
    digits.number2 = null;
}

function multiplication(a,b) {
    let result = +a * +b;
    display.textContent = '';
    display.textContent += result;
    digits.number1 = result;
    digits.operator = null;
    digits.number2 = null;
}

function division(a,b) {
    if (a == 0 || b == 0) {
        display.textContent = '';
        display.textContent += "Don't do that.";
    } else {
        let result = a / b;
        display.textContent = '';
        display.textContent += result;
        digits.number1 = result;
        digits.operator = null;
        digits.number2 = null;
    }
}

function operate(a, o, b) {
    if (o === "+") {
        addition(a,b);
    } else if (o === "-") {
        subtraction(a,b);
    } else if (o === "×") {
        multiplication(a,b);
    } else if (o === "÷") {
        division(a,b);
    }
    digits.digitCount = 0;
}

const buttons = document.querySelectorAll(".button-number");
const display = document.querySelector(".display");
const clear = document.querySelector('#clear');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equal');
const digits = {
    number1: null,
    operator: null,
    number2: null,
    isDecimal: false,
    digitCount: 0
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (digits.digitCount < 11) {
        if (digits.number1 !== null && digits.number2 === null) {
            if (e.target.textContent !== ".") {
            digits.number2 = '';
            display.textContent = '';
            display.textContent += e.target.textContent;
            digits.number2 += e.target.textContent;
            digits.digitCount += 1;
            }

        } else if (digits.number1 !== null && digits.number2 !== null) {
            if (e.target.textContent === ".") {
                if (digits.isDecimal === false) {
                    digits.isDecimal = true;
                    digits.number2 += e.target.textContent;
                    display.textContent += e.target.textContent;
                    digits.digitCount += 1;
                }
            } else {
            digits.number2 += e.target.textContent;
            display.textContent += e.target.textContent;
            digits.digitCount += 1;
            }

        } else {

            if (e.target.textContent === ".") {
                if (digits.isDecimal === false) {
                    digits.isDecimal = true;
                    display.textContent += e.target.textContent;
                    digits.digitCount += 1;
                }
            } else {
            display.textContent += e.target.textContent;
            digits.digitCount += 1;

            }
        }

    }
    })
})

clear.addEventListener('click', () => {
    display.textContent = '';
    digits.number1 = null;
    digits.operator = null;
    digits.number2 = null;
    digits.isDecimal = false;
    digits.digitCount = 0;
})

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (digits.number1 === null) {
            digits.number1 = display.textContent;
            display.textContent += (' ' + e.target.textContent);
            digits.digitCount = 0;
        }
        
        if (digits.number1 !== null && digits.number2 !== null && digits.operator !== null) {
            operate(digits.number1, digits.operator, digits.number2);
            display.textContent += (' ' + e.target.textContent);
        }
        digits.isDecimal = false;
        digits.operator = e.target.textContent;
    })
})

equals.addEventListener('click', () => {
    if (digits.number1 !== null && digits.number2 !== null && digits.operator !== null) {
        operate(digits.number1, digits.operator, digits.number2);
        digits.isDecimal = false;
    }
})