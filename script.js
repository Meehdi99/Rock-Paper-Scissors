let computerSelection = ["rock", "paper", "scissors"];
let playerSelection;
let l = 0;
let w = 0;
let i = 1;

function getComputerChoice() {
  return Math.floor(Math.random() * computerSelection.length);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Round : " + i + "/5" + "\nTie!" + "\n Score : " + l + " - " + w;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    w++;
    return (
      "Round : " +
      i +
      "/5" +
      "\nYou win! " +
      playerSelection +
      " beats " +
      computerSelection +
      "." +
      "\n Score : " +
      l +
      " - " +
      w
    );
  } else {
    l++;
    return (
      "Round : " +
      i +
      "/5" +
      "\nYou lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      "." +
      "\n Score : " +
      l +
      " - " +
      w
    );
  }
}

function game() {
  for (i = 1; i < 6; i++) {
    let c = computerSelection[getComputerChoice()];
    playerSelection = prompt("Choose between: Paper, Rock or Scissors", "Rock");
    console.log("Computer chose : " + c);
    console.log(playRound(playerSelection.toLowerCase(), c));
  }
  if (l > w) {
    console.log("Computer Wins!");
  } else if (w > l) {
    console.log("You Win!");
  } else {
    console.log("it's a tie!");
  }
  l = w = 0;
}
