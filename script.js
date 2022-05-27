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