import React from 'react';
import { shallow } from 'enzyme';

import FormField from './';

describe('test FormField component', () => {
  it('should render the component', () => {
    const enzymeWrapper = shallow(<FormField />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should contain label element', () => {
    const enzymeWrapper = shallow(<FormField />);

    expect(enzymeWrapper.find('.label')).toHaveLength(1);
  });

  it('should not contain is-danger element at first', () => {
    const enzymeWrapper = shallow(<FormField />);

    expect(enzymeWrapper.find('.is-danger')).toHaveLength(0);
  });

  it('should contain is-danger element when prop touched is true and prop error is not empty string', () => {
    const enzymeWrapper = shallow(<FormField meta={{ touched: true, error: 'There is an error' }} />);

    expect(enzymeWrapper.find('.is-danger')).toHaveLength(1);
  });
});
