import React, {Component} from 'react';
import './style.css';

export default class Link extends Component {

  render() {
    return (
      <a onClick={this.props.onClick} className={this.props.className}>{this.props.text}</a>
    );
  }
}
