import React from 'react';
import Forms from './Components/Form';
import './sass/style.scss';

function App() {
  return (
    <div className='container'>
      <h1>Inputs</h1>
      <Forms />
      <div>
        <p className="cell-title">
          Made for <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">DevChallenges</a> by <a href="https://github.com/sasha-khbrv?tab=repositories" target="_blank" rel="noreferrer">Sasha Khbrv</a>
        </p>
      </div>
    </div>
  );
}

export default App;
