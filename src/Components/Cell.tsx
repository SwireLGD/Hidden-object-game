import React, { useState } from 'react';

interface CellProps {
  index: number;
  hiddenObjectIndex: number;
  onCellClick: () => void;
}

const Cell: React.FC<CellProps> = ({ index, hiddenObjectIndex, onCellClick }) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(true);
    onCellClick();
  };

  return (
    <div className={`cell ${revealed ? 'revealed' : ''}`} onClick={() => handleClick()}>
      {revealed && index === hiddenObjectIndex && 'O'}
    </div>
  );
};

export default Cell;
