import React from 'react';

import { Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Board from './components/Board';


const Routes = ()=>(
            <Switch>
                <Route path="/" component = {HomePage} exact/>
                <Route path="/signup" component = {SignUp}/>
                <Route path="/signin" component = {SignIn}/>
                <Route path="/board" component = {Board} exact/>
                <Route path="/about" component = {AboutPage} />    
            </Switch> 
             
    
);

export default Routes;