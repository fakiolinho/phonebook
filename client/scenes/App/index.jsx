import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Main from './components/Main';

import './style.scss';

const App = ({ children }) => (
  <div className="app">
    <Header />
    <Main>
      {children}
    </Main>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
