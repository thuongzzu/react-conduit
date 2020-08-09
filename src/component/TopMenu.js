import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { useSelector } from "react-redux";


const TopMenu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const LoggedIn = localStorage.getItem('jwt');
  const login = useSelector(state => state.login)
  console.log(login)
  if(LoggedIn!== null){
    return(
    <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="#">conduit</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/"> Home </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to=""> New Post </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to=""> Settings </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to=""> {login.username} </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
    )}else{
  return (
   <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#">conduit</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/"> Home </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/Sign-in"> Sign in </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/Sign-up"> Sign up </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    
  );
  }
};

export default TopMenu;
