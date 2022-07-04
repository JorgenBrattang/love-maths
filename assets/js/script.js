// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            // Asks if the submit button is press, otherwise informs you with what button was pressed.
            if (this.getAttribute("data-type") == "submit") {
                alert("You clicked Submit!");
            } else {
                // Gets the pressed buttons data-type
                let gameType = this.getAttribute("data-type");
                // alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        })
    }
    // Default launching gameType, when page is loaded (DOMContentLoaded)
    runGame('addition');
})

/**
 * The main game "loop", called when the script is first called
 * and after the user's answer has been processed
 */

function runGame(gameType) {

    // Creates random number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // Checks if the gameType is addition, if not its going to mark the unknown gameType
    if(gameType === 'addition') {
        // Access the function for addition
        displayAdditionQuestion(num1,num2);
    } else {
        // If it gameType doesn't exist throw errors!
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;   
    document.getElementById('operator').textContent = '+'; 
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}