import React, { Component } from 'react';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
      <img src="http://www.xiriux.net/wp-content/uploads/android.png" id='phone_img'/>
      <h1>Critter Tracker</h1>
      <p>LOGIN</p>
      </div>
    );
  }
}


export default Home;