let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscore= document.querySelector("#user-score");
const compscore= document.querySelector("#comp-score");

 const genCompchoice = () => { //generating comp choice
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
 }
 const drawGame=()=>{
    console.log("the game was draw");
    msg.innerText="The game was draw. Play again!";
    msg.style.backgroundColor=" #081b31";
 };
 const showWinner =(userWin, userChoice,compChoice) =>{
    if(userWin){
        console.log("You win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userscore.innerText= userScore;
    }
    else{
        console.log("You lost");
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;

        msg.style.backgroundColor="red";
        compScore++;
        compscore.innerText= compScore;
    }

 };
const playGame =(userChoice) => {
    console.log("userChoice =", userChoice);
    const compChoice= genCompchoice();
    console.log("compChoice =", compChoice);
    if(userChoice=== compChoice){
         drawGame();
    }
    else{
        let userWin= true;
        if(userChoice === "rock"){
           userWin = compChoice=== "paper"? false: true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice=== "rock"? true: false;
    }
    else if(userChoice === "scissors"){
        userWin = compChoice=== "paper"? true: false;
    }
    showWinner(userWin,userChoice,compChoice);
}

};

choices.forEach((choice) => {
choice.addEventListener("click",() =>{
    const userChoice= choice.getAttribute("id");
    
    playGame(userChoice);
});
});

