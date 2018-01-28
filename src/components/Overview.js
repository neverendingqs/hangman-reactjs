import React from 'react';

const Overview = ({
  hasUserWon,
  isForfeited,
  forfeitOnClick,
  newGameOnClick,
  numGuessesLeft
}) =>
  <div className="row">
    <h2>Guesses Left</h2>
    {numGuessesLeft}
    <button
      type='button'
      className='btn btn-success'
      onClick={() => newGameOnClick()}
    >
      New Game
    </button>
    <button
      type='button'
      className='btn btn-danger'
      disabled={hasUserWon || isForfeited}
      onClick={() => forfeitOnClick()}
    >
      Show Word
    </button>
  </div>;

export default Overview;
