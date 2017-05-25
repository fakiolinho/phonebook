import React from 'react';
import { shallow } from 'enzyme';

import Main from './';

describe('test Main component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Main />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should render children', () => {
    const enzymeWrapper = shallow(<Main><p className="child">Some text here</p></Main>);

    expect(enzymeWrapper.find('.child')).toHaveLength(1);
    expect(enzymeWrapper.find('.child').text()).toBe('Some text here');
  });
});
