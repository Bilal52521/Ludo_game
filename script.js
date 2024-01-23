let currentPlayer = 1;
let currentScore = 0;

function roll() {
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    document.querySelector(".theimage").src = `images/dice-${randomNum}.png`;

    if (randomNum !== 1) {
        currentScore += randomNum;
        document.getElementById(`current-${currentPlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
}

function hold() {
    let totalScore = parseInt(document.getElementById(`score-${currentPlayer}`).textContent);
    totalScore += currentScore;
    document.getElementById(`score-${currentPlayer}`).textContent = totalScore;

    if (totalScore >= 20) {
        announceWinner();
    } else {
        resetCurrentPlayer();
        switchPlayer();
    }
}

function announceWinner() {
    let winnerName = document.getElementById(`player-${currentPlayer}`).querySelector("h2").textContent;
    alert(`${winnerName} is the winner!`);
    resetGame();
}

function resetCurrentPlayer() {
    document.getElementById(`current-${currentPlayer}`).textContent = 0;
    currentScore = 0;
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    // Reset current score when switching players
    resetCurrentPlayer();
}

function resetGame() {
    document.querySelector(".theimage").src = '';
    resetCurrentPlayer();
    document.getElementById("score-1").textContent = 0;
    document.getElementById("score-2").textContent = 0;
    disableButtons(false);
}

function disableButtons(disabled) {
    document.querySelectorAll("button").forEach(btn => {
        btn.disabled = disabled;
    });
}

resetGame();
