// start menu section elements
const playBtn = document.querySelector('.play-btn');
const startMenu = document.querySelector('.start-menu');
const gamePage = document.querySelector('.game-page');
// game section elements
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const restartBtn = document.querySelector('.restart-btn');


const startGame = () => {
    startMenu.classList.add('hide');
    gamePage.classList.remove('hide');
};

playBtn.addEventListener('click', startGame);





