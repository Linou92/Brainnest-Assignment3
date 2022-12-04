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

const quit = "quit"

let computerPlay = () => {
    console.log("Waiting for the computer to choose its guess...")
    let computerGuess = Math.round(Math.random()*2) 
    switch(computerGuess){
        case 0: 
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2: 
            return "scissors"
    }
}

let userPlay = () => {
    let userChoice = prompt('Let\'s play Rock, Paper and Scissors Game ! Please pick a guess by writing paper, rock or scissors or quit if you don\'t want to play:')
    if(userChoice == null) quitGame() 
    else{
        userChoice = userChoice.toLowerCase().trim() 
        let validGuess = (userGuess) => (userGuess == "rock" || userGuess == "paper" || userGuess == "scissors" || userGuess == "quit")  
        while(!(validGuess(userChoice))) {
            userChoice = prompt('This input is not valid ! Please choose a valid guess.')
            userChoice = userChoice.toLowerCase()
        }
        console.log("Your guess is : ", userChoice)
        return userChoice
    }
}

let quitGame = () => {
    alert("You are about to quit the game !")
    return -1
}

/****** example: rock vs scissors 
 ****** userGuess = choices["rock"] => rock obj => {rock: 1, paper: 0, scissors: 1}
 ****** computerGuess = choices["scissors"] => scissors obj => {rock: 0, paper: 1, scissors: 1}
 ****** userScore = gets value of "scissors" in userGuess object => 1 => user wins
 ****** computerScore = gets value of "rock" in computerGuess object => 0 => computer looses */
let playRound = (playerSelection, computerSelection) => { 
    let userGuess = choices[playerSelection] 
    let computerGuess = choices[computerSelection] 
    let userScore = userGuess[computerSelection] 
    let computerScore = computerGuess[playerSelection] 
    
   if(userScore > computerScore){
    alert (playerSelection +' wins over '+ computerSelection +'. Congrats you won ! 🎉' )
    return 1
   }
   else if(userScore < computerScore){
    alert (playerSelection + ' looses over ' + computerSelection +'. Sorry you lost ! 😢')
    return 0
   }
   else{
    alert ('😲 You both guessed the same guess which is '+ playerSelection + ' so it\'s a tie !')
    return 2
   }
}

let game = () => {
    let userFinalScore = 0
    let computerFinalScore = 0
    alert("Rock paper scissors : 5 rounds game. Let's go !")
    let score
    for(let i=0; i<5; i++){
        alert("Round "+ (i+1))
        const playerSelection = userPlay()
        if(playerSelection === quit) return quitGame()
        else{
            const computerSelection = computerPlay()
            console.log("The computer guess is :  ", computerSelection)
            score = playRound(playerSelection, computerSelection)
           if(score == 1){
                userFinalScore++
            } 
            else if(score == 0){
                computerFinalScore++
            }
        }
    }
    if(userFinalScore < computerFinalScore) alert('Sorry you lost the game ! 😢 \n The final score is You:' + userFinalScore + ' Computer: ' + computerFinalScore)
    else if(userFinalScore > computerFinalScore) alert('Congrats you won the game ! 🎉 \n The final score is You:' + userFinalScore + ' Computer: ' + computerFinalScore)
    else alert('You are equal. No one won ! \n The final score is You:' + userFinalScore + ' Computer: ' + computerFinalScore)
}

game()