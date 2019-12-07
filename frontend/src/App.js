import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import {DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
//Import components
import Routes from './routes';
import NavbarPages from './components/NavbarPages'




export default class App extends React.Component {
  
  constructor(){
    super();

    this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);

    this.state ={
      loggedInStatus : false,
      user: {}
    }
  }
  
  handleSuccessfullAuth() {
    this.setState({loggedInStatus: true});
    
  }

  handleLogout() {
    this.setState({loggedInStatus: false});
    
  }
  
  
  
  render (){
      return (
        <DndProvider backend={HTML5Backend}>
          <Router>
            <div className="App">
              <NavbarPages loggedInStatus ={this.state.loggedInStatus} handleLogout = {this.handleLogout} />
              <Routes  loggedInStatus ={this.state.loggedInStatus} handleSuccessfullAuth={this.handleSuccessfullAuth} />
            </div>
          </Router >
          
        </DndProvider>
    
      );
    }
}


