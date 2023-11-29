'use strict';


document.getElementById('start').addEventListener('click', function () {
    const str = document.getElementById('calculation').value;
    const inputs = str.split('');
    const num1 = parseFloat(inputs[0]);
    const num2 = parseFloat(inputs[2]);
    const operation = inputs[1];
    const resultElement = document.getElementById('result');
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Select an operation';
    }

    resultElement.textContent = 'Result: ' + result;
});