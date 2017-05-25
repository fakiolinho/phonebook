import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Main = ({ children }) => (
  <main className="main">
    <div className="container">
      {children}
    </div>
  </main>
);

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
