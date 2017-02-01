// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import $ from 'jquery';

import './style.css';

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

let ts;
var error = 5; //touch sensitivity, I found between 4 and 7 to be good values.

class Work extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 2
    };
    this.handleScroll = debounce(this.handleScroll.bind(this),50);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  handleTouchStart(e) {
     ts = e.touches[0].clientY;
  }

  handleTouchEnd(e) {
    let te = e.changedTouches[0].clientY;
    let currentIndex = this.state.activeIndex;

    if (Math.abs(te - ts) > error) {

      if (ts < te) {
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
    );
  }

  componentDidMount() {
    const holder = ReactDOM.findDOMNode(this.refs.holder);
    holder.addEventListener('mousewheel', this.handleScroll);
    holder.addEventListener('touchstart', this.handleTouchStart);
    holder.addEventListener('touchend', this.handleTouchEnd);
  }

  componentWillUnmount() {
    const holder = ReactDOM.findDOMNode(this.refs.holder);
    holder.removeEventListener('mousewheel', this.handleScroll);
    holder.removeEventListener('touchstart', this.handleTouchStart);
    holder.removeEventListener('touchend', this.handleTouchEnd);
  }


  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Work', 'text-color-light', className)} {...props}>
        <div className="App-header App-works" ref="holder">
          <div className="App-content">
            <ul>
              <div className="touch-screen"></div>
              <li className={this.isActive(0)}><a href="http://www.rachidmrad.com">The Perfect Cup</a></li>
              <li className={this.isActive(1)}><a href="http://www.energytomorrow.org">Energy Tomorrow</a></li>
              <li className={this.isActive(2)}><a href="http://www.api.org">American Petroleum Institute</a></li>
              <li className={this.isActive(3)}><a href="http://www.rachidmrad.com">Pack Art &amp; Typography</a></li>
              <li className={this.isActive(4)}><a href="http://www.energytogether.org">Energy Together</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
