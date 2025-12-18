let score = 0;


const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");


rockBtn.addEventListener("click", () => {
    playGame("rock")
});

paperBtn.addEventListener("click", () => {
    playGame("paper")
});

scissorsBtn.addEventListener("click", () => {
    playGame("scissors")
});


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};


function playGame(userChoice) {
    const computerChoice = getComputerChoice()


    let message; //fix this


    switch (userChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                message = "You Win!";
                score++
            } else if (computerChoice === "paper") {
                message = "You Lose!";
                score--;
            } else {
                message = "It's a tie!"
            }
            break;

        case "paper":
            if (computerChoice === "rock") {
                message = "You Win!";
                score++
            } else if (computerChoice === "scissors") {
                message = "You Lose!";
                score--;
            } else {
                message = "It's a tie!";
            }
            break;

        case "scissors":
            if (computerChoice === "paper") {
                message = "You Win!";
                score++

            } else if (computerChoice === "rock") {
                message = "You Lose!";
                score--;

            } else {
                message = "It's a tie!"
            }
            break;
    }

    updateScore();
    updateResult(message);

}


function updateResult(message) {
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = message;
    resultMessage.className = "";
    if (message === "You Win!") {
        resultMessage.classList.add("win");
    } else if (message === "You Lose!") {
        resultMessage.classList.add("lose");
    } else {
        resultMessage.classList.add("tie");
    }
}

console.log("JS is connected")

function updateScore() {
    const scoreEl = document.getElementById("score");
    scoreEl.textContent = `Score: ${score}`;
}

const rulesBtn = document.getElementById("rulesBtn");
const rulesImage = document.getElementById("rulesImage");

rulesBtn.addEventListener("click", () => {
    console.log("Button log click")
  rulesImage.classList.toggle("hidden");
});