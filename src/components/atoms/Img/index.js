import React, {Component} from 'react';
import './style.css';

export default class Img extends Component {
  render() {
    let chainedNewClass = null;

    if (this.props.classDynamic) {
      chainedNewClass = this.props.classDynamic.map((eachNewClass) => {
        console.log('each class', eachNewClass);

        let combined = eachNewClass + ' ';

        return combined;
      });
    };

    let chainedClass = (this.props.className + ' ' + chainedNewClass);

    console.log('chainedClass di dalam img', chainedClass);

    return (
      <img
        width={this.props.width}
        height={this.props.height}
        src={this.props.src}
        alt={this.props.alt}
        className={chainedClass}
      />
    );
  }
}
