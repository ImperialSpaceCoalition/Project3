import React from "react";
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className = "header">
      <h2>Finding Fido</h2>
      <ul className = "nav-link">
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/pets">Pets</Link>
        </li>
        <li>
          <Link to = "/profile">User Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;