// Project: Rock Paper Scissors

const handSigns = ['rock', 'paper', 'scissors'];

const getNumOfHandSigns = () => {
    return handSigns.length;
}

const getRandNum = () => {
    const numRange = getNumOfHandSigns();
    const randNum = Math.floor(Math.random() * numRange);
    return randNum;
}

const getHandSign = () => {
    return handSigns[getRandNum()];
}

const getComputerSelection = () => {
    return getHandSign();
}

const getPlayerSelection = () => {
    let playerSelection = prompt('Rock, Paper, or Scissors');
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}
console.log(getPlayerSelection())
const playRound = (playerSelection, computerSelection) => {
    

    const result = "You Lose! Paper beats Rock";

    return result;
}

const game = () => {
    let winner;
    for (let i = 0; i < 5; i++) {
        
        let computerSelection = computerPlay();
        winner = playRound(playerSelection, computerSelection);
    }

    // return winner or loser
}

// const playerSelection = 'Rock';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));