//append value function starts here

function appendValue(value) {
    const winnerCard = document.getElementById("winnerCard");
    const winner = document.getElementById("winnerText");
    let choice = ["Rock", "Paper", "Scissor"];
    let computerChoice = choice[Math.floor(Math.random() * 3)]
    let gameInput = document.getElementById("gameInput");
    const result = document.getElementById("result");
    const result2 = document.getElementById("result2");
    let userChoice = gameInput.value
    const userScore = document.getElementById("userScore");
    const computerScore = document.getElementById("computerScore");

    userChoice += value

    if (userChoice === "Rock" && computerChoice === "Scissor" || userChoice === "Scissor" && computerChoice === "Paper" || userChoice === "Paper" && computerChoice === "Rock") {
        userScore.textContent = parseInt(userScore.textContent) + 1;
        result.textContent = "YOU WIN!! 🎉🎉"
        result2.textContent = `You Choose : ${userChoice} and Computer Choose : ${computerChoice}`
        if (userScore.textContent == "10"){
        winnerCard.style.display = "flex";
        winner.textContent = "You are the winner!! 🏆🏆"
        }
    }
    else if (userChoice === computerChoice) {
        result.textContent = "BOTH SAME DRAW!! 🥲🥲"
        result2.textContent = `You Choose : ${userChoice} and Computer Choose : ${computerChoice}`
    }
    else if (userChoice === "Scissor" && computerChoice === "Rock" || userChoice === "Paper" && computerChoice === "Scissor" || userChoice === "Rock" && computerChoice === "Paper") {
        result.textContent = "YOU LOSE!! 💔💔💔"
        result2.textContent = `You Choose : ${userChoice} and Computer Choose : ${computerChoice}`
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        if (computerScore.textContent == "10"){
        winnerCard.style.display = "flex";
        winner.textContent = "You lose the game!! 🤖🏆"
        }
    }
    userChoice = ""
} 

//append value function ends here

const winnerCard = document.getElementById("winnerCard");
const winner = document.getElementById("winnerText");
const reset = document.getElementById("reset");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
reset.addEventListener("click", ()=>{
    userScore.textContent = "0";
    computerScore.textContent = "0";
    result.textContent = "";
    result2.textContent = "";
    winnerCard.style.display = "none";

})

//dark mode function starts here

const darkmode = document.getElementById("darkmode");
const body = document.body
darkmode.addEventListener("click", ()=>{
    body.classList.toggle("darkmode");
    if(body.classList.contains("darkmode")){
        darkmode.textContent = "🌙"
        body.style.background = "rgb(35, 35, 35)"
    }
    else{
        darkmode.textContent = "☀️"
        body.style.backgroundColor = "white"
    }
})

//dark mode function ends here