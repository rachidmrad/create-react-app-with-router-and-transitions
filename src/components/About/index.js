// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
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
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', 'text-color-light', className)} {...props}>
        <div className="App-header">
          <div className="App-content">
            <p>
              My name is Rachid<img src={audiodescription} alt="Audio Description" />. I&rsquo;m a creative developer based in Washington DC. I currently work at <a target="_blank" href="http://www.api.org/">the API</a>.
            </p>
          </div>
        </div>
        <div className="App-footer">
          <div className="App-content">
            <p>
              Connection vectors
            </p>
            <ul>
              <li><a href="">email <img src={email} alt="email" /></a></li>
              <li><a href="">linkedin <img src={linkedin} alt="linkedin" /></a></li>
              <li><a href="">phone <img src={phone} alt="phone" /></a></li>
              <li><a href="">whatsapp <img src={whatsapp} alt="whatsapp" /></a></li>
              <li><a href="">facebook <img src={facebook} alt="facebook" /></a></li>
              <li><a href="">twitter <img src={twitter} alt="twitter" /></a></li>
              <li><a href="">bitbucket <img src={bitbucket} alt="bitbucket" /></a></li>
              <li><a href="">github <img src={github} alt="github" /></a></li>
            </ul>
            <p>
              <a className="text-color-medium" href="mailto:rachid.mrad@gmail.com">rachid.mrad@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
