import React, { Component } from 'react';
import Link from 'react-router-dom';

import './Landing.css';


class Landing extends Component {

  render() {
    return (
      <div className="landing">
          <div id="landing_content_holder">
            <img src="http://www.xiriux.net/wp-content/uploads/android.png" id='phone_img'/>
            <header className="header">
              <div id="ham"></div>
            </header>
            <div id="landing_content">
                <div id="profile"></div>
                <div id="new_track">ADD NEW TRACK</div>
            </div>
        </div>
      </div>
    );
  }
}


export default Landing;