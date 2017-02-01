// src/components/Work1/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

export default class Work1 extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <div className="App-header">
          <div className="App-content">
            <p>
              The Perfect Cup
            </p>
          </div>
        </div>
        <div className="App-footer">
          <div className="App-content">
            <p>
              Other featured projects
            </p>
            <ul>
              <li><a href="">EnergyTomorrow</a></li>
              <li><a href="">American Petroleum Institute</a></li>
              <li><a href="">Pack Art &amp; Typography</a></li>
              <li><a href="">EnergyTogether</a></li>
            </ul>
            <p className="small">
              <a target="_blank" href="http://www.rachidmrad.com">Archived projects</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
