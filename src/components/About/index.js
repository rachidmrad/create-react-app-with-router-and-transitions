// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', 'text-color-light', className)} {...props}>
        <div className="App-header">
          <p>
            My name is Rachid. I&rsquo;m a creative developer based in Washington DC. I currently work at <a target="_blank" href="http://www.api.org/">the API</a>.
          </p>
        </div>
        <div className="App-footer">
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}
