import React from 'react';
import Diagram from '../containers/Diagram';
import Keyboard from '../containers/Keyboard';
import Overview from '../containers/Overview';

export default () =>
  <div>
    <Diagram />
    <Overview />
    <Keyboard />
  </div>;
