import 'chai/register-should';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('King', () => {
    let board;
    beforeEach(() => board = new Board()); 

    it('can move one position in any direction if not at the edge or corner of the board', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(4, 5), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(5, 4), Square.at(5, 5), Square.at(5, 6), Square.at(4, 4), 
            Square.at(4, 6), Square.at(3, 4), Square.at(3, 5), Square.at(3, 6)
        ];

        moves.should.deep.include.members(expectedMoves);
        moves.should.have.length(8);
    });

    it('can only make one of five moves if location of row is 7 but location is not a corner sqaure', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(7, 2), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(7, 1), Square.at(7, 3), Square.at(6, 1),
            Square.at(6, 2), Square.at(6, 3)
        ];

        moves.should.deep.include.members(expectedMoves);
        moves.should.have.length(5);
    });

    it('can only make one of three moves if location is the top left hand corner square', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(7, 0), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(7, 1), Square.at(6, 0), Square.at(6, 1)
        ];

        moves.should.deep.include.members(expectedMoves);
        moves.should.have.length(3);
    });
});
