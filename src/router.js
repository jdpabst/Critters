
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Landing from './components/Landing/Landing.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route comoponent={ Landing } path='/landing'/>

    </Switch>
)
