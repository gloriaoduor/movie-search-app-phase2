import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';


function NavBar() {
  return <div className="navBar">
    <NavLink to="/" className="navLink">Home</NavLink> 
    <NavLink to="/search" className="navLink">Search</NavLink>
    <NavLink to="/genres" className="navLink">Genres</NavLink>
  </div>;
}

export default NavBar;
