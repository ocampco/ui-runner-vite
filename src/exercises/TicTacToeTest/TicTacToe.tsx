// 3x3 grid
// state = X | O, board
// winner

import { useEffect, useState } from 'react';
import Square from './Square';
import './TicTacToe.css';

type TicTacToeProps = {
  size?: number;
};

type Item = {
  x: number;
  y: number;
  value?: 'X' | 'O' | undefined;
};

const setupBoard = (size: number): Item[] => {
  const board = [];

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      board.push({ x, y });
    }
  }

  return board;
};

// winning combo: [[0,1][1,1][2,1]]
// x: [[0, 2][0, 0]]

const TicTacToe = ({ size = 3 }: TicTacToeProps) => {
  const [board, setBoard] = useState<Item[] | undefined>();
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');

  useEffect(() => {
    const newBoard = setupBoard(size);
    setBoard(newBoard);
  }, [size]);

  const handleClick = (boardIndex: number, oldBoard: Item[] = board) => {
    const newBoard = oldBoard;

    newBoard[boardIndex] = { ...newBoard[boardIndex], value: currentPlayer };

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <div className="board">
      {board &&
        board.map(({ x, y, value }, index) => (
          <Square
            key={`${x}-${y}`}
            x={x}
            y={y}
            value={value}
            boardIndex={index}
            handleClick={handleClick}
          />
        ))}
    </div>
  );
};

export default TicTacToe;
