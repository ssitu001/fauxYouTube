import React from 'react';
import './Nav.css';
import Search from '../Search/Search'

const Nav = () => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search />      
    </div>
  </nav>
)

export default Nav