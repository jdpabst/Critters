import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Landing.css';


class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: false
    }
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(){
    if(!this.state.menu){
      document.getElementById('menu').style.display = 'block'
      this.setState({
        menu: true
      })
    } else {
      document.getElementById('menu').style.display = 'none'
      this.setState({
        menu: false
      })
    }
  }

  render() {
    return (
      <div className="landing">
          <div id="landing_content_holder">
            <img src="http://www.xiriux.net/wp-content/uploads/android.png" id='phone_img'/>
            <div id="landing_content">
                <header className="header">
                  <div className="ham" onClick={ this.handleMenu }></div>
                </header>
                <div id='menu' className="drop_down">
                  <div id="exit_menu" onClick={ this.handleMenu }></div>
                  <ul>
                    <Link to='/profile' style={{textDecoration:'none', color:'white'}}><li>PROFILE</li></Link>
                    <Link to='/settings' style={{textDecoration:'none', color:'white'}}><li>SETTINGS</li></Link>
                    <li>ABOUT</li>
                  </ul>
                </div>
                <Link to='/profile' style={{textDecoration:'none', color:'white'}}><div id="profile"></div></Link>
                <Link to='/add' style={{textDecoration:'none', color:'white'}}><div id="new_track"> + CRITTER</div></Link>
            </div>
        </div>
      </div>
    );
  }
}


export default Landing;