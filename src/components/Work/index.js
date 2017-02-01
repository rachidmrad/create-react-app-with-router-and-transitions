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
  }

  handleScroll(e) {
    //debounce(function(e) {
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
    // }, 150);
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
  }

  componentWillUnmount() {
    const holder = ReactDOM.findDOMNode(this.refs.holder);
    holder.removeEventListener('mousewheel', this.handleScroll);
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
