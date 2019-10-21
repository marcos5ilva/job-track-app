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
import Navbar from './components/Navbar'




export default class App extends React.Component {
  
  render (){
      return (
        <DndProvider backend={HTML5Backend}>
          <Router>
            <div className="App">
              <Navbar />
              <Routes />
            </div>
          </Router >
          
        </DndProvider>
    
      );
    }
}


