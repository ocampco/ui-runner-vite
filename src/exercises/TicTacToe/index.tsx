import { useState } from 'react';
import Board from './Board';

export enum Player {
  X = 'X',
  O = 'O',
}

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.X);
  const [winningPlayer, setWinningPlayer] = useState<Player | null>(null);

  return (
    <>
      {winningPlayer ? (
        <h2>Winner: {winningPlayer}</h2>
      ) : (
        <h2> Current Player: {currentPlayer}</h2>
      )}
      <Board
        player={currentPlayer}
        changePlayer={setCurrentPlayer}
        winningPlayer={winningPlayer}
        changeWinningPlayer={setWinningPlayer}
      />
    </>
  );
};

export default TicTacToe;
