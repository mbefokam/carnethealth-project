import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '../home/HomePage';
import About from '../about/AboutPage';
import Contact from  '../contact/ContactPage';
import { Navbar,Nav,NavItem }from  'react-bootstrap';
import './Header.css';

const Header = () => {
    return(
      <div>
      {/* <nav >
      < Link to="/" activeClassName="active">Home</ Link>
       {" | "}
       < Link to="/about" activeClassName="active">About</ Link>
          {" | "}
          < Link to="/contact" activeClassName="active">Contact</ Link>
      </nav> */}

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
       < Link to="/about"  >About</ Link>
      </NavItem>
      <NavItem eventKey={3} href="#">
      < Link to="/contact"  >Contact</ Link>
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Login
      </NavItem>  
      <NavItem eventKey={2} href="#">
        Sign up
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </div>
    );
};

export default Header;
