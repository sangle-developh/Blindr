import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders Header', () => {
  render(<Header />);
  const signInElement = screen.getByText('Sign in');
  expect(signInElement).toBeInTheDocument();

  const homeButton = screen.getByText('Home');
  expect(homeButton).toBeInTheDocument();

  const FAQs = screen.getByText('FAQs');
  expect(FAQs).toBeInTheDocument();
});
