let playerScore = 0
let computerScore = 0
const div = document.querySelector('.resultsDiv');
const p = document.querySelector('p');
const yourScoreSpan = document.querySelector('.yourScore');
const computerScoreSpan = document.querySelector('.compScore');


function getComputerChoice() {
  let computerChoice = Math.random();

if (computerChoice < .33) {
  return "Rock";
  
} else if (computerChoice <= .67) {
return "Paper";

} else {
return "Scissors";
}


}

 const playGame = (playerInput) => {
  
  let computerSelection = getComputerChoice().toLowerCase();
  let playerSelection = playerInput.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "rock") {
    const p = document.createElement('p');
    p.innerText = "You tied, you both chose rock"
    div.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++
    const p = document.createElement('p');
    p.innerText = "You lost, paper covers rock"
    div.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    const p = document.createElement('p');
    p.innerText = "You win, rock crushes scissors"
    div.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    const p = document.createElement('p');
    p.innerText = "You tied, you both chose paper"
    div.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    const p = document.createElement('p');
    p.innerText = "You won, paper covers rock"
    div.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection ==="scissors") {
    computerScore++
    const p = document.createElement('p');
    p.innerText = "You lost, scissors cuts paper"
    div.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    const p = document.createElement('p');
    p.innerText = "You won, scissors cuts paper"
    div.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    const p = document.createElement('p');
    p.innerText = "You tied, you both chose scissors"
    div.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection ==="rock") {
    computerScore++
    const p = document.createElement('p');
    p.innerText = "You lost rock beats scissors"
    div.appendChild(p);
    }
    yourScoreSpan.innerText = playerScore
    computerScoreSpan.innerText = computerScore
}




 
// Or I could maybe use a template literal in the playGame function?

function checkScore(playerScore, computerScore) {
  
if (playerScore === 5) {
 
  
  const h2 = document.createElement('h2')
h2.innerText = "YOU WON THE GAME!!"
div.append(h2);
} else if(computerScore === 5) {
  const h2 = document.createElement('h2')
  h2.innerText = "YOU LOST THE GAME!"
  div.append(h2);
} 
 }


const rockButton = document.querySelector('.rockButton');
rockButton.addEventListener('click', () => {
  let playerInput = "rock";
  playGame(playerInput);
  checkScore(playerScore, computerScore);
}
)

const paperButton = document.querySelector('.paperButton');
paperButton.addEventListener('click', () => {
  let playerInput = "paper";
  playGame(playerInput);
  checkScore(playerScore, computerScore)
  
}
)

const scissorsButton = document.querySelector('.scissorsButton')
scissorsButton.addEventListener('click', () => {
  let playerInput = "scissors";
  playGame(playerInput);
  checkScore(playerScore, computerScore);
}
)







