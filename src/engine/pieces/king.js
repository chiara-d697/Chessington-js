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

        // Middle | 8 possible moves
        if(r !== 0 && c !== 0 && r !== 7 && c !== 7) {
            return [
                Square.at(r+1, c-1), Square.at(r+1, c), Square.at(r+1, c+1), Square.at(r, c-1), 
                Square.at(r, c+1), Square.at(r-1, c-1), Square.at(r-1, c), Square.at(r-1, c+1)
            ];
        }

        // Edges | 5 possible moves
        if(r === 7 && c !== 0 && c!== 7) {
            return [
                Square.at(r, c-1), Square.at(r, c+1), Square.at(r-1, c-1), 
                Square.at(r-1, c), Square.at(r-1, c+1)
            ]
        } else if (c === 7 && r !== 7 && r !== 0) {
            return [
                Square.at(r+1, c-1), Square.at(r+1, c), Square.at(r, c-1), 
                Square.at(r-1, c-1), Square.at(r-1, c),
            ]
        } else if (r === 0 && c !== 0 && c !== 7) {
            return [
                Square.at(r, c-1), Square.at(r, c+1), Square.at(r+1, c-1),
                Square.at(r+1, c), Square.at(r+1, c+1)
            ]
        } else if (c === 0 && r !== 7 && r !== 0) {
            return [
                Square.at(r+1, c), Square.at(r-1, c), Square.at(r+1, c+1),
                Square.at(r, c+1), Square.at(r-1, c+1)
            ]
        }

        // Corners | 3 possible moves (hard-coded)
        if(r === 7 && c === 0) {
            return [
                Square.at(7, 1), Square.at(6, 0), Square.at(6, 1)
            ] 
        } else if (r === 7 && c === 7) {
            return [
                Square.at(7, 6), Square.at(6, 6), Square.at(6, 7)
            ]
        } else if (r === 0 && c === 0) {
            return [
                Square.at(1, 0), Square.at(1, 1), Square.at(0, 1)
            ]
        } else if (r === 0 && c === 7) {
            return [
                Square.at(0, 6), Square.at(1, 6), Square.at(1, 7)
            ]
        }
    }
}
