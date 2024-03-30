import './Square.css';

type SquareProps = {
  x: number;
  y: number;
  value: 'X' | 'O' | undefined;
  boardIndex: number;
  handleClick: (boardIndex: number) => void;
};

const Square = ({ x, y, value, boardIndex, handleClick }: SquareProps) => (
  <button className="square" onClick={() => handleClick(boardIndex)}>
    {value}
  </button>
);

export default Square;
