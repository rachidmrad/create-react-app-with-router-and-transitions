// src/components/About/index.js
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import { Link, IndexLink } from 'react-router';
import $ from 'jquery';

import './style.css';

(function() {
  var hidden = "hidden";

  // Standards:
  if (hidden in document)
    document.addEventListener("visibilitychange", onchange);
  else if ((hidden = "mozHidden") in document)
    document.addEventListener("mozvisibilitychange", onchange);
  else if ((hidden = "webkitHidden") in document)
    document.addEventListener("webkitvisibilitychange", onchange);
  else if ((hidden = "msHidden") in document)
    document.addEventListener("msvisibilitychange", onchange);
  // IE 9 and lower:
  else if ("onfocusin" in document)
    document.onfocusin = document.onfocusout = onchange;
  // All others:
  else
    window.onpageshow = window.onpagehide
    = window.onfocus = window.onblur = onchange;

  function onchange (evt) {
    var v = "visible", h = "hidden",
        evtMap = {
          focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
        };

    evt = evt || window.event;
    if (evt.type in evtMap)
      document.body.className = evtMap[evt.type];
    else
      document.body.className = this[hidden] ? "hidden" : "visible";

    if (document.body.className = this[hidden]) {
      $("link[rel*='shortcut icon']").attr("href", "favicon2.ico");
      document.title = 'Arrgh';
    } else {
      $("link[rel*='shortcut icon']").attr("href", "favicon.ico");
      document.title = 'Rachid Mrad';
    }
  }
})();




export default class Layout extends Component {

  render() {
    const { children, location, className, ...props } = this.props;
    return (
      <div className={classnames('Layout', className)} {...props}>
        <ul className="navigation">
          <li><IndexLink to="/" activeClassName="active">about</IndexLink></li>
          <li><Link to="/Work" activeClassName="active">latest work</Link></li>
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
