import React from 'react';
import Game from './Components/Game';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='app'>
      <h1>Найди кольцо</h1>
      <Game />
    </div>
  );
};

export default App;
