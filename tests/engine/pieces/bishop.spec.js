import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Bishop', () => {
    
    let board;
    beforeEach(() => board = new Board());

    it('Bishop can move laterally', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(4, 3), bishop);

        const moves = bishop.getAvailableMoves(board);

        const expectedMoves = [
            // Bottom left to top right
            Square.at(1, 0), Square.at(2, 1), Square.at(3, 2), Square.at(5, 4), Square.at(6, 5), Square.at(7, 6),
            // Bottom right to top left
            Square.at(0, 7), Square.at(1, 6), Square.at(2, 5), Square.at(3, 4), Square.at(5, 2), Square.at(6, 1), Square.at(7, 0)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(4, 3), bishop);

        const moves = bishop.getAvailableMoves(board);

    });

});
