const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#errormessage");
const numOfNotes = document.querySelectorAll(".no-of-notes");
const totalCashGiveDiv = document.querySelector(".totalCashGiven");
const nextBtn = document.querySelector("#next");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
function validateBillAmount() {
    message.style.display = "none"
    //console.log(billAmount.value)
    //console.log(cashGiven.value)
    //console.log("clicked")
    if (Number(billAmount.value) > 0) {
        if (Number(billAmount.value) <= Number(cashGiven.value)) {
            //console.log("less")
            const amountToReturned = Number(cashGiven.value) - Number(billAmount.value);
            message.style.display = "none"
            calculateChange(amountToReturned);
        }
        else {
            showMessage("Cash provided should be atleast equal to bill amount.")
        }
    }
    else {
        hideCashGiven()
        nextBtn.style.display = "flex"
        showMessage("Invalid Bill Amount");
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
function hideCashGiven() {
    totalCashGiveDiv.style.display = "none"
}
function showCashDiv() {
    totalCashGiveDiv.style.display = "flex"
}
function nextValidate() {
    if (Number(billAmount.value) > 0) {
        nextBtn.style.display = "none"
        showCashDiv()
    }
    else {
        showMessage("Invalid Bill Amount")
    }
}

checkBtn.addEventListener("click", validateBillAmount);
nextBtn.addEventListener("click", nextValidate);