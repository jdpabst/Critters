import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Add.css';


class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
          menu: false,
          species: '',
          datefound: '',
          latitude: '',
          longitude: '',
          pic: '',
          additional: ''

        }
        this.handleMenu = this.handleMenu.bind(this);
        this.speciesSubmit = this.speciesSubmit.bind(this);
        this.resetInput = this.resetInput.bind(this);
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
      speciesSubmit(value, type){
        let state = Object.assign({}, this.state);
        state[type] = value;
        this.setState(state);
      }
      resetInput(){
        axios.post('/api/add', {
          species: this.state.species,
          datefound: this.state.datefound,
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          additional: this.state.additional,
          pic: this.state.pic
        });
        this.setState({
          species: '',
          datefound: '',
          latitude: '',
          longitude: '',
          additional: '',
          pic: ''
        });
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
                <Link to='/settings' style={{textDecoration:'none', color:'white'}}><li>SETTINGS</li></Link>
                    <li>ABOUT</li>
                </ul>
              </div>
              <section id="input">
                <input type="input" placeholder="SPECIES" onChange={(e) => this.speciesSubmit(e.target.value, 'species')} value={ this.state.species }/>
                <input type="input" placeholder="DATE FOUND (MM/DD/YYYY)" onChange={(e) => this.speciesSubmit(e.target.value, "datefound")} value={ this.state.datefound }/>
                <input type="input" placeholder="LATITUDE" onChange={(e) => this.speciesSubmit(e.target.value, "latitude")} value={ this.state.latitude }/>
                <input type="input" placeholder="LONGITUDE" onChange={(e) => this.speciesSubmit(e.target.value, "longitude")} value={ this.state.longitude }/>
                <textarea placeholder="ADDITIONAL NOTES" onChange={(e) => this.speciesSubmit(e.target.value, "additional")} value={ this.state.additional }/>
                <input id="input_pic" type="input" placeholder="PICTURE URL" onChange={(e) => this.speciesSubmit(e.target.value, "pic")} value={ this.state.pic }/>
                <img src={ this.state.pic }/>
            </section>
            <div id="add_bttn" onClick={ this.resetInput }>+</div>
            </div>
        </div>
      </div>
    );
  }
}


export default Add;