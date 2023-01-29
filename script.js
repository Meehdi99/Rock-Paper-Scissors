let computerSelection = ["Rock", "Paper", "Scissors"];
let playerSelection;
let l = 0,
  w = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * computerSelection.length);
}

function game(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return (
      "<br>It's a tie! You both chose " +
      playerSelection +
      "<br>Computer : " +
      l +
      " - " +
      w +
      " : Player"
    );
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    w++;
    return (
      "Computer chose " +
      computerSelection +
      "<br> You win! " +
      playerSelection +
      " beats " +
      computerSelection +
      "." +
      "<br>Computer : " +
      l +
      " - " +
      w +
      " : Player"
    );
  } else {
    l++;
    return (
      "Computer chose " +
      computerSelection +
      "<br> You lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      "." +
      "<br>Computer : " +
      l +
      " - " +
      w +
      " : Player"
    );
  }
}

const buttons = document.querySelectorAll("button");
const result = document.querySelector(".results");

function reload() {
  const refresh = document.createElement("button");
  refresh.innerHTML = "Play Again";
  result.appendChild(refresh);
  refresh.onclick = () => window.location.reload();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let c = computerSelection[getComputerChoice()];
    result.innerHTML = game(button.id, c);
    if (w == 5) {
      l = w = 0;
      disableButtons();
      result.innerHTML += "<br>You win!<br>";
      reload();
    } else if (l == 5) {
      l = w = 0;
      disableButtons();
      result.innerHTML += "<br>Computer wins!<br>";
      reload();
    }
  });
});

function disableButtons() {
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}
