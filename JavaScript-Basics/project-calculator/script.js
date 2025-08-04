let currentValue = null;
let secondValue = null;
let operator = null;
const screen = document.querySelector('.screen');
screen.textContent = '';

function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function clearScreen() {
    currentValue = null;
    secondValue = null;
    operator = null;
    screen.textContent = '';
}

function calculate() {
    if (currentValue !== null && secondValue !== null && operator) {
        if (operator === '+') currentValue = add(currentValue, secondValue);
        else if (operator === '-') currentValue = subtract(currentValue, secondValue);
        else if (operator === '*') currentValue = multiply(currentValue, secondValue);
        else if (operator === '/') currentValue = divide(currentValue, secondValue);

        secondValue = null;
        operator = null;
        screen.textContent = currentValue;
    }
}

function clicking(x) {
    if (x === '.') {
        clearScreen();
        return;
    }

    if (!isNaN(x)) {
        if (operator === null) {
            if (currentValue === null) currentValue = x;
            else currentValue = currentValue * 10 + x;
            screen.textContent = currentValue;
        } else {
            if (secondValue === null) secondValue = x;
            else secondValue = secondValue * 10 + x;
            screen.textContent = `${currentValue} ${operator} ${secondValue}`;
        }
    } 
    else if (x === '=') {
        calculate();
    } 
    else {
        if (currentValue !== null) {
            if (secondValue !== null) calculate();
            operator = x;
            screen.textContent = `${currentValue} ${operator}`;
        }
    }
}