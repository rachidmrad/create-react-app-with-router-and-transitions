// src/components/Work1/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import './style.css';
import extrenalLink from './external-link.svg';

export default class Work4 extends Component {
  componentDidMount() {
    const scrollDuration = 600;
    const scrollHeight = window.scrollY,
          scrollStep = Math.PI / ( scrollDuration / 15 ),
          cosParameter = scrollHeight / 2;
    let scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
          if ( window.scrollY !== 0 ) {
            scrollCount = scrollCount + 1;
            scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
            window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
          } else clearInterval(scrollInterval);
        }, 15 );
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App-default', className)} {...props}>
        <div className="App-header vertical-center">
          <div className="App-content vertical-center">
            <p>
              Pack Art &amp; Typography
            </p>
            <img src="img1.jpg" alt="" />
            <img src="img2.jpg" alt="" />
            <img src="img3.jpg" alt="" />
            <img src="img4.jpg" alt="" />
            <img src="img5.jpg" alt="" />
            <img src="img6.jpg" alt="" />
            <p>
              <a href="">Full Book</a>
            </p>
          </div>
        </div>
        <div className="App-footer vertical-center">
          <div className="App-content vertical-center">
            <p className="small text-color-dark">
              Other featured projects
            </p>
            <ul className="other-works">
              <li><Link to="/cup">The Perfect Cup</Link></li>
              <li><Link to="/energytomorrow">Energy Tomorrow</Link></li>
              <li><Link to="/api">American Petroleum Institute</Link></li>
              <li><Link to="/packart">Pack Art &amp; Typography</Link></li>
              <li><Link to="/energytogether">Energy Together</Link></li>
            </ul>
            <p className="small">
              <a target="_blank" href="http://www.rachidmrad.com" className="external-link">Archived projects<img src={extrenalLink} alt="external link" /></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
