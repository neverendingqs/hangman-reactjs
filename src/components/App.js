import React from 'react';
import Input from '../containers/Input';
import Overview from '../containers/Overview';
import Status from '../containers/Status';

export default () =>
  <div>
    <Status />
    <Overview />
    <Input />
  </div>;
