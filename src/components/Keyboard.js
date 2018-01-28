import React, { Component } from 'react';

const letters = [
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
  ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'],
  ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
];

const rowStyle = {
  justifyContent: 'center',
  alignItems: 'center'
};

const letterStyle = {
  fontSize: '20px',
  fontWeight:'bold',
  height: '50px',
  margin: '2px',
  width: '50px'
};

class Keyboard extends Component {
  getButtonClass(letter) {
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

  createButton(letter) {
    return <button
      key={`input_${letter}`}
      type='button'
      className={this.getButtonClass(letter)}
      style={letterStyle}
      disabled={this.isButtonDisabled(letter)}
      onClick={() => this.props.onClick(letter)}
    >{letter}</button>;
  }

  render() {
    return <div>
      {letters.map(row =>
        <div className='row' style={rowStyle}>
          {row.map(letter => this.createButton(letter))}
        </div>
      )}
    </div>;
  }
}
export default Keyboard;
