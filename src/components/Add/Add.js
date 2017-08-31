import React, { Component } from 'react';

import './Add.css';


class Add extends Component {

  render() {
    return (
      <div className="add">
        <div id="add_content_holder">
        <img src="http://www.xiriux.net/wp-content/uploads/android.png" id='phone_img'/>
        <div id="add_content">
            <header className="header">
              <div className="ham" onClick={ this.handleMenu }></div>
            </header>
            <div id='menu' className="drop_down">
              <div id="exit_menu" onClick={ this.handleMenu }></div>
                <ul>
                    <li>PROFILE</li>
                    <li>SETTINGS</li>
                    <li>ABOUT</li>
                </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default Add;