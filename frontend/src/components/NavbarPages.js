import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export default class NavbarPages  extends Component{
  
    render(){
        return(
            /* <nav className = "navbar navbar-dark  navbar-expand-lg ">
                /*<Link to="/" className="navbar-brand">Job note</Link>
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
            </nav>*/
            <Navbar bg="dark" >
                <Navbar.Brand href="/" >
                        <img
                        src="/img/jobnoteLogoBrand.png"
                        alt ="Job Note Logo"
                        />Job Note
                        </Navbar.Brand>
                <Nav >
                    <Nav.Item className="justify-content-end">
                        <Nav.Link href="/signin">login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/signin">sign up</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
            </Navbar>
        )
    }
}


