import React from 'react';
import Keyboard from '../containers/Keyboard';
import Overview from '../containers/Overview';
import Status from '../containers/Status';

export default () =>
  <div>
    <Status />
    <Overview />
    <Keyboard />
  </div>;
