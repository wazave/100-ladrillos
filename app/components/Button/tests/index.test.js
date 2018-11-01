import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  it('renders a <button>', () => {
    const renderedComponent = shallow(<Button />);
    expect(renderedComponent.getElement('button')).toBeDefined();
  });

  it('renders its children', () => {
    const text = 'Click me!';
    const renderedComponent = shallow(<Button>{text}</Button>);
    expect(renderedComponent.contains(text)).toEqual(true);
  });

  it('handles clicks', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = mount(<Button onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
