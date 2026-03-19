let amount = 0;

function updateDisplay() {
  const display = document.getElementById("amount");
  display.innerText = amount + " CHF";
}

function changeAmount(value) {
  amount = amount + value;

  if (amount < 0) {
    amount = 0;
  }

  updateDisplay();
}

function resetAmount() {
  amount = 0;
  updateDisplay();
}

// wichtig: beim Laden anzeigen
updateDisplay();