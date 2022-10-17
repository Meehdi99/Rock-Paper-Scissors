let computerSelection = ['rock', 'paper','scissors'];
let playerSelection;
let l=0;
let w=0;


function getComputerChoice (){
    return computerSelection[Math.floor(Math.random()*computerSelection.length)];
}


function playRound(playerSelection,computerSelection){
    computerSelection = getComputerChoice();
    alert("Computer chose : "+ computerSelection);
    if (playerSelection == computerSelection){
        alert("Tied!");
    }
    else if (playerSelection=='rock' && computerSelection=='scissors' || playerSelection =='paper' && computerSelection =='rock' || playerSelection =='scissors' && computerSelection =='paper'){
        w++;
        alert("You win! "+playerSelection+" beats "+computerSelection+".");
    }
    else{
        l++;
        alert("You lose!"+computerSelection+" beats "+playerSelection+".");
    }
}


function game(){
    for (let i = 0; i<5; i++) {
        playerSelection = prompt("Choose between: Paper, Rock or Scissors","Rock");
        console.log(playRound(playerSelection.toLowerCase(),""));
    }
    if (l>w){
        window.alert("Computer Wins." );
    }
    else if (w>l){
        window.alert("Player Wins.")
    }
    else {
        window.alert("it's a tie.");
    }
    l=w=0;
}    
