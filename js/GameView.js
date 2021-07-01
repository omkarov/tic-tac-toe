
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

}

export default GameView;