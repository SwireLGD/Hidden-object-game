import React from 'react';
import Cell from './Cell';

type BoardProps = {
  hiddenObjectIndex: number;
  onCellClick: () => void;
};

const Board: React.FC<BoardProps> = ({ hiddenObjectIndex, onCellClick }) => {
  const initialBoard = Array(36).fill(false);

  return (
    <div className="gameBox">
      {initialBoard.map((_cell, index) => (
        <Cell key={index} index={index} hiddenObjectIndex={hiddenObjectIndex} onCellClick={onCellClick} />
      ))}
    </div>
  );
};

export default Board;
