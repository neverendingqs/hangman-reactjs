import React from 'react';

const paragraphStyle = {
  fontSize: '30px',
};

const buttonsStyle = {
  margin: '2px',
};

const Overview = ({
  hasUserForfeited,
  hasUserWon,
  forfeitOnClick,
  newGameOnClick,
  numGuessesLeft
}) =>
  <div className='text-center'>
    <p style={paragraphStyle}>
      {numGuessesLeft} Guess{numGuessesLeft === 1 ? '' : 'es'} Left
    </p>

    <button
      type='button'
      className='btn btn-success'
      style={buttonsStyle}
      onClick={() => newGameOnClick()}
    >
      New Game
    </button>
    <button
      type='button'
      className='btn btn-danger'
      style={buttonsStyle}
      disabled={hasUserForfeited || hasUserWon}
      onClick={() => forfeitOnClick()}
    >
      Show Word
    </button>
  </div>;

export default Overview;
