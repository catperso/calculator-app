function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));

alert(subtract(number1, number2));