let clickedButton;
let computerGuessedNumber;
let computerGuessedbutton;
let score = {
  wins: 0,
  loses: 0,
  ties: 0,
};
let result = document.querySelector(".result");
let player = document.querySelector(".player");
let computer = document.querySelector(".computer");

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    clickedButton = "rock";
    computerGuess(clickedButton);
  } else if (event.key === "p") {
    clickedButton = "paper";
    computerGuess(clickedButton);
  } else if (event.key === "s") {
    clickedButton = "scissors";
    computerGuess(clickedButton);
  }
  document.querySelector(
    ".player"
  ).innerHTML = `You:<img src="./assets/images/${clickedButton}.png" />`;
});
let input = document.querySelectorAll(".input");
input.forEach(function (value) {
  value.addEventListener("click", function () {
    clickedButton = this.getAttribute("id");
    document.querySelector(
      ".player"
    ).innerHTML = `You:<img src="./assets/images/${clickedButton}.png" />`;
    computerGuess(clickedButton);
  });
});

function computerGuess(clickedButton) {
  computer = Math.floor(Math.random() * 3) + 1;

  switch (computer) {
    case 1:
      computerGuessedbutton = "rock";
      break;
    case 2:
      computerGuessedbutton = "paper";
      break;
    case 3:
      computerGuessedbutton = "scissors";
  }
  document.querySelector(
    ".computer"
  ).innerHTML = `Computer:<img src="./assets/images/${computerGuessedbutton}.png"/>`;

  if (clickedButton === computerGuessedbutton) {
    result.textContent = "It's a draw";
    score.ties++;
    document.querySelector(".ties").textContent = score.ties;
  } else if (clickedButton === "rock" && computerGuessedbutton === "scissors") {
    result.textContent = "You win";
    updateWins();
  } else if (clickedButton === "paper" && computerGuessedbutton === "rock") {
    result.textContent = "You win";
    updateWins();
  } else if (
    clickedButton === "scissors" &&
    computerGuessedbutton === "paper"
  ) {
    result.textContent = "You win";
    updateWins();
  } else {
    result.textContent = "You lose";
    score.loses++;
    document.querySelector(".loses").textContent = score.loses;
  }
}
document.querySelector(".reset-btn").addEventListener("click", function () {
  (score.wins = 0), (score.loses = 0), (score.ties = 0);
  document.querySelector(".wins").textContent = score.wins;
  document.querySelector(".loses").textContent = score.loses;
  document.querySelector(".ties").textContent = score.ties;
  document.querySelector(".player").innerHTML = "";
  document.querySelector(".computer").innerHTML = "";
  result.textContent = "";
});

function updateWins() {
  score.wins++;
  document.querySelector(".wins").textContent = score.wins;
  return;
}
