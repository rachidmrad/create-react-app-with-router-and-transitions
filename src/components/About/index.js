// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import $ from 'jquery';

import './style.css';
import downarrow from './down-arrow.svg';
import email from './email.svg';
import audiodescription from './audio-description.svg';
import bitbucket from './bitbucket.svg';
import facebook from './facebook.svg';
import linkedin from './linkedin.svg';
import phone from './phone.svg';
import twitter from './twitter.svg';
import github from './github.svg';


export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }

  componentDidMount() {
    const scrollDuration = 600;
    const scrollHeight = window.scrollY,
          scrollStep = Math.PI / ( scrollDuration / 15 ),
          cosParameter = scrollHeight / 2;
    let scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
          if ( window.scrollY !== 0 ) {
            scrollCount += 1;
            scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
            window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
          } else clearInterval(scrollInterval);
        }, 15 );
  }

  handleClick(event) {
    event.preventDefault();

    let ActiveObjects = [];
    let hiddenObjects = [];

    $('.audioDesc span').each(function() {
      if ($(this).hasClass('active')) {
        ActiveObjects.push($(this));
      } else {
        hiddenObjects.push($(this));
      }
    });

    hiddenObjects.reverse();

    hideVisible();
    setTimeout(showHidden, 300);
    //__OBJECTS.reverse();

    function hideVisible() {
      let letter = ActiveObjects.pop();
      letter.removeClass('active');
      if (ActiveObjects.length) {
        setTimeout(hideVisible, 30);
      }
    }
    function showHidden() {
      let letter = hiddenObjects.pop();
      letter.addClass('active');
      if (hiddenObjects.length) {
        setTimeout(showHidden, 30);
      }
    }
  }

  scrollDown() {
     $("html, body").animate({ scrollTop: $(document).height() }, 450);
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App-default', className)} {...props}>
        <div className="App-header vertical-center">
          <div className="App-content vertical-center">
            <p>
              My name is <a href="javascript(void);" onClick={this.handleClick} className="icon-inline audioDesc">Ra

                  <span className="active">c</span>
                  <span className="active">h</span>
                  <span className="active">i</span>
                  <span className="active">d</span>
                  <span className="active"><img src={audiodescription} alt="Audio Description" /></span>

                  <span>&#8209;</span>
                  <span>s</span>
                  <span>h</span>
                  <span>e</span>
                  <span>e</span>
                  <span>d</span>


                </a>. I&rsquo;m a creative developer based in Washington DC. I work at <a target="_blank" href="http://www.api.org/">the API</a>.
            </p>
            <svg onClick={this.scrollDown} className="down-arrow" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
              <circle id="circle" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" cx="30" cy="30" r="28.209"/>
              <path id="down-arrow" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" d="M30,42.976V19.162 M21.179,31.51L30,42.976l8.821-11.466"/>
            </svg>
          </div>
        </div>
        <div className="App-footer vertical-center">
          <div className="App-content vertical-center">
            <p>
              Connection vectors
            </p>
            <ul className="social-nav">
              <li><a href="mailto:rachid.mrad@gmail.com">email <img src={email} alt="email" /></a></li>
              <li><a href="https://www.linkedin.com/in/rachid-mrad-29907a38/">linkedin <img src={linkedin} alt="linkedin" /></a></li>
              <li><a href="tel:+1-571-213-8505">phone <img src={phone} alt="phone" /></a></li>
              <li><a href="https://www.facebook.com/rachid.j.mrad">facebook <img src={facebook} alt="facebook" /></a></li>
              <li><a href="https://twitter.com/rachidmrad">twitter <img src={twitter} alt="twitter" /></a></li>
              <li><a href="https://bitbucket.org/rachidmrad/">bitbucket <img src={bitbucket} alt="bitbucket" /></a></li>
              <li><a href="https://github.com/rachidmrad">github <img src={github} alt="github" /></a></li>
            </ul>
            <p className="small">
              <a href="mailto:rachid.mrad@gmail.com">rachid.mrad@gmail.com</a>
            </p>
            <p className="small">
              <a href="rmrad_Resume.pdf">Resume (PDF)</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
