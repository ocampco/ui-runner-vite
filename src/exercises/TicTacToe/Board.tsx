import { useEffect, useState } from 'react';
import Square from './Square';
import hasWon from './hasWon';
import { Player } from './index';
import './Board.css';

export type BoardPosition = [number, number];

// TODO: Generate positions given columns and rows
const boardPositons: BoardPosition[] = [
  [0, 0],
  [1, 0],
  [2, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [0, 2],
  [1, 2],
  [2, 2],
];

type Board = {
  [key in Player]: BoardPosition[];
};

type BoardProps = {
  player: Player;
  changePlayer: (player: Player) => void;
  winningPlayer: Player | null;
  changeWinningPlayer: (player: Player) => void;
};

const Board = ({
  player,
  changePlayer,
  winningPlayer,
  changeWinningPlayer,
}: BoardProps) => {
  const [board, setBoard] = useState({
    [Player.X]: [],
    [Player.O]: [],
  });

  useEffect(() => {
    if (hasWon(board[player])) changeWinningPlayer(player);
    else {
      const nextPlayer = player === Player.X ? Player.O : Player.X;

      changePlayer(nextPlayer);
    }
  }, [board]);

  const handleClick = async (position: BoardPosition) => {
    if (!winningPlayer) {
      setBoard({
        ...board,
        [player]: [...board[player], position],
      });
    }
  };

  return (
    <div className="board">
      {boardPositons.map((position) => (
        <Square
          key={position.toString()}
          onClick={handleClick}
          player={player}
          position={position}
          disabled={!!winningPlayer}
        />
      ))}
    </div>
  );
};

export default Board;
