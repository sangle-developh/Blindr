import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign Up', () => {
  render(<App />);
  const signUpElement = screen.getByText('Sign up');
  expect(signUpElement).toBeInTheDocument();
});
