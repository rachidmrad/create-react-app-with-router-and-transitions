// src/components/Work1/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Lazyload from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './style.css';
import extrenalLink from './external-link.svg';

export default class Work1 extends Component {
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
        <div className="App-header">
          <div className="App-content">
            <div className="Sub-fixed-top">
              <p>
                American Petroleum Institute
              </p>
              <p className="small text-color-dark">
                UI/UX/IA Design, Frontend Development
              </p>
            </div>
            <div className="Sub-fixed-bottom">
              <div className="gradient-screen" />
              <div className="image-wrapper">
                <Lazyload throttle={50} height={1100}>
                  <ReactCSSTransitionGroup key="1"
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                      <img className="img-bordered" src="C_img1.jpg" alt="" />
                  </ReactCSSTransitionGroup>
                </Lazyload>
                <Lazyload throttle={50} height={1100}>
                  <ReactCSSTransitionGroup key="1"
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                      <img className="img-bordered" src="C_img2.jpg" alt="" />
                  </ReactCSSTransitionGroup>
                </Lazyload>
                <Lazyload throttle={50} height={1100}>
                  <ReactCSSTransitionGroup key="1"
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                      <img className="img-bordered" src="C_img3.jpg" alt="" />
                  </ReactCSSTransitionGroup>
                </Lazyload>
                <p>
                  <a target="_blank" href="http://www.api.org">Live site</a>
                </p>
              </div>
            </div>
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
