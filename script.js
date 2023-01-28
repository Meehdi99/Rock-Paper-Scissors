let computerSelection = ["Rock", "Paper", "Scissors"];
let playerSelection;
let l = 0,
  w = 0,
  i = 1;

function getComputerChoice() {
  return Math.floor(Math.random() * computerSelection.length);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "\n It's a tie!" + "\n Score : Computer : " + l + " - Player : " + w;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    w++;
    return (
      "\n You win! " +
      playerSelection +
      " beats " +
      computerSelection +
      "." +
      "\n Score : Computer : " +
      l +
      " - Player : " +
      w
    );
  } else {
    l++;
    return (
      "\n You lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      "." +
      "\n Score : Computer : " +
      l +
      " - Player : " +
      w
    );
  }
}
const body = document.querySelector("body");
const results = document.createElement("div");
results.classList.add("results");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});

function game(playerSelection) {
  let c = computerSelection[getComputerChoice()];
  if (w == 5) {
    results.textContent = "You win!";
    body.appendChild(results);
    l = w = 0;
  } else if (l == 5) {
    results.textContent = "Computer wins!";
    body.appendChild(results);
    l = w = 0;
  } else {
    results.textContent =
      "Computer chose : " + c + playRound(playerSelection, c);
    body.appendChild(results);
  }
}
