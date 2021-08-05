import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../index';

test('renders Header', () => {
  render(<Header />);
  const signUpElement = screen.getByText('Sign up');
  expect(signUpElement).toBeInTheDocument();
});
