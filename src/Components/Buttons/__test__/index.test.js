import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../index';

it('render button with test id of button', () => {
  render(<Button />);
  const signUpElement = screen.getByTestId('button');
  expect(signUpElement).toBeInTheDocument();
});

it('renders correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
