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
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
    
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM, and return the correct answer.
 */
function calculateCorrectAnswer() {

    // Gets the string values from the DOM, and converts the operands to integers with parseInt();
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    // Checks if the operator is a plus (+), if not throw an alert
    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`
    }

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