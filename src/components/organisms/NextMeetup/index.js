import React, {Component} from 'react';
import Text from '../../atoms/Text';
import Title from '../../atoms/Title';
import TextGroup from '../../atoms/TextGroup';
import './style.css';

export default class NextMeetup extends Component {

  render() {
    return(
      <div>
        <TextGroup className="NextMeetup">
          <Title className='Title' text='Next Meetup'/> 
          <TextGroup className="NextMeetup-Body">
            <Text content={this.props.title} className='NextMeetup-BodyTitle'/>
            <Text content={this.props.date} className='NextMeetup-BodyDate'/>
            <Text content={this.props.greetings}/>
            <Text content={this.props.text}/>
            <Text content={this.props.organizer}/>
          </TextGroup>
        </TextGroup>
      </div>
    )
  }
}
