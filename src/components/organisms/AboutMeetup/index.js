import React, {Component} from 'react';
import Text from '../../atoms/Text';
import TextGroup from '../../atoms/TextGroup';
import Title from '../../atoms/Title';
import './style.css';

export default class AboutMeetup extends Component {

  render() {
    return(
      <div>
        <TextGroup className = 'AboutMeetup'>
          <Title className ='Title' text='About Meetup'/>
          <TextGroup className="AboutMeetup-Body">
            <Text content='Come and meet other developers interested in the JavaScript and its library in Greater Jakarta Area'/>
            <TextGroup className = 'make-inline'>
              <Text content='Twitter ' className='space5px'/>
              <Text content={this.props.twitter} className='space5px make-bold'/>
              <Text content=' and we use the hashtag ' className='space5px'/>
              <Text content={this.props.hashtag} className='make-bold'/>
            </TextGroup>
          </TextGroup>
        </TextGroup>
      </div>
    )
  }
}
