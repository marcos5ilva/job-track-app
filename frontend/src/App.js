import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//Import components
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Board from './components/Board';

import './App.css';


export default class App extends React.Component {
  
  render (){
      return (
        <Router>
          <div className="App">
            <Navbar />
            <Route path="/" component = {HomePage} exact/>
            <Route path="/signup" component = {SignUp}/>
            <Route path="/signin" component = {SignIn}/>
            <Route path="/board" component = {Board}/>
            <Route path="/about" component = {AboutPage} />
          </div>
        </Router>
    
      );
    }
}


