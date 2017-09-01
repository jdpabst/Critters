import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
             <Link to='/landing' style={{textDecoration:'none', color:'white'}}><div className="home_icon"></div></Link>
            </header>
            <div id='menu' className="drop_down">
              <div id="exit_menu" onClick={ this.handleMenu }></div>
                <ul>
                <Link to='/profile' style={{textDecoration:'none', color:'white'}}><li>PROFILE</li></Link>
                    <li>SETTINGS</li>
                    <li>ABOUT</li>
                </ul>
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
      </div>
    );
  }
}


export default Add;