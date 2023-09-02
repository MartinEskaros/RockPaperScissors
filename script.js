function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]
    const choice = Math.floor(Math.random()*options.length)
    
    return options[choice];
}
function playRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return 0;
    }
    else if(playerSelection.toLowerCase()==="rock"){
        if(computerSelection.toLowerCase()==="paper"){
            return 1;
        }else{
            return 2;
        }
    }else if(playerSelection.toLowerCase()==="paper"){
        if(computerSelection.toLowerCase()==="rock"){
            return 1;
        }else{
            return 2;
        }
    }else if(playerSelection.toLowerCase()==="scissors"){
        if(computerSelection.toLowerCase()==="rock"){
            return 1;
        }else{
            return 2;
        }
    } 
}

const buttons = document.querySelectorAll('button');        //go through all the buttons and add event listeners to the
buttons.forEach((button) =>{
    button.addEventListener('click', function(){
        playGame(button.id);
    });
});

function playGame(playerChoice){

let computerChoice = getComputerChoice();
let result=playRound(playerChoice,computerChoice);

const resultDisplay = document.getElementById('result');

switch(result){
    case 0:
        resultDisplay.textContent ="You Tied"; 
        resultDisplay.style.color='grey'     
        break;
        
    case 1:
        resultDisplay.textContent ="You Won"; 
        resultDisplay.style.color='green' 
        break;
    case 2:
        resultDisplay.textContent ="You Lost";  
        resultDisplay.style.color='red'
        break;
}

}




