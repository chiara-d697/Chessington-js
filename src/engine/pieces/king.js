import Square from '../square';
import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let r = location.row;
        let c = location.col;

        if(r !== 0 && c !== 0 && r !== 7 && c !== 7) {
            return [
                Square.at(r+1, c-1), Square.at(r+1, c), Square.at(r+1, c+1), Square.at(r, c-1), 
                Square.at(r, c+1), Square.at(r-1, c-1), Square.at(r-1, c), Square.at(r-1, c+1)
            ];
        }

        if(r === 7 && c !== 0 && c!== 7) {
            return [
                Square.at(r, c-1), Square.at(r, c+1), Square.at(r-1, c-1), Square.at(r-1, c),
                Square.at(r-1, c+1)
            ]
        }

        if(r === 7 && c === 0) {
            return [
                Square.at(r, c+1), Square.at(r-1, c), Square.at(r-1, c+1)
            ] 
        }







    }
}
