'use strict';

const display = document.querySelector('.display');
display.textContent = 'Waiting for Input';

const btns = document.querySelectorAll('button');
let num1 = '';
let num2 = '';
let operator = '';

// Events
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.textContent === '=') {
      let calculation = operate(operator, +num1, +num2);
      display.textContent = calculation;
      calculation = num1;
    } else if (btn.textContent.toLowerCase() === 'c') {
      clear();
    } else if (!isNaN(+btn.textContent) && num1 !== '') {
      num2 += btn.textContent;
      display.textContent = +num2;
    } else if (!isNaN(+btn.textContent)) {
      num1 += +btn.textContent;
      display.textContent = +num1;
    } else if (isNaN(+btn.textContent)) {
      operator = btn.textContent;
    }
  });
});

function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function subtract(num1, num2) {
  let difference = num1 - num2;
  return difference;
}

function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

function divide(num1, num2) {
  let quotient = num1 / num2;
  return quotient;
}

function percent(num1) {
  let percentage = num1 / 100;
  return percentage;
}

function operate(operator, num1, num2) {
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1, num2);
  } else if (operator === '/') {
    return divide(num1, num2);
  } else if (operator === '%') {
    return percent(num1, num2);
  }
}

function clear() {
  num1 = '';
  num2 = '';
  display.textContent = 'Waiting for Input';
}
