import Game from './Game.js';
import GameView from './GameView.js';
let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener('click',()=>{
    // console.log('restart')
    onRestartClick(); 
})

document.querySelector(".resetScore").addEventListener('click',()=>{
    // console.log('restScore')
    onResetScoreClick(); 
})

let tiles = document.querySelectorAll(".board-tile");

tiles.forEach((tile)=>{
    tile.addEventListener("click", ()=>{
    onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    // console.log(i);
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onResetScoreClick(){
    game = new Game();
    gameView.updateBoard(game);
    gameView.updateScoreView(game,true);
}

function onRestartClick(){
    let oldGame = game;
    game = new Game();
    game.playerXScore = oldGame.playerXScore
    game.player0Score = oldGame.player0Score
    gameView.updateBoard(game);
    gameView.updateScoreView(game);
}

gameView.updateBoard(game);


const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
var bt = document.querySelectorAll(".board-tile");

// document.querySelector(".theme").addEventListener("click", ()=>{
const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
    //   document.body.classList.toggle('dark-theme');

    if (prefersDarkScheme.matches){
        document.body.classList.toggle("light-theme");
        document.querySelector(".wrapper").classList.toggle("dark-theme");
        document.querySelector(".board").classList.toggle("dark-theme");
        for(let i=0; i<bt.length;i++)
        {
            bt[i].classList.toggle("dark-theme");
        }
        document.querySelector(".restart").classList.toggle("dark-theme");
        document.querySelector(".resetScore").classList.toggle("dark-theme");
        document.querySelector(".title").classList.toggle("dark-theme");    
    } 
    else {
        document.body.classList.toggle("dark-theme");
        document.querySelector(".wrapper").classList.toggle("dark-theme");
        document.querySelector(".board").classList.toggle("dark-theme");
        for(let i=0; i<bt.length;i++)
        {
            bt[i].classList.toggle("dark-theme");
        }
        
        document.querySelector(".restart").classList.toggle("dark-theme");
        document.querySelector(".resetScore").classList.toggle("dark-theme");
        document.querySelector(".title").classList.toggle("dark-theme");
    }
});
