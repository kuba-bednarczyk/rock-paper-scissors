// start menu section elements
const playBtn = document.querySelector('.play-btn');
const startMenu = document.querySelector('.start-menu');
const gamePage = document.querySelector('.game-page');
// game section elements
const options = document.querySelectorAll('.options button')

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const restartBtn = document.querySelector('.restart-btn');

const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const hands = document.querySelectorAll('.hands-box img')

const gameText = document.querySelector('.game-page h2')

const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score')

//memory variables
let playerScore = 0;
let computerScore = 0;


const startGame = () => {
    startMenu.classList.add('hide');
    gamePage.classList.remove('hide');
};



const playGame = () => {
    //Computer options
    hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
            this.style.animation = '';
        });
    });
    const computerOptions = ['rock', 'paper', 'scissors'];
    
    options.forEach(option => {
        option.addEventListener('click', function() {

            playerHand.src = 'game-assets/l-rock.svg';
            computerHand.src = 'game-assets/r-rock.svg';

            //computer choice
            const computerNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[computerNumber];
            

        setTimeout(() => {
            compare(this.textContent, computerChoice);

            //update svgs
            playerHand.src = `game-assets/l-${this.textContent}.svg`;
            computerHand.src = `game-assets/r-${computerChoice}.svg`;
        },2000);
            //animation
            playerHand.style.animation = "shake 2s ease";
            computerHand.style.animation = "shake 2s ease";
        });
    });
};

const updateScore = () => {
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
};

const compare = (playerChoice, computerChoice) => {
    //check for tie
    if(playerChoice === computerChoice){
        gameText.textContent = 'Tie!';
        return;
    }
    //if rock
    if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
            gameText.textContent = 'You Win!';
            playerScore++;
            updateScore();
            return;
        } else{
            gameText.textContent = 'You Lose! :('; 
            computerScore++;
            updateScore();
            return;
        }
    }
    //if paper
    if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            gameText.textContent = 'You Win!';
            playerScore++;
            updateScore();
            return;
        } else{
            gameText.textContent = 'You Lose! :(';
            computerScore++;
            updateScore();
            return;
        }
    }
    //if scissors
    if(playerChoice === 'scissors'){
        if(computerChoice === 'paper'){
            gameText.textContent = 'You Win!';
            playerScore++;
            updateScore();
            return;
        } else{
            gameText.textContent = 'You Lose! :(';
            computerScore++;
            updateScore();
            return;
        }
    }
    
};

restartGame = () => {
    playerHand.src = 'game-assets/l-rock.svg';
    computerHand.src = 'game-assets/r-rock.svg';

    playerScore = 0;
    playerScoreDiv.textContent = '0';
    computerScoreDiv.textContent = '0';
    computerScore = 0;

    gameText.textContent = 'Choose your option!';
};

restartBtn.addEventListener('click', restartGame);

playGame();
playBtn.addEventListener('click', startGame);

