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

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (digits.number1 !== null && digits.number2 === null) {
            digits.number2 = '';
            display.textContent = '';
            display.textContent += e.target.textContent;
            digits.number2 += e.target.textContent;
        } else if (digits.number1 !== null && digits.number2 !== null) {
            digits.number2 += e.target.textContent;
            display.textContent += e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
    })
})

clear.addEventListener('click', () => {
    display.textContent = '';
    digits.number1 = null;
    digits.operator = null;
    digits.number2 = null;
})

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (digits.number1 === null) {
            digits.number1 = display.textContent;
        }
        
        if (digits.number1 !== null && digits.number2 !== null && digits.operator !== null) {
            operate(digits.number1, digits.operator, digits.number2);
        }
        digits.operator = e.target.textContent;
        display.textContent += (' ' + e.target.textContent);
    })
})

equals.addEventListener('click', () => {
    if (digits.number1 !== null && digits.number2 !== null && digits.operator !== null) {
        operate(digits.number1, digits.operator, digits.number2);
    }
})
// Numbers added to display get an HTML id with their value
// Value is used when adding to number1 and number 2
// After operator button is pushed, if number1 has a value, the next number is added with an id of the value, and based on that value it is added to number2