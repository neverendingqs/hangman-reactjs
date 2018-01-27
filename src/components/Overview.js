import React from 'react';

const Overview = ({ numGuessesLeft }) =>
  <div className="row">
    <h2>Guesses Left</h2>
    {numGuessesLeft}
  </div>;

export default Overview;
