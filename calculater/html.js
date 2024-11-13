// Function to insert value into the display
function insertValue(value) {
    document.form.display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.form.display.value = "";
}

// Function to delete the last character from the display
function deleteLast() {
    let currentDisplay = document.form.display.value;
    document.form.display.value = currentDisplay.substring(0, currentDisplay.length - 1);
}

// Function to evaluate the expression in the display
function calculate() {
    try {
        let result = eval(document.form.display.value);
        document.form.display.value = result;
    } catch (e) {
        document.form.display.value = "Error";
    }
}
