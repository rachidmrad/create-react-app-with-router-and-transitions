// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

class Work extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Work', 'text-color-light', className)} {...props}>
        <div className="App-header">
          <ul>
            <li>The Perfect Cup</li>
            <li>Energy Tomorrow</li>
            <li>American Petroleum Institute</li>
            <li>Pack Art &amp; Tupography</li>
            <li>Energy Together</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Work;
