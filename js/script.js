function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = "";
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        expression = expression.replace(/,/g, '.');
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = "Error";
    }
}

document.addEventListener('keydown', function(event) {
    let key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', ',', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});

