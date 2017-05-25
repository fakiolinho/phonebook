import React from 'react';
import { shallow } from 'enzyme';

import UserItem from './';

describe('test UserItem component', () => {
  it('should render', () => {
    const user = {
      id: 1,
      firstName: 'Marios',
    };
    const enzymeWrapper = shallow(<UserItem user={user} />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should render user\'s fullName', () => {
    const user = {
      id: 1,
      firstName: 'Marios',
      lastName: 'Fakiolas',
    };
    const enzymeWrapper = shallow(<UserItem user={user} />);

    expect(enzymeWrapper.find('.title').dive().text()).toBe(`${user.firstName} ${user.lastName}`);
  });
});
