
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Landing from './components/Landing/Landing.js';
import Add from './components/Add/Add.js';
import Profile from './components/Profile/Profile.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ Landing } path='/landing'/>
        <Route component={ Add } path="/add"/>
        <Route component={ Profile } path='/profile'/>
    </Switch>
)
