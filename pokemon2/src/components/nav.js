import React from 'react';
import { NavLink } from 'react-router-dom';
import '.././style.css';

export default () => {
  return(
    <nav className="nav">
      <NavLink className="nav__link" to="/">Home</NavLink>
      <NavLink className="nav__link" to="/favorites">Favorites Cards</NavLink>
    </nav>
  )
}