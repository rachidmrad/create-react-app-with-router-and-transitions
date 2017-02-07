// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';
import email from './email.svg';
import audiodescription from './audio-description.svg';
import bitbucket from './bitbucket.svg';
import facebook from './facebook.svg';
import linkedin from './linkedin.svg';
import phone from './phone.svg';
import twitter from './twitter.svg';
import whatsapp from './whatsapp.svg';
import github from './github.svg';


export default class About extends Component {
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
              My name is <a href="" className="icon-inline">Rachid<img src={audiodescription} alt="Audio Description" /></a>. I&rsquo;m a creative developer based in Washington DC. I work at <a target="_blank" href="http://www.api.org/">the API</a>.
            </p>
          </div>
        </div>
        <div className="App-footer vertical-center">
          <div className="App-content vertical-center">
            <p>
              Connection vectors
            </p>
            <ul className="social-nav">
              <li><a href="">email <img src={email} alt="email" /></a></li>
              <li><a href="">linkedin <img src={linkedin} alt="linkedin" /></a></li>
              <li><a href="">phone <img src={phone} alt="phone" /></a></li>
              <li><a href="">whatsapp <img src={whatsapp} alt="whatsapp" /></a></li>
              <li><a href="">facebook <img src={facebook} alt="facebook" /></a></li>
              <li><a href="">twitter <img src={twitter} alt="twitter" /></a></li>
              <li><a href="">bitbucket <img src={bitbucket} alt="bitbucket" /></a></li>
              <li><a href="">github <img src={github} alt="github" /></a></li>
            </ul>
            <p className="small">
              <a href="mailto:rachid.mrad@gmail.com">rachid.mrad@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
