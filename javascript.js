console.log('Hello World');

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        return "Tie";
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}
//--logic to play a single round--//

function playRound(humanChoice, computerChoice){
    const result = checkWinner(humanChoice, computerChoice);
    if (result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Player"){
        return `You Win! ${humanChoice} beats ${computerChoice}`
    }
    else{
        return `You Lose! ${computerChoice} beats ${humanChoice}`
    }
}

function gethumanChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput == true;
            return choiceInLower;
        }
    }
}


//--logic to play a entire game--//

function playGame(){
    let scoreHuman = 0;
    let scoreComputer = 0;
    console.log("welcome!")
    for (let i = 0; i < 5; i++) {
    const humanChoice = gethumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
    console.log("--------------")
    if(checkWinner(humanChoice, computerChoice) == "Player"){
        scoreHuman++;
    }
    else if(checkWinner(humanChoice, computerChoice) == "Computer"){
        scoreComputer++;
    }   
  }
  console.log("Game Over")
  if(scoreHuman > scoreComputer){
    console.log("Human was the winner");
  }
  else if(scoreHuman < scoreComputer){
    console.log("Computer was the winner");
  }
  else{
    console.log("We have a tie");
  }

}

playGame()