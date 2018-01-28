import React from 'react';

const maskedWordStyle = {
  fontFamily: 'monospace',
  fontSize: '100px',
  fontWeight:'bold',
  letterSpacing: '15px'
};

const Diagram = ({ maskedWord }) =>
  <p
    className='text-center'
    style={maskedWordStyle}
  >
    {maskedWord}
  </p>

export default Diagram;
