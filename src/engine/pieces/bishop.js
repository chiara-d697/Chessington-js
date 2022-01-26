import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let movesArray = [];
        let move;

        // all possible moves in the up positive diagonal 
  
        console.log(`result is ${res}`);

        for (let i = 1; i >= Math.min(location.row, location.col); i++) {
            move = Square.at(1, 2);
           // console.log(`move is ${move}`);
            console.log(`Min move is ${Math.min(location.row, location.col)}`);
            movesArray.push(move);
        }
        // all possible moves in the up negative diagonal
        for (let i = 1; i >= Math.min(location.row, location.col); i++) {
            move = Square.at(location.row + 1, location.col - 1);
            movesArray.push(move);
        }
        //all possible moves in the down positive diagonal
        for (let i = 1; i >= Math.min(location.row, location.col); i++) {
            move = Square.at(location.row - 1, location.col + 1);
            movesArray.push(move);
        }
        // all possible moves in the down negative diagonal
        for (let i = 1; i >= Math.min(location.row, location.col); i++) {
            move = Square.at(location.row - 1, location.col - 1);
            movesArray.push(move);
        }

         console.log(`movesArray is ${movesArray}`);
        return movesArray;

    }}