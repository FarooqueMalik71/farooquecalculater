let lastInput = ""; // Keeps track of the last entered character

function getNumber(num) {
    const result = document.getElementById("result");

    // Prevent consecutive operators
    if (["+", "-", "*", "/", "%"].includes(num) && ["+", "-", "*", "/", "%"].includes(lastInput)) {
        return; // Do nothing if last input was an operator
    }

    // Append the current input
    result.value += num;
    lastInput = num; // Update the last input
}

function clearResult() {
    const result = document.getElementById("result");
    result.value = ""; // Clear the input field
    lastInput = "";    // Reset the last input
}

function allResult() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value); // Evaluate the expression
        lastInput = result.value.slice(-1); // Update last input with the last character of the result
    } catch (e) {
        result.value = "Error"; // Display error for invalid expressions
        lastInput = "";
    }
}

function back() {
    const result = document.getElementById("result");

    // Remove the last character
    result.value = result.value.slice(0, -1);
    lastInput = result.value.slice(-1); // Update last input after removing the last character
}
