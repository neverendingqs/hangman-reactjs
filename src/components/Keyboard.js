import React, { Component } from 'react';

const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

class Keyboard extends Component {
  getButtonStyle(letter) {
    if(this.props.isLetterInWordMap[letter] === true) {
      return 'btn btn-success';
    }

    if(this.props.isLetterInWordMap[letter] === false) {
      return 'btn btn-danger';
    }

    return 'btn btn-default';
  }

  isButtonDisabled(letter) {
    return this.props.lettersStatus[letter] || this.props.isGameEnded;
  }

  render() {
    return <div className="row">
      {letters.map(letter => (
        <button
          key={`input_${letter}`}
          type='button'
          className={this.getButtonStyle(letter)}
          disabled={this.isButtonDisabled(letter)}
          onClick={() => this.props.onClick(letter)}
        >{letter}</button>
      ))}
    </div>;
  }
}
export default Keyboard;
