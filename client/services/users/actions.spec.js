import 'babel-polyfill';

import request from '../utils/request';
import * as types from './actionTypes';
import * as actions from './actions';

beforeEach(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});

describe('test users actions', () => {
  describe('getUsers action', () => {
    it('successful request dispatches GET_USERS_REQUEST and GET_USERS_SUCCESS', async () => {
      request.get = jest.fn(url => (
        Promise.resolve({
          data: {
            users: [{
              id: 1,
              firstName: 'Marios',
            }, {
              id: 2,
              firstName: 'Xristina',
            }],
          },
        })
      ));

      const dispatch = jest.fn();
      const getState = jest.fn();

      await actions.getUsers()(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual({
        type: types.GET_USERS_REQUEST,
      });
      expect(dispatch.mock.calls[1][0]).toEqual({
        type: types.GET_USERS_SUCCESS,
        payload: [{
          id: 1,
          firstName: 'Marios',
        }, {
          id: 2,
          firstName: 'Xristina',
        }],
      });
    });
  });

  describe('getUser action', () => {
    it('successful request dispatches GET_USER_REQUEST and GET_USER_SUCCESS', async () => {
      request.get = jest.fn(url => (
        Promise.resolve({
          data: {
            user: {
              id: 1,
              firstName: 'Marios',
            },
          },
        })
      ));

      const dispatch = jest.fn();
      const getState = jest.fn();

      await actions.getUser(1)(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual({
        type: types.GET_USER_REQUEST,
      });
      expect(dispatch.mock.calls[1][0]).toEqual({
        type: types.GET_USER_SUCCESS,
        payload: {
          id: 1,
          firstName: 'Marios',
        },
      });
    });
  });

  describe('createUser action', () => {
    it('successful request dispatches CREATE_USER_REQUEST and CREATE_USER_SUCCESS', async () => {
      const credentials = {
        firstName: 'Marios',
      };
      request.post = jest.fn((url, credentials) => (
        Promise.resolve({
          data: {
            user: {
              id: 1,
              firstName: 'Marios',
            },
          },
        })
      ));

      const dispatch = jest.fn();
      const getState = jest.fn();

      await actions.createUser(credentials)(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual({
        type: types.CREATE_USER_REQUEST,
      });
      expect(dispatch.mock.calls[1][0]).toEqual({
        type: types.CREATE_USER_SUCCESS,
      });
      expect(dispatch.mock.calls[2][0]).toEqual({
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          method: 'push',
          args: ['/'],
        },
      });
    });
  });

  describe('updateUser action', () => {
    it('successful request dispatches UPDATE_USER_REQUEST and UPDATE_USER_SUCCESS', async () => {
      const credentials = {
        firstName: 'Marios',
      };
      request.put = jest.fn((url, credentials) => (
        Promise.resolve({
          data: {
            user: {
              id: 1,
              firstName: 'Marios',
            },
          },
        })
      ));

      const dispatch = jest.fn();
      const getState = jest.fn();

      await actions.updateUser(1, credentials)(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual({
        type: types.UPDATE_USER_REQUEST,
      });
      expect(dispatch.mock.calls[1][0]).toEqual({
        type: types.UPDATE_USER_SUCCESS,
      });
      expect(dispatch.mock.calls[2][0]).toEqual({
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          method: 'push',
          args: ['/'],
        },
      });
    });
  });

  describe('removeUser action', () => {
    it('successful request dispatches REMOVE_USER_REQUEST and REMOVE_USER_SUCCESS', async () => {
      request.delete = jest.fn(url => (
        Promise.resolve({
          data: {},
        })
      ));

      const dispatch = jest.fn();
      const getState = jest.fn(() => ({
        users: {
          list: {
            data: [{
              _id: 1,
              name: 'Marios',
            }, {
              _id: 2,
              name: 'Xristina',
            }],
          },
        },
      }));

      await actions.removeUser(1)(dispatch, getState);

      expect(dispatch.mock.calls[0][0]).toEqual({
        type: types.REMOVE_USER_REQUEST,
      });
      expect(dispatch.mock.calls[1][0]).toEqual({
        type: types.REMOVE_USER_SUCCESS,
        users: [{
          _id: 2,
          name: 'Xristina',
        }],
      });
    });
  });
});
