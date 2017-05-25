import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import isEmail from 'validator/lib/isEmail';

import { getUser, updateUser, checkEmail } from 'services/users/actions';
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
    errors.email = 'Please enter user\'s mobile number';
  }

  return errors;
};

const asyncValidate = (formProps, dispatch, props) => props.checkEmail(formProps.email, props.user._id);

export class UserEdit extends Component {
  static propTypes = {
    user: PropTypes.shape({
      _id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      homeNumber: PropTypes.string,
      workNumber: PropTypes.string,
      mobileNumber: PropTypes.string,
    }),
    loading: PropTypes.bool,
    getUser: PropTypes.func,
    updateUser: PropTypes.func,
    saving: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    handleSubmit: PropTypes.func,
  };

  componentDidMount() {
    const { getUser, params } = this.props;

    getUser(params.id);
  }

  handleSubmit = (formProps) => {
    const { user, updateUser } = this.props;

    updateUser(user._id, formProps);
  }

  renderContent() {
    const { loading, handleSubmit, saving } = this.props;

    if (loading) {
      return (
        <div className="has-text-centered">
          <h3 className="title">Loading User</h3>
          <span className="icon is-large"><i className="fa fa-refresh fa-spin" /></span>
        </div>
      );
    }

    return (
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
    );
  }

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Edit User
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

UserEdit = reduxForm({
  form: 'userEditForm',
  enableReinitialize: true,
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
})(UserEdit);

const mapStateToProps = (state, ownProps) => ({
  loading: state.users.edit.loading,
  saving: state.users.update.saving,
  user: state.users.edit.data,
  initialValues: state.users.edit.data,
});

const mapDispatchToProps = dispatch => ({
  getUser: bindActionCreators(getUser, dispatch),
  updateUser: bindActionCreators(updateUser, dispatch),
  checkEmail: bindActionCreators(checkEmail, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
