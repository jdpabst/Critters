import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Setting.css';


class Setting extends Component {

  render() {
    return (
      <div className="setting">
        <div id="setting_content">
            <header className="header">
              <div className="ham" onClick={ this.handleMenu }></div>
             <Link to='/landing' style={{textDecoration:'none', color:'white'}}><div className="home_icon"></div></Link>
            </header>
            <div id='menu' className="drop_down">
              <div id="exit_menu" onClick={ this.handleMenu }></div>
                <ul>
                    <li>PROFILE</li>
                    <li style={{opacity: '0.5', cursor: 'default'}}>SETTINGS</li>
                    <li>ABOUT</li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}


export default Setting;