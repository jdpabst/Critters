import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Setting.css';


class Setting extends Component {

  render() {
    return (
      <div className="setting">
        <div id="add_content_holder">
        <img src="http://www.xiriux.net/wp-content/uploads/android.png" id='phone_img'/>
        <div id="add_content">
            <header className="header">
              <div className="ham" onClick={ this.handleMenu }></div>
             <Link to='/landing' style={{textDecoration:'none', color:'white'}}><div className="home_icon"></div></Link>
            </header>
            <div id='menu' className="drop_down">
              <div id="exit_menu" onClick={ this.handleMenu }></div>
                <ul>
                <Link to='/profile' style={{textDecoration:'none', color:'white'}}><li>PROFILE</li></Link>
                <Link to='/settings' style={{textDecoration:'none', color:'white'}}><li>SETTINGS</li></Link>
                    <li>ABOUT</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    );
  }
}


export default Setting;