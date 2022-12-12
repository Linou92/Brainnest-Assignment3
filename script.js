const rock = { 
    "rock":1, 
    "paper":0, 
    "scissors":1
}

const paper = { 
    "rock":1, 
    "paper":1, 
    "scissors":0
}

const scissors = { 
    "rock":0, 
    "paper":1, 
    "scissors":1
}

const choices = {
    "rock":rock,
    "paper":paper,
    "scissors":scissors
}

const handChoices = {
    "rock": "./images/rock.png",
    "paper": "./images/paper.png",
    "scissors": "./images/scissors.png"
}

const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")

const win = document.querySelector(".scoreWins h1")
const loss = document.querySelector(".scoreLosses h1")
const tie = document.querySelector(".scoreTies h1")
let round = document.getElementById("round")

let finalScoreWins = 0
let finalScoreTies = 0 
let finalScoreLosses = 0
let roundNb = 1

let computerPlay = () => {
    const choices = ["rock", "paper", "scissors"]
    let computerGuess = choices[Math.floor(Math.random()*choices.length)]
    document.getElementById("computerPickImage").src = handChoices[computerGuess]
    return computerGuess
} 

let userPlay = () => {
    round.innerText = "Round "+roundNb 
    let buttons = document.querySelectorAll(".button")
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            let name = e.target.id
            if(name == "paper" || name == "scissors" || name == "rock"){
                let hands = document.querySelector(".hands")
                hands.style.display = "none"
                let result = document.querySelector(".result")
                result.style.display = "flex"
                document.getElementById("userPickImage").src = handChoices[name]
                return playRound(name, computerPlay())
            }
        })
    })
   
} 

let playRound = (playerSelection, computerSelection) => {
    let userGuess = choices[playerSelection] 
    let computerGuess = choices[computerSelection] 
    let userScore = userGuess[computerSelection] 
    let computerScore = computerGuess[playerSelection] 
    
   if(userScore > computerScore){
    setMessage("Congrats you won !", "N")
    setScores(userScore, computerScore)
    return 1
   }
   else if(userScore < computerScore){
    setMessage("Sorry you lost !", "R")
    setScores(userScore, computerScore)
    return 0
   }
   else{
    setMessage("It's a tie !", "K")
    setScores(userScore, computerScore)
    return 2
   }
}

const setMessage = (msg, smiley) => {
    document.querySelector(".message h1").innerText = msg
    document.getElementById("smiley").innerText = smiley
}

const setScores = (userScore, computerScore) => {
    if(userScore > computerScore){
        finalScoreWins +=1
        win.innerText = finalScoreWins
    }
    else if(userScore < computerScore){
        finalScoreLosses +=1
        loss.innerText = finalScoreLosses
    }
    else{
        finalScoreTies +=1
        tie.innerText = finalScoreTies
    }
}

const checkEndGame = () => {
    if(finalScoreLosses == 5 || finalScoreTies == 5 || finalScoreWins == 5){
        if(finalScoreLosses == 5){
            alert("GAME OVER ! OOPS YOU LOST 😢")
            resetGame()
        }
        else if(finalScoreTies == 5){
            alert("GAME OVER ! NO ONE WON 😲")
            resetGame()
        }
        else if(finalScoreWins == 5){
            alert("GAME OVER ! CONGRATS YOU WON 🎉")
            resetGame()
        }
    }
}

const resetGame = () => {
    win.innerText = 0
    loss.innerText = 0
    tie.innerText = 0
    finalScoreLosses = 0
    finalScoreTies = 0
    finalScoreWins = 0
    roundNb = 0
}

const restartGame = () => {
    let result = document.querySelector(".result")
    result.style.display = "none"
    let hands = document.querySelector(".hands")
    hands.style.display = "flex"
    checkEndGame()
    roundNb +=1
    round.innerText = "Round "+roundNb
}

userPlay()
