'use strict';
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
  if (operator === 'add') {
    return add(num1, num2);
  } else if (operator === 'subtract') {
    return subtract(num1, num2);
  } else if (operator === 'multiply') {
    return multiply(num1, num2);
  } else if (operator === 'divide') {
    return divide(num1, num2);
  } else if (operator === 'percent') {
    return percent(num1, num2);
  }
}

function clear() {}
