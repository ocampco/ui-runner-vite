import { useState } from 'react';
import type { Player } from './index';
import type { BoardPosition } from './Board';
import './Square.css';

type SquareProps = {
  player: Player;
  onClick: (position: BoardPosition) => void;
  position: BoardPosition;
  disabled: boolean;
};

const Square = ({ player, onClick, position, disabled }: SquareProps) => {
  const [playerValue, setPlayerValue] = useState<Player>();

  const handleClick = () => {
    setPlayerValue(player);
    onClick(position);
  };

  return (
    <button
      className="button"
      type="button"
      onClick={handleClick}
      disabled={disabled || !!playerValue}
    >
      {playerValue}
    </button>
  );
};

export default Square;
