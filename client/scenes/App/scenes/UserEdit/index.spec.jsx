import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { UserEdit } from './';

const mockStore = configureStore([]);
const store = mockStore({});

describe('test UserEdit component', () => {
  it('should render', () => {
    const props = {
      user: null,
      getUser: jest.fn(),
      loading: false,
      params: {
        id: '1',
      },
    };
    const enzymeWrapper = shallow(<UserEdit {...props} />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should call getUser on componentDidMount', () => {
    const props = {
      user: null,
      getUser: jest.fn(),
      loading: false,
      params: {
        id: '1',
      },
    };
    const enzymeWrapper = mount(<Provider store={store}><UserEdit {...props} /></Provider>);

    expect(props.getUser).toHaveBeenCalledTimes(1);
  });

  it('should render an appropriate message when user is loading', () => {
    const props = {
      user: null,
      getUser: jest.fn(),
      loading: true,
      params: {
        id: '1',
      },
    };
    const enzymeWrapper = mount(<Provider store={store}><UserEdit {...props} /></Provider>);

    expect(enzymeWrapper.find('form')).toHaveLength(0);
    expect(enzymeWrapper.find('.title')).toHaveLength(1);
  });

  it('should render a form when user\'s data are loaded', () => {
    const props = {
      user: {
        id: 1,
        name: 'Marios',
      },
      getUser: jest.fn(),
      loading: false,
      params: {
        id: '1',
      },
    };
    const enzymeWrapper = mount(<Provider store={store}><UserEdit {...props} /></Provider>);

    expect(enzymeWrapper.find('form')).toHaveLength(1);
    expect(enzymeWrapper.find('.title')).toHaveLength(0);
  });
});
