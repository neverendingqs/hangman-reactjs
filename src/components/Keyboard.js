import React from 'react';

const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const Keyboard = ({ lettersStatus, isGameEnded, onClick }) =>
  <div className="row">
    {letters.map(letter => (
      <button
        key={`input_${letter}`}
        type='button'
        className='btn btn-default'
        disabled={isGameEnded}
        onClick={() => onClick(letter)}
      >{letter}</button>
    ))}
    lettersStatus: {JSON.stringify(lettersStatus)}
  </div>;

export default Keyboard;

