import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Setting.css';


class Setting extends Component {
    constructor(props){
        super(props);
        this.state = {
          menu: false,
          bg: false,
          profile: false,
        }
        this.handleMenu = this.handleMenu.bind(this);
        this.handleBG = this.handleBG.bind(this);
      }
    
      handleBG(){
        if(!this.state.bg){
          document.getElementById('bg_modal').style.display = 'block'
          this.setState({
            bg: true
          })
        } else {
          document.getElementById('bg_modal').style.display = 'none'
          this.setState({
            bg: false
          })
        }
      }
      handleProfile(){
        if(!this.state.bg){
          document.getElementById('profile_modal').style.display = 'block'
          this.setState({
            profile: true
          })
        } else {
          document.getElementById('profile_modal').style.display = 'none'
          this.setState({
            profile: false
          })
        }
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
                  <div className="ctrl" id="bg_ctrl" onClick={ this.handleBG }>
                      <div className="arrow"></div>
                      <p>Update Background Image</p>
                  </div>

                  <div className="ctrl" id="profile_ctrl">
                      <div className="arrow"></div>
                      <p>Update Profile Image</p>
                  </div>
                  <div className="ctrl" id="theme_ctrl">
                      <div className="theme"></div>
                      <p>Change Theme</p>
                  </div>
              </section>
              <section id="bg_modal">
                <div id="bg_modal_exit" onClick={ this.handleBG }>X</div>
                <div id="bg_prev"></div>
                <div id="bg_upload">UPDATE IMAGE</div>
              </section>
              <section id="profile_modal">
                <div id="profile_modal_exit" onClick={ this.handleProfile }>X</div>
                <div id="profile_prev"></div>
                <div id="profile_upload">UPDATE IMAGE</div>
              </section>
            </div>
        </div>
      </div>
    );
  }
}


export default Setting;