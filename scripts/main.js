/* 
0 - Rock
1 - Paper
2 - Scissors
*/
function computersChoice() {
    return Math.floor(Math.random() * 3); 
}

let playerPoints = 0;
let computerPoints = 0;

document.getElementById("rock").addEventListener("click", playerChoosesRock);
document.getElementById("paper").addEventListener("click", playerChoosesPaper);
document.getElementById("scissors").addEventListener("click", playerChoosesScissors);

function playerChoosesRock() {
    let computersSign = parseInt(computersChoice());
    document.getElementById("player-status").innerHTML = "Your choice: <br><mark class=\"red\">Rock</mark>"

    if (computersSign == 2) {
        document.getElementById("enemy-status").innerHTML = "Computer's choice: <br><mark class=\"red\">Scissors</mark>"
        playerPoints++;
        document.getElementById("player-score").innerHTML = playerPoints;
        document.getElementById("status-message").innerHTML = "You won!";
    } else if (computersSign == 1) {
        document.getElementById("enemy-status").innerHTML = "Computer's choice: <br><mark class=\"red\">Paper</mark>"
        computerPoints++;
        document.getElementById("enemy-score").innerHTML = computerPoints;
        document.getElementById("status-message").innerHTML = "You lost!";
    } else {
        document.getElementById("enemy-status").innerHTML = "Computer's choice: <br><mark class=\"red\">Rock</mark>"
        document.getElementById("status-message").innerHTML = "It's a tie!";
    } 
}

function playerChoosesPaper() {
    let computersSign = parseInt(computersChoice());
    document.getElementById("player-status").innerHTML = "Your choice: <br><mark class=\"red\">Paper</mark>"

    if (computersSign == 0) {
        document.getElementById("enemy-status").innerHTML = "Computer's choice: <br><mark class=\"red\">Rock</mark>"
        playerPoints++;
        document.getElementById("player-score").innerHTML = playerPoints;
        document.getElementById("status-message").innerHTML = "You won!";
    } else if (computersSign == 2) {
        document.getElementById("enemy-status").innerHTML = "Computer's choice: <br><mark class=\"red\">Scissors</mark>"
        computerPoints++;
        document.getElementById("enemy-score").innerHTML = computerPoints;
        document.getElementById("status-message").innerHTML = "You lost!";
    } else {
        document.getElementById("enemy-status").innerHTML = "Computer's choice: <br><mark class=\"red\">Paper</mark>"
        document.getElementById("status-message").innerHTML = "It's a tie!";
    }
}

function playerChoosesScissors() {
    let computersSign = parseInt(computersChoice());
    document.getElementById("player-status").innerHTML = "Your choice: <br><mark class=\"red\">Scissors</mark>"

    if (computersSign == 1) {
        document.getElementById("enemy-status").innerHTML = "Computer's choice: <br><mark class=\"red\">Paper</mark>"
        playerPoints++;
        document.getElementById("player-score").innerHTML = playerPoints;
        document.getElementById("status-message").innerHTML = "You won!";
    } else if (computersSign == 0) {
        document.getElementById("enemy-status").innerHTML = "Computer's choice: <br><mark class=\"red\">Rock</mark>"
        computerPoints++;
        document.getElementById("enemy-score").innerHTML = computerPoints;
        document.getElementById("status-message").innerHTML = "You lost!";
    } else {
        document.getElementById("enemy-status").innerHTML = "Computer's choice: <br><mark class=\"red\">Scissors</mark>"
        document.getElementById("status-message").innerHTML = "It's a tie!";
    }
}