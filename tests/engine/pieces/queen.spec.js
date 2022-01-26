import 'chai/register-should';
import Queen from '../../../src/engine/pieces/queen';
import Board from '../../../src/engine/board';
import Square from '../../../src/engine/square';

describe('Queen', () => {
    let board;
    beforeEach(() => board = new Board());
    let queen;
    beforeEach(() => queen = new Queen());

    it('can move any number of sqaures in any direction', () => {
        
        board.setPiece(Square.at(4, 3), queen);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [
            // Bottom left to top right
            Square.at(1, 0), Square.at(2, 1), Square.at(3, 2), Square.at(5, 4), Square.at(6, 5), Square.at(7, 6),
            // Bottom right to top left
            Square.at(0, 7), Square.at(1, 6), Square.at(2, 5), Square.at(3, 4), Square.at(5, 2), Square.at(6, 1), Square.at(7, 0),
            // Vertical
            Square.at(7, 3), Square.at(6, 3), Square.at(5, 3), Square.at(3, 3), Square.at(2, 3), Square.at(1, 3), Square.at(0, 3),
            // Horizontal
            Square.at(4, 0), Square.at(4, 1), Square.at(4, 2), Square.at(4, 4), Square.at(4, 5), Square.at(4, 6), Square.at(4, 7)
            
        ];

        moves.should.deep.include.members(expectedMoves);
        moves.should.have.length(27);
    });

    it('can only move in three directions from the bottom left corner square', () => {
        
        board.setPiece(Square.at(0, 0), queen);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [
            // Bottom left to top right
            Square.at(1, 1), Square.at(2, 2), Square.at(3, 3), Square.at(4, 4), Square.at(5, 5), Square.at(6, 6), Square.at(7, 7),
            // Vertical
            Square.at(1, 0), Square.at(2, 0), Square.at(3, 0), Square.at(4, 0), Square.at(5, 0), Square.at(6, 0), Square.at(7, 0),
            // Horizontal
            Square.at(0, 1), Square.at(0, 2), Square.at(0, 3), Square.at(0, 4), Square.at(0, 5), Square.at(0, 6), Square.at(0, 7)
            
        ];

        moves.should.deep.include.members(expectedMoves);
        moves.should.have.length(21);
    });

    
});
