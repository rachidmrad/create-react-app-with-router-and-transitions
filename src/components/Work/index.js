// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import $ from 'jquery';

import './style.css';





class Work extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 2
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    let currentIndex = this.state.activeIndex;
    if(e.wheelDelta > 0) {
      if (currentIndex === 0) {
        this.setState({ activeIndex : 4} );
      } else {
        this.setState({ activeIndex : currentIndex-1} );
      }
    } else {
      if (currentIndex === 4) {
        this.setState({ activeIndex : 0} );
      } else {
        this.setState({ activeIndex : currentIndex+1} );
      }
    }
  }

  isActive(value){
    let currentClass = '';
    switch(value) {
        case this.state.activeIndex:
            currentClass = 'active';
            break;
        case this.state.activeIndex-1:
            currentClass = 'prev';
            break;
        case this.state.activeIndex+1:
            currentClass = 'next';
            break;
        default:
            currentClass = '';
    }
    return (
      currentClass
      //(value===this.state.activeIndex) ? 'active' : 'default'
    );
  }

  componentDidMount() {
    const holder = ReactDOM.findDOMNode(this.refs.holder);
    holder.addEventListener('touchmove', this.handleScroll);
  }

  componentWillUnmount() {
    const holder = ReactDOM.findDOMNode(this.refs.holder);
    holder.removeEventListener('touchmove', this.handleScroll);
  }


  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Work', 'text-color-light', className)} {...props}>
        <div className="App-header App-works" ref="holder">
          <div className="App-content">
            <ul>
              <li className={this.isActive(0)}>The Perfect Cup</li>
              <li className={this.isActive(1)}>Energy Tomorrow</li>
              <li className={this.isActive(2)}>American Petroleum Institute</li>
              <li className={this.isActive(3)}>Pack Art &amp; Typography</li>
              <li className={this.isActive(4)}>Energy Together</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
