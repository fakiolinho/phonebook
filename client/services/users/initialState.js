const initialState = {
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
};

export default initialState;
