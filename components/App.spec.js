/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('renders correctly', () => {
  const wrapper = mount(<App />);
  const value = wrapper.find('h1').text();
  expect(value).toEqual('Hello React');
});
