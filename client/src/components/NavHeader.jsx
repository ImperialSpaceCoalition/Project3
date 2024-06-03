import React from "react";
import {Link} from "react-router-dom"
import {Navbar, NavItem, NavLink, Container} from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {}

export default function NavHeader() {
  return (
    <Navbar className="header-body bg-body-tertiary">
      <h2 className="header-title">Finding Fido</h2>
      <Container className="header">
        <NavItem>
          <NavLink as={Link} to="/">Home</NavLink>
          {/* <Link  >Home</Link> */}
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/">Pets</NavLink>
          {/* <Link to="/pets">Pets</Link> */}
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/profile">Profile</NavLink>
          {/* <Link to="/profile">User Profile</Link> */}
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/signup">Sign Up</NavLink>
          {/* <Link to="/profile">User Profile</Link> */}
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/login">Login</NavLink>
          {/* <Link to="/profile">User Profile</Link> */}
        </NavItem>
      </Container>
    </Navbar>
  );
}

 