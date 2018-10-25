import React, {Component} from 'react';
import Text from '../../atoms/Text';
import TextGroup from '../../atoms/TextGroup'
import './style.css';

export default class Card extends Component {

  render() {
    return (
      <div>
        <TextGroup className = 'CardItem'>
          <Text content = {this.props.date} className = 'Subtitle bold'/>
          <hr /> 
          <div className = 'make-inline'>
            <Text content = {'#' + this.props.id} className = 'space5px bold'/>
            <Text content = {this.props.topic} className ='bold'/>
          </div>
          <div className = 'make-inline'>
            <Text content = {this.props.participants} className = 'space5px bold'/>
            <Text content = 'went'/>
          </div>
          <button className = 'view'>View</button>    
        </TextGroup>
      </div>
    )
  }
}
