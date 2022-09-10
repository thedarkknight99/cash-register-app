const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#errormessage");
const numOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
function validateBillAmount() {
    message.style.display = "none"
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToReturned);
        }
        else {
            showMessage("Cash provided should be atleast equal to bill amount.")
        }
    }
    else {
        showMessage("Invalid Bill Amount")
    }
}
function showMessage(text) {
    message.style.display = "block"
    message.innerText = text;
}
function calculateChange(amountToReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToReturned / availableNotes[i]);
        amountToReturned = amountToReturned % availableNotes[i];
        numOfNotes[i].innerText = numberOfNotes;
    }
}

checkBtn.addEventListener("click", validateBillAmount);