
/**
 * Defines "Let's Begin" button click event.
 * Function to load game into the "game-area" section.
 */
var buttonStart = document.getElementById('btn-start');
var gameArea = document.getElementById('game-area');
var landingSection = document.getElementById('landing');

function letsBegin() {
    landingSection.style.display = 'none';
    gameArea.style.display = 'block';
}

/**
 * Count the clicks of the roll button
 * If there are 7 clicks, end the game
 */
var clickCount = 0;
var buttonRoll = document.getElementById("roll");
buttonRoll.addEventListener("click", function () {
    rollDice();
    clickCount++;

    if (clickCount == 7) {
        if (playerScore == computerScore) {
            Swal.fire("🎉You both are champions! 🎉");
            buttonRoll.disabled = true;
            buttonRoll.style.backgroundColor = 'grey';
        } else if 
            (playerScore > computerScore) {
            Swal.fire("Hey you champion! 🎉 You won!");
            buttonRoll.disabled = true;
            buttonRoll.style.backgroundColor = 'grey';
        } else {
            Swal.fire("☹️ Try again!");
            buttonRoll.disabled = true;
            buttonRoll.style.backgroundColor = 'grey';
        }
    } else {
        buttonRoll.disabled = false;
    }

});

/**
 * Main function to roll the dice
 */
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 
    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    var randomImageSource = "assets/images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "assets/images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


    /**
     * If player win
     */
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h2").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h2").innerHTML = "You won! 🎉";
        incrementPlayerResult();
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h2").innerHTML = "Ohhh nooo.... ☹️!";
        incrementComputerResult();
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
var playerScore = parseInt(document.getElementById("player-result").innerText);

function incrementPlayerResult() {

    document.getElementById("player-result").innerText = ++playerScore;
}

/**
 * Gets the current score from the DOM and increments Computers result by 1
 */
var computerScore = parseInt(document.getElementById("computer-result").innerText);

function incrementComputerResult() {

    document.getElementById("computer-result").innerText = ++computerScore;
}