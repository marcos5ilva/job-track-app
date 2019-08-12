import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import './App.css';

class App extends React.Component {
  
  render (){
      return (
        <Router>
          <div className="App">
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} />
          </div>
        </Router>
    
      );
    }
}

export default App;
