import React from 'react';
import { shallow, mount } from 'enzyme';

import { UsersList } from './';

describe('test UsersList component', () => {
  it('should render', () => {
    const props = {
      users: [],
      getUsers: jest.fn(),
      isLoaded: false,
    };
    const enzymeWrapper = shallow(<UsersList {...props} />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should render user\'s name', () => {
    const props = {
      users: [],
      getUsers: jest.fn(),
      isLoaded: false,
    };
    const enzymeWrapper = mount(<UsersList {...props} />);

    expect(props.getUsers).toHaveBeenCalledTimes(1);
  });

  it('should render a warning / isLoaded message when users list is empty', () => {
    const props = {
      users: [],
      getUsers: jest.fn(),
      isLoaded: false,
    };
    const enzymeWrapper = shallow(<UsersList {...props} />);

    expect(enzymeWrapper.find('.users-list')).toHaveLength(0);
    expect(enzymeWrapper.find('.title')).toHaveLength(1);
  });

  it('should not render a warning message when users list is not empty', () => {
    const props = {
      users: [{
        _id: 1,
        name: 'Marios',
      }],
      getUsers: jest.fn(),
      isLoaded: true,
    };
    const enzymeWrapper = shallow(<UsersList {...props} />);

    expect(enzymeWrapper.find('.users-list')).toHaveLength(1);
    expect(enzymeWrapper.find('.title')).toHaveLength(0);
  });
});
