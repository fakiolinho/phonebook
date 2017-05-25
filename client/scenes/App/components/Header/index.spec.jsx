import React from 'react';
import { shallow } from 'enzyme';

import Header from './';

describe('test Header component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Header />);

    expect(enzymeWrapper).toHaveLength(1);
  });
});
