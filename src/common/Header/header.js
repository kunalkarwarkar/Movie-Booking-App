
import './header.css';
import React, { Component } from 'react';
import SiteLogo from './../../assets/logo.jpeg';
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="siteLogo" src={SiteLogo} alt="Site Logo" />
        {this.props.children};
      </div>
    );
  }
}
  
  export default Header;
