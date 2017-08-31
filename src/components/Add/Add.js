import React, { Component } from 'react';

import './Add.css';


class Add extends Component {
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
      <div className="add">
        <div id="add_content_holder">
        <img src="http://www.xiriux.net/wp-content/uploads/android.png" id='phone_img'/>
        <div id="add_content">
            <header className="header">
              <div className="ham" onClick={ this.handleMenu }></div>
              <div className="home_icon"></div>
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
            <section id="input">
                <input type="input" placeholder="SPECIES"/>
                <input type="input" placeholder="DATE FOUND"/>
                <input type="input" placeholder="LATITUDE"/>
                <input type="input" placeholder="LONGITUDE"/>
                <textarea placeholder="ADDITIONAL NOTES"/>
            </section>
            <div id="add_bttn">+</div>
        </div>
      </div>
    );
  }
}


export default Add;