import React, { Component } from 'react';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
      <img src="http://www.xiriux.net/wp-content/uploads/android.png" id='phone_img'/>
      <div id="phone_content">
        <div id="transparent_overlay"></div>
        <h1>Critter Tracker</h1>
        <div id="login-bttn">LOGIN</div>
      </div>
      </div>
    );
  }
}


export default Home;