import React, { Component } from 'react';

class Diagram extends Component {
  maskedWord() {
    return this.props.currentWord
      .split('')
      .map(x => this.props.lettersStatus[x] ? x : '_')
      .join('');
  }

  render() {
    return <div className="row">
      <h2>{this.maskedWord()}</h2>
    </div>;
  }
}

export default Diagram;
