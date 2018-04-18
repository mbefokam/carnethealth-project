import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar,Nav,NavItem }from  'react-bootstrap';
import { LinearProgress } from 'material-ui/Progress';
import Home from '../home/HomePage';
import About from '../about/AboutPage';
import Contact from  '../contact/ContactPage';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import './Header.css'; 

 

const Header = () => {
    return(
      <div>

<Navbar  collapseOnSelect   >
  <Navbar.Header>
    <Navbar.Brand>
    < Link to="/"  >CarnetHealth Inc .</ Link> 
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav  >
       <NavItem eventKey={1}>
       < Link to="/"  >Home</ Link>
      </NavItem>
      <NavItem eventKey={2}>
       < Link to="/about">About</ Link>
      </NavItem>
      <NavItem eventKey={3}>
      < Link to="/contact">Contact</ Link>
      
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
      <Login />
      </NavItem>  
      <NavItem eventKey={2} href="#">
      < Link to="/sign-up">Sign up</ Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* <Route path="/login" component={Login} /> */}
      <Route path="/sign-up" component={Signup} />   
      </div>
    );
};


export default Header;
