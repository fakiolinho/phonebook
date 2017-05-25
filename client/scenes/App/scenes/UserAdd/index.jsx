import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import isEmail from 'validator/lib/isEmail';

import { createUser, checkEmail } from 'services/users/actions';
import FormField from '../components/FormField';
import FormButton from '../components/FormButton';

const validate = (formProps) => {
  const errors = {};

  if (!formProps.firstName) {
    errors.firstName = 'Please enter user\'s first name';
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter user\'s last name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter user\'s email';
  } else if (!isEmail(formProps.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formProps.homeNumber) {
    errors.homeNumber = 'Please enter user\'s home number';
  }

  if (!formProps.workNumber) {
    errors.workNumber = 'Please enter user\'s work number';
  }

  if (!formProps.mobileNumber) {
    errors.mobileNumber = 'Please enter user\'s mobile number';
  }

  return errors;
};

const asyncValidate = (formProps, dispatch, props) => props.checkEmail(formProps.email);

export class UserAdd extends Component {
  static propTypes = {
    createUser: PropTypes.func,
    saving: PropTypes.bool,
    handleSubmit: PropTypes.func,
  };

  handleSubmit = (formProps) => {
    this.props.createUser(formProps);
  }

  render() {
    const { handleSubmit, saving } = this.props;

    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Add User
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <form onSubmit={handleSubmit(this.handleSubmit)}>
              <div className="columns">
                <div className="column">
                  <Field
                    name="firstName"
                    type="text"
                    component={FormField}
                    label="First Name"
                  />
                </div>

                <div className="column">
                  <Field
                    name="lastName"
                    type="text"
                    component={FormField}
                    label="Last Name"
                  />
                </div>

                <div className="column">
                  <Field
                    name="email"
                    type="email"
                    component={FormField}
                    label="Email"
                  />
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <Field
                    name="homeNumber"
                    type="text"
                    component={FormField}
                    label="Home Number"
                  />
                </div>

                <div className="column">
                  <Field
                    name="workNumber"
                    type="text"
                    component={FormField}
                    label="Work Number"
                  />
                </div>

                <div className="column">
                  <Field
                    name="mobileNumber"
                    type="text"
                    component={FormField}
                    label="Mobile Number"
                  />
                </div>
              </div>

              <FormButton saving={saving}>Submit</FormButton>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

UserAdd = reduxForm({
  form: 'userAddForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
})(UserAdd);

const mapStateToProps = (state, ownProps) => ({
  saving: state.users.create.saving,
});

const mapDispatchToProps = dispatch => ({
  createUser: bindActionCreators(createUser, dispatch),
  checkEmail: bindActionCreators(checkEmail, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAdd);
