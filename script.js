let currentInput = '0';
let operator = null;
let firstOperand = null;
let awaitingNextNumber = false;

const displayElement = document.getElementById('display');

function appendNumber(number) {
    if (currentInput === '0' || awaitingNextNumber) {
        currentInput = number;
        awaitingNextNumber = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function chooseOperation(op) {
    if (operator !== null) {
        calculate();
    }
    operator = op;
    firstOperand = currentInput;
    awaitingNextNumber = true;
}

function calculate() {
    if (operator === null || awaitingNextNumber) {
        return;
    }
    const secondOperand = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    firstOperand = null;
    awaitingNextNumber = false;
    updateDisplay();
}

function updateDisplay() {
    displayElement.textContent = currentInput;
}
