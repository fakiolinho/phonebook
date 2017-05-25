import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="field">
    <label
      className="label"
      htmlFor={input.name}
    >
      {label}
    </label>
    <p className="control">
      <input
        className="input"
        {...input}
        placeholder={label}
        id={input.name}
        type={type}
      />
      {(touched && error) && <span className="help is-danger">{error}</span>}
    </p>
  </div>
);

FormField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

FormField.defaultProps = {
  input: {
    name: '',
    value: '',
  },
  label: '',
  type: '',
  meta: {
    touched: false,
    error: '',
  },
};

export default FormField;
