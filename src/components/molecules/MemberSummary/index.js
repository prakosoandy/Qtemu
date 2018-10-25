import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Title from '../../atoms/Title';
import './style.css';

export default class Members extends Component {

  render() {
    return(
      <div>
        <div className="Members">
          <div class="Members-Body">
            <Img
              width={this.props.width}
              height={this.props.height}
              src={this.props.src}
              alt={this.props.alt}
              className={this.props.className}
            />
            <TextGroup
              className = ''
              <Text content = {this.props.type} className='Members-Type'/>
              <Text content = {this.props.name} className='Members-Name'/>
              <Text content = {this.props.length} className='Members-Total'/>
            />
          </div>
        </div>
      </div>
    )
  }
}
