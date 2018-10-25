import React, { Component } from 'react';
import Text from '../../atoms/Text';
import TextGroup from '../../atoms/TextGroup';
import Button from '@material-ui/core/Button';
import './style.css';

export default class MediaBody extends Component { 
  
  render() {
    return(
      <TextGroup className='DataSet'>
        <Text content={this.props.title} className='DataTitle'/>
        <div className='DataDetail'>
          <div className='space25px'>
            <Text content='Location'/>
            <Text content='Members'/>
            <Text content='Organizer'/>
          </div>
          <div className='space25px'>
            <Text content=':'/>
            <Text content=':'/>
            <Text content=':'/>
          </div>
          <div>
            <Text content={this.props.location}/>
            <Text content={this.props.totalMembers}/>
            <Text content={this.props.organizer}/>
          </div>
        </div>
        <Button variant="raised" color="red">Join Us</Button>
        
      </TextGroup>
    )
  }
}