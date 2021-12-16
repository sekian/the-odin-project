let currentOperation = null;
let firstOperand = '';
let secondOperand = '';
let resetDisplay = false;

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const lastOperationDisplay = document.getElementById('previousOperation');
const currentOperationDisplay = document.getElementById('currentOperation');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const dotButton = document.getElementById('dot');

equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
dotButton.addEventListener('click', appendDot)

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

function appendNumber(number) {
    if (currentOperationDisplay.textContent === '0' || resetDisplay) 
        resetScreen();
    currentOperationDisplay.textContent += number;
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate();
    firstOperand = currentOperationDisplay.textContent;
    currentOperation = operator;
    lastOperationDisplay.textContent = `${firstOperand} ${currentOperation}`;
    resetDisplay = true;
}

// Should remove two characters if its a negative value...!
function deleteNumber() {
    if (currentOperationDisplay.textContent.length === 1) {
        currentOperationDisplay.textContent = '0';
        return;
    }
    let removeNumber = currentOperationDisplay.textContent.toString().slice(0, -1);
    currentOperationDisplay.textContent = removeNumber;
}

function resetScreen() {
    currentOperationDisplay.textContent = '';
    resetDisplay = false;
}

function clear() {
    currentOperationDisplay.textContent = '0';
    lastOperationDisplay.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function evaluate() {
    if (currentOperation === null || resetDisplay) return;
    secondOperand = currentOperationDisplay.textContent;
    let result = operate(currentOperation, firstOperand, secondOperand);
    currentOperationDisplay.textContent = roundResult(result);
    lastOperationDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return substract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return null;
    }
}

function appendDot() {
    if (resetDisplay) resetScreen();
    if (currentOperationDisplay.textContent === '')
      currentOperationDisplay.textContent = '0';
    if (currentOperationDisplay.textContent.includes('.')) return;
    currentOperationDisplay.textContent += '.';
  }
