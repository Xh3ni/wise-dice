// Wait for the DOM to finish loading before running the game
// Get the button element and add event listener

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("roll");
    button.addEventListener("click", function () {
        rollDice();

    });
});

function rollDice() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 
    let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    let randomImageSource = "assets/images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    let image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomImageSource2 = "assets/images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  /**
   * If player win
   */
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "You won! Congratulations!";
        incrementPlayerResult();
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Ohhh nooo.... :( Try again!";
        incrementComputerResult();
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementPlayerResult() {
    let oldScore = parseInt(document.getElementById("player-result").innerText);
    document.getElementById("player-result").innerText = ++oldScore;
}

/**
 * Gets the current score from the DOM and increments Computers result by 1
 */
function incrementComputerResult() {
    let oldScore = parseInt(document.getElementById("computer-result").innerText);
    document.getElementById("computer-result").innerText = ++oldScore;
}