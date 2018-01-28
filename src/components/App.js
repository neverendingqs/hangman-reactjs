import React from 'react';
import Diagram from '../containers/Diagram';
import Keyboard from '../containers/Keyboard';
import Overview from '../containers/Overview';

export default () =>
  <div>
    <div className="row">
      <div className="col-md-12">
        <Diagram />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
      <Overview />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
      <Keyboard />
      </div>
    </div>
  </div>;
