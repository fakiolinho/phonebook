import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FormButton = ({ saving, children }) => (
  <div className="field">
    <button className={classnames('button', 'is-primary', { 'is-loading': saving })}>
      {children}
    </button>
  </div>
);

FormButton.propTypes = {
  children: PropTypes.node,
  saving: PropTypes.bool,
};

FormButton.defaultProps = {
  children: null,
  saving: false,
};

export default FormButton;
