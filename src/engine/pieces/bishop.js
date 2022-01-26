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

        for (let i = 0; i < Math.min(7-location.row, 7-location.col); i++) {
            move = Square.at(location.row + (i+1), location.col + (i+1));
            movesArray.push(move);
        }
        // all possible moves in the up negative diagonal
        for (let i = 0; i < Math.min(7-location.row, location.col); i++) {
            move = Square.at(location.row + (i+1), location.col - (i+1));
            movesArray.push(move);
        }
        //all possible moves in the down positive diagonal
        for (let i = 0; i < Math.min(location.row, 7-location.col); i++) {
            move = Square.at(location.row - (i+1), location.col + (i+1));
            movesArray.push(move);
        }
        // all possible moves in the down negative diagonal
        for (let i = 0; i < Math.min(location.row, location.col); i++) {
            move = Square.at(location.row - (i+1), location.col - (i+1));
            movesArray.push(move);
        }

        return movesArray;

    }}