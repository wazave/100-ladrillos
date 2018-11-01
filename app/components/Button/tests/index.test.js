import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';

import Button from '../index';

function shallowThemedButton(props) {
  return shallow(
    <ThemeProvider theme={theme}>
      <Button {...props} />
    </ThemeProvider>,
  );
}

function mountedThemedButton(props) {
  return mount(
    <ThemeProvider theme={theme}>
      <Button {...props} />
    </ThemeProvider>,
  );
}

describe('<Button />', () => {
  it('renders a <button>', () => {
    const renderedComponent = shallowThemedButton();
    expect(renderedComponent.getElement('button')).toBeDefined();
  });

  it('renders its children', () => {
    const text = 'Click me!';
    const renderedComponent = mountedThemedButton({ children: text });
    expect(renderedComponent.contains(text)).toEqual(true);
  });

  it('handles clicks', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = mountedThemedButton({ onClick: onClickSpy });
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
