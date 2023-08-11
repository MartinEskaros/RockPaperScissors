function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]
    const choice = Math.floor(Math.random()*options.length)
    
    return options[choice];
}
function roundPlayed(playerSelection,computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Tie! You Both Picked " +playerSelection;
    }
    else if(playerSelection.toLowerCase()==="rock"){
        if(computerSelection.toLowerCase()==="paper"){
            return "You Lose! Paper beats Rock"
        }else{
            return "You Won! Rock beats Scissors"
        }
    }else if(playerSelection.toLowerCase()==="paper"){
        if(computerSelection.toLowerCase()==="rock"){
            return "You Won! Paper beats Rock"
        }else{
            return "You Lose! Scissors beats Paper"
        }
    }else if(playerSelection.toLowerCase()==="scissors"){
        if(computerSelection.toLowerCase()==="rock"){
            return "You Lose! Rock beats Scissors"
        }else{
            return "You Won! Scissors beats Paper"
        }
    } 
}
