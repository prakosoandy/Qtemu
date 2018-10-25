import React, {Component} from 'react';
import Link from '../../atoms/Link';
import TextGroup from '../../atoms/TextGroup';
import './style.css';

export default class NavbarQTemu extends Component {

  render() {
    return (
      <TextGroup className='Navbar'>
        <Link text='QTemu' className='nav-logo nav-left'/>
        <Link text='Create Meetup' className='nav-left'/>
        <Link text='Explore' className='nav-left'/>
        <Link text='Login' className='nav-right'/>
      </TextGroup>
    );
  }
}