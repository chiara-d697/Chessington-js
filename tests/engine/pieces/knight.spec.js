import Knight from '../../../src/engine/pieces/knight';
import Square from '../../../src/engine/square';
import Board from '../../../src/engine/board';


describe('Knight', () => {
    let board;
    beforeEach(() => board = new Board());
    let knight;
    beforeEach(() => knight = new Knight());

    it('can only make one of two possible moves from a corner square', () => {
        
        board.setPiece(Square.at(0, 0), knight);

        const moves = knight.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(1, 2), Square.at(2, 1)
        ];

        moves.should.deep.include.members(expectedMoves);
        moves.should.have.length(2);
    });
});
