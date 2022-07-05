// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    // Gets all the button from the tag name button from the DOM
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            // Asks if the submit button is press, otherwise informs you with what button was pressed.
            if (this.getAttribute("data-type") == "submit") {
                checkAnswer();
            } else {
                // Gets the pressed buttons data-type
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    document.getElementById('answer-box').addEventListener('keydown', function(event){
        if (event.key === 'Enter') {
            checkAnswer();
        }
    })

    // Default launching gameType, when page is loaded (DOMContentLoaded)
    runGame('addition');
})

/**
 * The main game "loop", called when the script is first called
 * and after the user's answer has been processed
 */

function runGame(gameType) {

    document.getElementById('answer-box').value = '';
    document.getElementById('answer-box').focus();

    // Creates random number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // Checks if the gameType is addition, if not its going check if its multiply
    if(gameType === 'addition') {
        // Access the function for addition
        displayAdditionQuestion(num1, num2);
    } 
    //Checks if the gameType is multiply, if not its going check if its subtract
    else if(gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    }

    // Checks if the gameType is subtract, if not its going check if its division
    else if(gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    }

    // Checks if the gameType is division, if not its going to mark the unknown gameType
    else if(gameType === 'division') {
        displayDivisionQuestion(num1, num2);
    }
    
    else {
        // If it gameType doesn't exist throw errors!
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element
 * in the returned calculateCorrectAnswer array
 */

function checkAnswer() {

    // Gets the user answer from the answer-box within the HTML
    let userAnswer = parseInt(document.getElementById('answer-box').value);

    //  returns an array
    let calculatedAnswer = calculateCorrectAnswer();

    // Checks if userAnswer is the same as the calculatedAnswer array
    // [operand1 + operand2, 'addition'] operand1 + operand2.
    let isCorrect = userAnswer === calculatedAnswer[0];

    // Checks if isCorrect is equal to true
    if(isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Aww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer()
    }

    // After checkAnswer() is finished, launch a new game by getting the calculateCorrectAnswer()
    // second array [operand1 + operand2, 'addition'] which is addition.
    runGame(calculatedAnswer[1]);
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
        checkAnswer();
    }

    else if(operator === 'x') {
        return [operand1 * operand2, 'multiply'];
        checkAnswer();
    } 
    
    else if(operator === '-') {
        return [operand1 - operand2, 'subtract'];
        checkAnswer();
    } 

    else if(operator === '/') {
        return [operand1 / operand2, 'division'];
        checkAnswer();
    } 

    else {
        // Alert the user that there is no operator in place
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`
    }

}

/**
 * Gets the current score from the DOM and increment it by 1
 */
function incrementScore() {
    // Gets the oldScore from the DOM and converting it to an integer
    let oldScore = parseInt(document.getElementById('score').innerText);
    // Creates a new one oldScore with an increment of 1
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * Gets the current incorrect score from the DOM and increment it by 1
 */
function incrementWrongAnswer() {
    // Gets the oldScore from the DOM and converting it to an integer
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    // Creates a new one oldScore with an increment of 1
    document.getElementById('incorrect').innerText = ++oldScore;
}

/**
 * Displays the random operands and the operator (+) for the Addition game.
 */
function displayAdditionQuestion(operand1, operand2) {
    // Gets the operands and operator from the DOM and assign them a variable
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;   
    document.getElementById('operator').textContent = '+'; 
}

function displaySubtractQuestion(operand1, operand2) {
    // Gets the operands and operator from the DOM and assign them a variable
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-'; 
}

function displayMultiplyQuestion(operand1, operand2) {
    // Gets the operands and operator from the DOM and assign them a variable
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;   
    document.getElementById('operator').textContent = 'x'; 
}

function displayDivisionQuestion(operand1, operand2) {
    // Gets the operands and operator from the DOM and assign them a variable

    let divNum1 = operand1 > operand2 ? operand1 : operand2;
    let divNum2 = operand1 > operand2 ? operand2 : operand1;

    operand1 = divNum1 * divNum2;
    operand2 = divNum2;

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '/'; 
}