// src/components/About/index.js
import React, { Component } from 'react';
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
        <ul className="navigation">
          <li><Link to="/Work" activeClassName="active">work</Link></li>
          <li><IndexLink to="/" activeClassName="active">about</IndexLink></li>
        </ul>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
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
