import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 3, ncols = 3 }) {
	const [ board, setBoard ] = useState(createBoard());

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
	function createBoard() {
		let initialBoard = [ [ false, false, false ], [ true, true, false ], [ false, false, false ] ];
		//**  TODO: create array-of-arrays of true/false values */
		return initialBoard;
	}

	function hasWon() {
		return board.every((row) => row.every((cell) => !cell));

		//**TODO: check the board in state to determine whether the player has won. */
	}

	function flipCellsAround(coord) {
		setBoard((oldBoard) => {
			//this takes a string and returns two numbers
			const [ y, x ] = coord.split('-').map(Number);

			const flipCell = (y, x, boardCopy) => {
				// if this coord is actually on board, flip it

				if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
					boardCopy[y][x] = !boardCopy[y][x];
				}
			};

			// TODO: Make a (deep) copy of the oldBoard

			//**  TODO: in the copy, flip this cell and the cells around it */

			// TODO: return the copy

			const boardCopy = oldBoard.map((row) => [ ...row ]);

			flipCell(y, x, boardCopy);
			flipCell(y, x - 1, boardCopy);
			flipCell(y, x + 1, boardCopy);
			flipCell(y - 1, x, boardCopy);
			flipCell(y + 1, x, boardCopy);

			return boardCopy;
		});
	}

	// if the game is won, just show a winning msg & render nothing else

	if (hasWon()) {
		return <h1>You Win!</h1>;
	}

	//**  TODO pretty complex */

	let game = [];

	for (let x = 0; x < nrows; x++) {
		let row = [];
		for (let y = 0; y < ncols; y++) {
			let cordinates = `${x}-${y}`;
			console.log(typeof cordinates, cordinates);
			row.push(
				<Cell key={cordinates} flipCellsAroundMe={() => flipCellsAround(cordinates)} isLit={board[x][y]} />
			);
		}
		game.push(<tr key={x}>{row}</tr>);
	}

	//** TODO not too bad  */

	return (
		<table className="Table">
			<tbody>{game}</tbody>
		</table>
	);
}

export default Board;
