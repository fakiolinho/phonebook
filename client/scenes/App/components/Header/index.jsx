import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <header className="header">
    <nav className="nav has-shadow">
      <div className="nav-left">
        <Link to="/" className="nav-item">Phonebook</Link>
      </div>

      <div className="nav-right">
        <div className="nav-item">
          <Link to="/users/add" className="button is-primary is-small">Add a User</Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
