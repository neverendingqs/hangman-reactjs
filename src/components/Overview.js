import React, { Component } from 'react';

class Overview extends Component {
  getNumGuessesLeft() {
    const lettersGuessed = Object
      .keys(this.props.lettersStatus)
      .filter(key => this.props.lettersStatus[key]);
    
    const numWrongGuesses = lettersGuessed.reduce(
      (acc, letter) => this.props.currentWord.includes(letter)
        ? acc
        : acc + 1,
      0
    );

    return this.props.maxGuesses - numWrongGuesses;
  }

  render() {
    return <div className="row">
      <h2>Guesses Left</h2>
      {this.getNumGuessesLeft()}
    </div>;
  }
}

export default Overview;
