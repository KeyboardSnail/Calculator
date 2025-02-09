var number1 = "";
var number2 = "";
var result = null;
var equalSign = document.getElementById("equal");

var isNumber1Ready = false;

// Function for adding numbers
function formNumber(n) {
    // Clear the display if a new number is entered after getting the result
    if (result !== null) {
        number1 = "";
        number2 = "";
        isNumber1Ready = false;
        result = null;
    }

    if (!isNumber1Ready) {
        if (number1.length < 10) {
            number1 += n;
            document.getElementById("displayNumb").textContent = number1;
        }
    } else {
        if (number2.length < 10) {
            number2 += n;
            document.getElementById("displayNumb").textContent = number2;
        }
    }
}

// Functions for operations
function sum(n1, n2) { return n1 + n2; }
function subtract(n1, n2) { return n1 - n2; }
function multiply(n1, n2) { return n1 * n2; }
function divide(n1, n2) { return n2 !== 0 ? n1 / n2 : "Error"; }

// Function for equal button - This is a higher-order function
function cal(p1, p2, operation) {
    p2 = Number(p2);
    result = operation(p1, p2);
    document.getElementById("displayNumb").textContent = result;
}

// Function for clicking on operation signs
function opSum() {
    prepareOperation(sum);
}
function opSub() {
    prepareOperation(subtract);
}
function opMul() {
    prepareOperation(multiply);
}
function opDiv() {
    prepareOperation(divide);
}

function prepareOperation(operation) {
    number1 = Number(number1);
    isNumber1Ready = true;
    number2 = ""; // Reset number2 for new input
    equalSign.setAttribute("onclick", `cal(number1, number2, ${operation.name})`);
}
