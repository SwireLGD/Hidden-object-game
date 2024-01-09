import React from 'react';

interface AttemptCounterProps {
  attempts: number;
};

const AttemptCounter: React.FC<AttemptCounterProps> = ({ attempts }) => {
  return (
    <div className="attemptCounter">
      <p>Попытки: {attempts}</p>
    </div>
  );
};

export default AttemptCounter;
