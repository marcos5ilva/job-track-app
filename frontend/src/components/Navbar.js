import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar  extends Component{
  
    render(){
        return(
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg ">
                <Link to="/" className="navbar-brand">Job Track</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                        <Link to="/signin" className="nav-link">login</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/signup" className="nav-link">sign up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


