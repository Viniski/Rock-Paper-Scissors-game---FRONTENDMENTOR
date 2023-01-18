const buttons = [...document.querySelectorAll(".board button")];

const options = ["rock", "paper", "scissors", 'spock', 'lizard'];

let AIPick = null;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function chooseAIPick(){
    AIPick = options[getRandomNumber(0,4)];
}

function chooseUserPick(e){
    let userPick = e.target.closest('button').className;
    checkWin(userPick, AIPick)
}

const init = () => {
    buttons.forEach(button => {button.addEventListener("click", chooseUserPick)});
    chooseAIPick();
}    

init ();

//ZAMIANA STRINGÓW NA NUMBER :) 
function checkWin (user, AI) {
    // https://eduherminio.github.io/blog/rock-paper-scissors-lizard-spock/
    if (user === AI) return 'draw';

    let bigest = (user - AI) > 0 ? user : AI;
    let smallest = (user - AI) > 0 ? AI : user;

    if (((bigest - smallest) % 2) === 0){
        return smallest;
    } else return bigest; 
}
