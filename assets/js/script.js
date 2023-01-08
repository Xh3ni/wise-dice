// Wait for the DOM to finish loading before running the game
// Get the button element and add event listener

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("roll");
    button.addEventListener("click", function() {
        rollDice();

    });
});

function rollDice(){}

function incrementPlayerResult() {}

function incrementComputerResult() {}