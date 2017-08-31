import React, { Component } from 'react';
import Link from 'react-router-dom';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
        <div id="content_holder">
          <img src="http://www.xiriux.net/wp-content/uploads/android.png" id='phone_img'/>
          <div id="phone_content">
            <div id="transparent_overlay"></div>
            <h1>Critter Tracker</h1>
            <Link to='/landing'><div id="login_bttn">LOGIN</div></Link>
            <p>&copy; jdpabst.com</p>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;