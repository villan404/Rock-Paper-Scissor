let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uscore = document.querySelector("#user-score");
const cscore = document.querySelector("#comp-score");
const genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    //rock , paper , scissor
    const randmIndex = Math.floor(Math.random() * 3) 
    return options[randmIndex];
}


const drawGame = () =>{
    // console.log("drawgame")
    msg.innerText = "Match was Draw, Play Again !!";
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        // console.log("You win");
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
        userScore++ ;
        uscore.innerText = userScore
    }
    else{
        // console.log("You lose")
        msg.innerText = `You Loose!! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
        compScore++;
        cscore.innerText = compScore
    }
}
const playGame = (userChoice) => {
    // console.log("User choice = ",userChoice)
    //generate computer choice
    const compChoice = genComputerChoice()
    // console.log("Comp choice= ",compChoice);
    if(compChoice === userChoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            // scissor, paper
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock , paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener(("click"), ()=> {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked",userChoice)
        playGame(userChoice);
    })
})