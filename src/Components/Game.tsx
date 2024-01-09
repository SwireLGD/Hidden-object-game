import React, { useState } from 'react';
import Board from './Board';
import AttemptCounter from './AttemptCounter';

const Game: React.FC = () => {
  const [hiddenObjectIndex, setHiddenObjectIndex] = useState(
    Math.floor(Math.random() * 36)
  );
  const [attempts, setAttempts] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const handleCellClick = () => {
    setAttempts((prevAttempts) => prevAttempts + 1);
  };

  const handleReset = () => {
    setHiddenObjectIndex(Math.floor(Math.random() * 36));
    setAttempts(0);
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <Board key={resetKey} hiddenObjectIndex={hiddenObjectIndex} onCellClick={handleCellClick} />
      <AttemptCounter attempts={attempts} />
      <button onClick={handleReset}>Сброс</button>
    </div>
  );
};

export default Game;
