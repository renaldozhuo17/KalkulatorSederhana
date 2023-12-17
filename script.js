function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

document.addEventListener("keydown", function(event) {
  if (event.key >= "0" && event.key <= "9") {
    appendToDisplay(event.key);
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === ".") {
    appendToDisplay(event.key);
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    if (display.value.length > 0) {
      display.value = display.value.slice(0, -1);
    }
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === 'Enter' || event.key === "=") {
    calculate();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === 'Delete') {
    clearDisplay();
  }
});