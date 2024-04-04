const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleClick(button);
  });
});

function handleClick(button) {
  const btnValue = button.innerHTML;
  const result = document.getElementById("res");
  const currentExpression = result.innerHTML;

  if (btnValue === "C") {
    result.innerHTML = "";
    return;
  }

  if (btnValue === "=") {
    const BinaryResult = calculateBinaryResult(currentExpression);
    updateResultDisplay(BinaryResult);
    return;
  }

  result.innerHTML += btnValue;
}

function calculateBinaryResult(expression) {
  const operator = expression.match(/[+\-*\/]/)[0];
  const operands = expression.split(/[+\-*\/]/);

  // convert to decimal
  const operand1 = parseInt(operands[0], 2);
  const operand2 = parseInt(operands[1], 2);

  let result = null;

  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;

    case "-":
      result = operand1 - operand2;
      break;

    case "*":
      result = operand1 * operand2;
      break;

    case "/":
      result = Math.floor(operand1 / operand2);
      break;

    default:
      return "Invalid operator";
  }

  // convert to binary
  return result.toString(2);
}

function updateResultDisplay(expression) {
  const result = document.getElementById("res");
  result.innerHTML = expression;
}
