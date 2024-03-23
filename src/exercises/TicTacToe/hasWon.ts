import type { BoardPosition } from './Board';

// TODO: Dynamically create
const winningPositions: BoardPosition[][] = [
  // horizontal
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  // vertical
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  // diagonal
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [2, 0],
    [1, 1],
    [0, 2],
  ],
];

const hasWon = (positions: BoardPosition[]): boolean =>
  winningPositions.some((winningPositionSet) => {
    return winningPositionSet.every(([row, column]) => {
      return positions.some(([playerRow, playerColumn]) => {
        return playerRow === row && playerColumn === column;
      });
    });
  });

export default hasWon;
