import React from 'react';
import { Link } from 'react-router';

const NoMatch = () => (
  <div className="card">
    <div className="card-content">
      <div className="content has-text-centered">
        <h2 className="title is-1 is-spaced">404</h2>
        <h4 className="subtitle is-4">Page not found</h4>
        <p>
          <span className="icon is-large"><i className="fa fa-bug" /></span>
        </p>
        <p>We couldn\'t find the page ypu asked for :-(</p>
        <p>Please try again!!</p>
        <Link to="/" className="button is-primary is-medium is-outlined">Go Home</Link>
      </div>
    </div>
  </div>
);

export default NoMatch;
