import { push } from 'react-router-redux';

import request from '../utils/request';
import * as types from './actionTypes';

export const getUsers = () => (
  async (dispatch) => {
    try {
      dispatch({
        type: types.GET_USERS_REQUEST,
      });

      const { data } = await request.get('/api/users');

      dispatch({
        type: types.GET_USERS_SUCCESS,
        payload: data.users,
      });
    } catch ({ errMsg, errCode }) {
      dispatch({
        type: types.GET_USERS_ERROR,
        errMsg,
        errCode,
      });
    }
  }
);

export const getUser = id => (
  async (dispatch) => {
    try {
      dispatch({
        type: types.GET_USER_REQUEST,
      });

      const { data } = await request.get(`/api/users/${id}`);

      dispatch({
        type: types.GET_USER_SUCCESS,
        payload: data.user,
      });
    } catch ({ errMsg, errCode }) {
      dispatch({
        type: types.GET_USER_ERROR,
        errMsg,
        errCode,
      });
    }
  }
);

export const createUser = credentials => (
  async (dispatch) => {
    try {
      dispatch({
        type: types.CREATE_USER_REQUEST,
      });

      await request.post('/api/users', credentials);

      dispatch({
        type: types.CREATE_USER_SUCCESS,
      });
      dispatch(push('/'));
    } catch ({ errMsg, errCode }) {
      dispatch({
        type: types.CREATE_USER_ERROR,
        errMsg,
        errCode,
      });
    }
  }
);

export const updateUser = (id, credentials) => (
  async (dispatch) => {
    try {
      dispatch({
        type: types.UPDATE_USER_REQUEST,
      });

      await request.put(`/api/users/${id}`, credentials);

      dispatch({
        type: types.UPDATE_USER_SUCCESS,
      });
      dispatch(push('/'));
    } catch ({ errMsg, errCode }) {
      dispatch({
        type: types.UPDATE_USER_ERROR,
        errMsg,
        errCode,
      });
    }
  }
);

export const removeUser = id => (
  async (dispatch, getState) => {
    try {
      dispatch({
        type: types.REMOVE_USER_REQUEST,
      });

      await request.delete(`/api/users/${id}`);

      dispatch({
        type: types.REMOVE_USER_SUCCESS,
        users: getState().users.list.data.filter((user => user._id !== id)),
      });
    } catch ({ errMsg, errCode }) {
      dispatch({
        type: types.REMOVE_USER_ERROR,
        errMsg,
        errCode,
      });
    }
  }
);

export const selectUser = user => ({
  type: types.SELECT_USER,
  user,
});

export const deselectUser = () => ({
  type: types.DESELECT_USER,
});

export const checkEmail = (email, exceptID = '') => (
  async (dispatch, getState) => {
    try {
      const { data } = await request.post(`/api/users/email-availability/${exceptID}`, {
        email,
      });

      if (!data.availability) {
        // eslint-disable-next-line no-throw-literal
        throw { email: 'This email already exists' };
      }
    } catch (err) {
      throw err;
    }
  }
);
