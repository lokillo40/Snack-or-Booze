import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

/**
 * NavBar Component.
 * 
 * Provides links to navigate the app's routes: Home, Snacks, Drinks, Add Snack, and Add Drink.
 */
function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/snacks">Snacks</NavLink>
      <NavLink exact to="/drinks">Drinks</NavLink>
      <NavLink exact to="/add-snack">Add Snack</NavLink>
      <NavLink exact to="/add-drink">Add Drink</NavLink>
    </nav>
  );
}

export default NavBar;

