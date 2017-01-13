// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import { Link, IndexLink } from 'react-router';

import './style.css';

export default class Layout extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { children, location, className, ...props } = this.props;
    return (
      <div className={classnames('Layout', className)} {...props}>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Works</IndexLink></li>
          <li><Link to="/About" activeClassName="active">About</Link></li>
        </ul>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
