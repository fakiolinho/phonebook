import * as types from './actionTypes';
import initialState from './initialState';

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          errMsg: '',
          errCode: '',
          loading: true,
        },
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          data: action.payload,
        },
      };
    case types.GET_USERS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          errMsg: action.errMsg,
          errCode: action.errCode,
          loading: false,
        },
      };
    case types.GET_USER_REQUEST:
      return {
        ...state,
        edit: {
          ...state.edit,
          errMsg: '',
          errCode: '',
          loading: true,
        },
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: action.payload,
          loading: false,
        },
      };
    case types.GET_USER_ERROR:
      return {
        ...state,
        edit: {
          ...state.edit,
          errMsg: action.errMsg,
          errCode: action.errCode,
          loading: false,
        },
      };
    case types.CREATE_USER_REQUEST:
      return {
        ...state,
        create: {
          ...state.create,
          errMsg: '',
          errCode: '',
          saving: true,
        },
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        create: {
          ...state.create,
          saving: false,
        },
      };
    case types.CREATE_USER_ERROR:
      return {
        ...state,
        create: {
          ...state.create,
          errMsg: action.errMsg,
          errCode: action.errCode,
          saving: false,
        },
      };
    case types.UPDATE_USER_REQUEST:
      return {
        ...state,
        update: {
          ...state.update,
          errMsg: '',
          errCode: '',
          saving: true,
        },
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        update: {
          ...state.update,
          saving: false,
        },
      };
    case types.UPDATE_USER_ERROR:
      return {
        ...state,
        update: {
          ...state.update,
          errMsg: action.errMsg,
          errCode: action.errCode,
          saving: false,
        },
      };
    case types.SELECT_USER:
      return {
        ...state,
        remove: {
          ...state.remove,
          data: action.user,
        },
      };
    case types.DESELECT_USER:
      return {
        ...state,
        remove: {
          ...state.remove,
          data: {},
        },
      };
    case types.REMOVE_USER_REQUEST:
      return {
        ...state,
        remove: {
          ...state.remove,
          errMsg: '',
          errCode: '',
        },
      };
    case types.REMOVE_USER_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          data: action.users,
        },
        remove: {
          ...state.remove,
          data: {},
        },
      };
    case types.REMOVE_USER_ERROR:
      return {
        ...state,
        remove: {
          ...state.remove,
          errMsg: action.errMsg,
          errCode: action.errCode,
        },
      };
    default:
      return state;
  }
};

export default usersReducer;
