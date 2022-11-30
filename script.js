/* Creating objects and assigning probabilities to numbers for easy use in the code 0 for lose and 1 for win */
const rock = { // rock wins over rock and scissors but loses over paper
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

/* Game's variables */
const quit = "quit"

/* function allowing the computer to make a guess between 
   returns rock, paper or scissors */ 
let computerPlay = () => {
    console.log("Waiting for the computer to choose its guess...")
    let computerGuess = Math.round(Math.random()*2) // return a random number between 0 and 2
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

//console.log("Computer Play Test = ", computerPlay())

/* function allowing the user to make a guess 
   returns rock, paper or scissors */
let userPlay = () => {
    let userChoice = prompt('Let\'s play Rock, Paper and Scissors Game ! Please pick a guess by writing paper, rock or scissors or quit if you don\'t want to play:')
    userChoice = userChoice.toLowerCase().trim() // for case sensitivity and spaces
    /* check the validity of the user guess */
    let validGuess = (userGuess) => (userGuess == "rock" || userGuess == "paper" || userGuess == "scissors" || userGuess == "quit")  
    while(!(validGuess(userChoice))) {
        userChoice = prompt('This input is not valid ! Please choose a valid guess.')
        userChoice = userChoice.toLowerCase()
    }
    console.log("Your guess is : ", userChoice)
    return userChoice
}

//console.log("Your guess is ", userPlay())

/* function to quit the game if the player's input is quit
   returns -1 */
let quitGame = () => {
    alert("You are about to quit the game !")
    return -1
}

/* function to play one single round 
   returns 1 if the player wins, 0 if he looses and 2 if it's a tie */
let playRound = (playerSelection, computerSelection) => { // rock vs scissors example
    let userGuess = choices[playerSelection] // choices["rock"] => rock obj => {rock: 1, paper: 0, scissors: 1}
    let computerGuess = choices[computerSelection] // choices["scissors"] => scissors obj => {rock: 0, paper: 1, scissors: 1}
    
    let userScore = userGuess[computerSelection] // gets value of "scissors" in userGuess object => 1
    let computerScore = computerGuess[playerSelection] // gets value of "rock" in computerGuess object => 0
    
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

/*const playerSelection = userPlay()
const computerSelection = computerPlay()
console.log("The computer guess is :  ", computerSelection)
console.log("PlayRound Test = " ,playRound(playerSelection, computerSelection))*/

/* function to play 5 rounds */
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