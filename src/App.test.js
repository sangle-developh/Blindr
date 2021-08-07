import React from 'react';
import renderer from 'react-test-renderer';
import { Signup } from './Components';

test('Renders Sign up', () => {
  const component = renderer.create(<Signup />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
