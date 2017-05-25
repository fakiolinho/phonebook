import reducer from './reducer';
import * as types from './actionTypes';

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
    .toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle GET_USERS_REQUEST', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.GET_USERS_REQUEST,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: true,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle GET_USERS_SUCCESS', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: true,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.GET_USERS_SUCCESS,
        payload: [{
          id: 1,
          firstName: 'Marios',
        }],
      }),
    ).toEqual({
      list: {
        data: [{
          id: 1,
          firstName: 'Marios',
        }],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle GET_USERS_ERROR', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: true,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.GET_USERS_ERROR,
        errMsg: 'Some error',
        errCode: 500,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: 'Some error',
        errCode: 500,
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle GET_USER_REQUEST', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.GET_USER_REQUEST,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: true,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle GET_USER_SUCCESS', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.GET_USER_SUCCESS,
        payload: {
          id: 1,
          firstName: 'Marios',
        },
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {
          id: 1,
          firstName: 'Marios',
        },
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle GET_USER_ERROR', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.GET_USER_ERROR,
        errMsg: 'Some error',
        errCode: 500,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: 'Some error',
        errCode: 500,
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle CREATE_USER_REQUEST', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.CREATE_USER_REQUEST,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: true,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle CREATE_USER_SUCCESS', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: true,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.CREATE_USER_SUCCESS,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle CREATE_USER_ERROR', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.CREATE_USER_ERROR,
        errMsg: 'Some error',
        errCode: 500,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: 'Some error',
        errCode: 500,
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle UPDATE_USER_REQUEST', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.UPDATE_USER_REQUEST,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: true,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle UPDATE_USER_SUCCESS', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: true,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.UPDATE_USER_SUCCESS,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle UPDATE_USER_ERROR', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.UPDATE_USER_ERROR,
        errMsg: 'Some error',
        errCode: 500,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: 'Some error',
        errCode: 500,
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle REMOVE_USER_REQUEST', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: 'Some error',
          errCode: 500,
        },
      }, {
        type: types.REMOVE_USER_REQUEST,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle REMOVE_USER_SUCCESS', () => {
    expect(
      reducer({
        list: {
          data: [{
            id: 1,
            name: 'Marios',
          }, {
            id: 2,
            name: 'Xristina',
          }, {
            id: 3,
            name: 'Jane',
          }],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {
            id: 3,
            name: 'Jane',
          },
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.REMOVE_USER_SUCCESS,
        users: [{
          id: 1,
          name: 'Marios',
        }, {
          id: 2,
          name: 'Xristina',
        }],
      }),
    ).toEqual({
      list: {
        data: [{
          id: 1,
          name: 'Marios',
        }, {
          id: 2,
          name: 'Xristina',
        }],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle REMOVE_USER_ERROR', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.REMOVE_USER_ERROR,
        errMsg: 'Some error',
        errCode: 500,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: 'Some error',
        errCode: 500,
      },
    });
  });

  it('should handle SELECT_USER', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {},
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.SELECT_USER,
        user: {
          id: 1,
          name: 'Marios',
        },
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {
          id: 1,
          name: 'Marios',
        },
        errMsg: '',
        errCode: '',
      },
    });
  });

  it('should handle DESELECT_USER', () => {
    expect(
      reducer({
        list: {
          data: [],
          loading: false,
          errMsg: '',
          errCode: '',
        },
        edit: {
          data: {},
          loading: false,
          errMsg: '',
          errCode: '',
        },
        create: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        update: {
          saving: false,
          errMsg: '',
          errCode: '',
        },
        remove: {
          data: {
            id: 1,
            name: 'Marios',
          },
          errMsg: '',
          errCode: '',
        },
      }, {
        type: types.DESELECT_USER,
      }),
    ).toEqual({
      list: {
        data: [],
        loading: false,
        errMsg: '',
        errCode: '',
      },
      edit: {
        data: {},
        loading: false,
        errMsg: '',
        errCode: '',
      },
      create: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      update: {
        saving: false,
        errMsg: '',
        errCode: '',
      },
      remove: {
        data: {},
        errMsg: '',
        errCode: '',
      },
    });
  });
});
