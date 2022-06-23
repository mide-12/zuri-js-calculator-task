function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}


function calculate() {
    var num1 = parseInt(prompt("Enter first number"));
    var num2 = parseInt(prompt("Enter second number"));
    var operator = prompt("Enter operator eg: +, -, *, /");
    var result;
    if (operator == "+") {
        result = add(num1, num2);
    } else if (operator == "-") {
        result = subtract(num1, num2);
    } else if (operator == "*") {
        result = multiply(num1, num2);
    } else if (operator == "/") {
        result = divide(num1, num2);
    } else {
        alert("Please enter a valid operator");
    }
    alert(result);
}
calculate();
