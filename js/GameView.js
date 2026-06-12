
class GameView{

    constructor(){
    }

    updateBoard(game){
        this.updateTurn(game);
        const Winnerstatus= game.checkWin();
        
        for(let i = 0; i < game.board.length;i++ ){
            const tile = document.querySelector(`.board-tile[data-index= '${i}'] `);
            tile.textContent= game.board[i];

            let tiletype = game.board[i]=='X'? "tile-x": "tile-o";
            tile.innerHTML = `<span class=" ${tiletype}"> ${game.board[i] ? game.board[i] :""} `
            
            tile.classList.remove("tile-winner");
            if(Winnerstatus && Winnerstatus.includes(i) ){
                tile.classList.add("tile-winner");
            }
        }

        if(Winnerstatus && !game.StopGameFlag)
            this.updateScoreView(game);
    }

    updateTurn(game){
        let playerX = document.querySelector(".player-x");
        let playerO = document.querySelector(".player-o");
        playerO.classList.remove('active');
        playerX.classList.remove('active');

        if(game.turn =='X'){
            playerX.classList.add('active');

        }
        else{
            playerO.classList.add('active');

        }
    }

    updateScoreView(game,isResetScore){
        if(game.turn =='X'){
            game.updateScore()
            console.log(game.playerXScore);   
            document.getElementById("score-x-display").textContent = game.playerXScore; 
        }
        else {
            game.updateScore()
            console.log(game.player0Score);   
            document.getElementById("score-o-display").textContent = game.player0Score; 
        }
        
        if(isResetScore){
            document.getElementById("score-x-display").textContent = game.playerXScore; 
            document.getElementById("score-o-display").textContent = game.player0Score; 
        }

    }

}

export default GameView;