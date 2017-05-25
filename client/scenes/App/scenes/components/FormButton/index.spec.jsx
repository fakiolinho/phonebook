import React from 'react';
import { shallow } from 'enzyme';

import FormButton from './';

describe('test FormButton component', () => {
  it('should render the component', () => {
    const enzymeWrapper = shallow(<FormButton />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should contain button element', () => {
    const enzymeWrapper = shallow(<FormButton />);

    expect(enzymeWrapper.find('.button')).toHaveLength(1);
  });

  it('should not contain is-loading class at first', () => {
    const enzymeWrapper = shallow(<FormButton />);

    expect(enzymeWrapper.find('.is-loading')).toHaveLength(0);
  });

  it('should contain is-loading class when prop saving is true', () => {
    const enzymeWrapper = shallow(<FormButton saving />);

    expect(enzymeWrapper.find('.button').hasClass('is-loading')).toBeTruthy();
  });
});
