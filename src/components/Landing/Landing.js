import React, { Component } from 'react';
import Link from 'react-router-dom';

import './Landing.css';


class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <img src="http://www.xiriux.net/wp-content/uploads/android.png" id='phone_img'/>
        <div id="new_track">ADD NEW TRACK</div>
      </div>
    );
  }
}


export default Landing;