const initialState = {
  list: {
    data: [],
    isLoaded: false,
    errMsg: '',
    errCode: '',
  },
  edit: {
    data: {},
    isLoaded: false,
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
};

export default initialState;
