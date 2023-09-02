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
function game(){
    let wins=0;
    let losses=0;
    let ties=0;
    for (let i=0; i<5;i++){
        var selection;
        do{
            selection = prompt("Enter choice");
            if(selection !=="rock" && selection !=="paper" && selection !=="scissors"){
                alert("Input is incorrect");
            }
        }while (selection !=="rock" && selection !=="paper" && selection !=="scissors")


        let result = playRound(selection,getComputerChoice())
        
        if (result === 1){
            wins++;
            alert("win");
            console.log("Win");
            
        }
        else if (result === 2){
            losses++   
            alert("Loss");
            console.log("Loss");
        }else{
            ties++;
            alert("Tie");
            console.log("Tie")
        }
        
    }
    if(wins>losses){
        return "You Won! The score is "+wins+" - "+losses;
    } else if(wins<losses){
        return "You Lost! The score is "+wins+" - "+losses;
    }else{
        return "It's a tie!"
    }
}
let result = game();
alert(result);
console.log(result);
