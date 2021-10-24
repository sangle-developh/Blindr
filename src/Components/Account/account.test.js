import React from 'react';
import { render, screen } from '@testing-library/react';
import Account from './index';

test('renders Header', () => {
  render(<Account />);
  const showProfile = screen.getByText('Show my Bindy profile');
  expect(showProfile).toBeInTheDocument();

  const messageElement = screen.getByText('About me');
  expect(messageElement).toBeInTheDocument();

  const workPlace = screen.getByText('School/Company');
  expect(workPlace).toBeInTheDocument();

  const interest = screen.getByText('Interests');
  expect(interest).toBeInTheDocument();
});
