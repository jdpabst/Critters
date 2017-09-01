import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Setting.css';


class Setting extends Component {
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
                    <li style={{opacity: '0.5', cursor: 'default'}}>SETTINGS</li>
                    <li>ABOUT</li>
                </ul>
              </div>
              <section id="settings_select">
                  <div className="ctrl" id="bg_ctrl">
                      <div className="arrow"></div>
                      <p>Update Background Image</p>
                  </div>
                  <div className="ctrl" id="profile_ctrl">
                      <div className="arrow"></div>
                      <p>Update Profile Image</p>
                  </div>
                  <div className="ctrl" id="theme_ctrl">
                      <div className="arrow"></div>
                      <p>Change Theme</p>
                  </div>
              </section>
            </div>
        </div>
      </div>
    );
  }
}


export default Setting;