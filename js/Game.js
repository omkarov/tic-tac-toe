import GameView from "./GameView.js";

class Game{
    constructor(){
        this.turn = "X";
        this.board = new Array(9).fill(null);
        // console.log(this.board);

    }
    nextTurn(){
        if(this.turn == "X"){
            this.turn="O";
        }else{
            this.turn = "X"
        }
    
    }

    makeMove(i){

        if(this.StopGame())
            return

        if(this.board[i]!="X" && this.board[i]!="O" ){
            this.board[i] = this.turn;
            let winstatus= this.checkWin();
            if(!winstatus){
                this.nextTurn();
            }
        }

    }

    checkWin(){
        const wincase= [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2],
        ]

        for(const i of wincase){

            const [x,y,z ] =i; 
            // console.log(x,y,z)
            if(this.board[x]=="X" &&this.board[y]=="X" && this.board[z]=="X" ){

                // console.log("WIN");
                return i;
            }
            else if(this.board[x]=="O" &&this.board[y]=="O" && this.board[z]=="O" ){
                // console.log("WIN");
                return i ;
            }
        }

    }




    StopGame(){
        let winstatus= this.checkWin();
        if(winstatus){
            return true;
            
        }
        else{
            return false;
        }
    }

    // newGame(){
    //     this.board = new Array(9).fill(null);
    // }



}






export default Game; 