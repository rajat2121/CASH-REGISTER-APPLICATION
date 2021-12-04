// input
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")
const label = document.querySelectorAll(".input-label")
// const nextBtn = document.querySelector("#next")

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1]


hideContents()

// checkButton.addEventListener("click", () => console.log("clicked")) 

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage()
    
    if (billAmount.value > 0) {
        showContents()


         if (cashGiven.value >= billAmount.value) {
              const amountToBeReturned = cashGiven.value - billAmount.value;
              calculateChange(amountToBeReturned);
           } else {
              showMessage("Cash Amount should be greater than Bill Amount")
           }
         

    } else  {
        showMessage("Amount should be greater than 0")
    }
});

// function
function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}


function hideContents(){
    label[1].style.display = "none"
    cashGiven.style.display = "none"
    // checkButton.style.display = "none"
}

function showContents(){
    cashGiven.style.display = "block";
    cashGiven.style.margin = "auto";
    label[1].style.display = "block"

    // checkButton.style.display = "block"
}

function calculateChange(amountToBeReturned) {
    for (let i= 0; i < availableNotes.length; i++) {
         const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
         amountToBeReturned = amountToBeReturned % availableNotes[i];
         noOfNotes[i].innerText = numberOfNotes;
     }
}