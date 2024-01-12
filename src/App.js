import './App.css';

function App() {

  game();
    
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

function game() {
    
    
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
      let playerChoice = prompt("Type your choice: Rock, Paper or Scissors", "");
      if(!correctInput(playerChoice)){
        console.log("Incorrect input format.");
        return;
      }

      let computerChoice = getComputerChoice();
      let round = playRound(playerChoice, computerChoice);
      if(round.substring(0, 8) === "You Lose") {
        computerScore++;
        console.log(`You Lost Round ${i+1}`);
      }
      else if(round.substring(0, 7) === "You Win") {
        playerScore++;
        console.log(`You Won Round ${i+1}`);
      }

      if(playerScore === 3){
        console.log("You have Won the Best of 5!");
        break;
      }
      if(computerScore === 3){
        console.log("You have Lost the Best of 5!");
        break;
      }
    }
} 

function correctInput(playerChoice){
  playerChoice = playerChoice.toLowerCase();
  if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
    return true;
  }
  return false;
}

function getComputerChoice() {
  let rand = Math.random() * 3;
  rand = Math.round(rand);

  if(rand === 1){
    return "rock";
  }
  
  if(rand === 2){
    return "paper";
  }

  return "scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if(playerSelection === "rock" && computerSelection === "paper"){
    return "You Lose! Paper beats Rock";
  }

  if(playerSelection === "rock" && computerSelection === "scissors"){
    return "You Win! Rock beats Scissors";
  }

  if(playerSelection === "paper" && computerSelection === "rock"){
    return "You Win! Paper beats Rock";
  }

  if(playerSelection === "paper" && computerSelection === "scissors"){
    return "You Lose! Scissors beats Paper";
  }

  if(playerSelection === "scissors" && computerSelection === "paper"){
    return "You Win! Scissors beats Paper";
  }

  if(playerSelection === "scissors" && computerSelection === "rock"){
    return "You Lose! Rock beats Scissors";
  }

  if(playerSelection === computerSelection){
    return playRound(playerSelection, getComputerChoice());
  }
}

export default App;
