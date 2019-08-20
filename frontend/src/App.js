import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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
        <DndProvider backend={HTML5Backend}>
          <Router>
            <div className="App">
              <Navbar />
              <Route path="/" component = {HomePage} exact/>
              <Route path="/signup" component = {SignUp}/>
              <Route path="/signin" component = {SignIn}/>
              <Route path="/board" component = {Board} exact/>
              <Route path="/about" component = {AboutPage} />
            </div>
          </Router>
        </DndProvider>
    
      );
    }
}


