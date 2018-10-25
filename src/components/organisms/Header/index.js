import React, { Component } from 'react';
import Img from '../../atoms/Img';
import MediaBody from '../../molecules/MediaBody';
import './style.css';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      newClassArr: []
    };
  }

  handleClick = (className) => {
    let state = this.state;

    state['newClassArr'].push(className);

    this.setState(state);
  }

  render() {
    console.log('ini state', this.state.newClassArr);

    return(
      <div>
        <div
          style={{backgroundColor: 'pink'}}
          className='Media'
          onClick={() => this.handleClick('MediaBlack')}
        >
          <Img
            width={160}
            height={160}
            src={this.props.image}
            alt="thumbnail"
            className='MediaLogo'
            classDynamic={this.state.newClassArr}
          />
          <MediaBody
            title={this.props.title}
            location={this.props.location}
            totalMembers={this.props.totalMembers}
            organizer={this.props.organizer}
          />
        </div>
      </div>
    )
  }
}
