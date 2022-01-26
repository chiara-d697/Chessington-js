import Piece from './piece';
import Square from '../square';
import { questionNewPassword } from 'readline-sync';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this)
        let r = location.row;
        let c = location.col;

        const calcMoves = [
            Square.at(r+1, c+2),Square.at(r+2, c+1), Square.at(r+1, c-2), Square.at(r+2, c-1), 
            Square.at(r-1, c+2), Square.at(r-2, c+1), Square.at(r-1, c-2), Square.at(r-2, c-1)
        ];

        const expectedMoves = [];

        
            for(const move of calcMoves) {
                if(move.row < 0 || move.row > 7 || move.col < 0 || move.col > 7) {
                    continue;
                } else {
                    expectedMoves.push(move)
                }
            }
        
        
        return expectedMoves;

    }
}
