import React from 'react';

const Overview = ({
  isGameEnded,
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
      disabled={isGameEnded}
      onClick={() => forfeitOnClick()}
    >
      Forfeit
    </button>
  </div>;

export default Overview;
