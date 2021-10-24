import React from 'react';
import { render, screen } from '@testing-library/react';
import Signup from './index';

test('renders Signup', () => {
  render(<Signup />);
  const username = screen.getByText('Username');
  expect(username).toBeInTheDocument();
  
  const username = screen.getByText('Name');
  expect(username).toBeInTheDocument();

  const dateOfBirth = screen.getByText('D.O.B');
  expect(dateOfBirth).toBeInTheDocument();

  const gender = screen.getByText('Gender');
  expect(gender).toBeInTheDocument();

  const interest = screen.getByText('Interest');
  expect(interest).toBeInTheDocument();

  const maxDistance = screen.getByText('Max Distance');
  expect(maxDistance).toBeInTheDocument();

  const ageRange = screen.getByText('Age Range');
  expect(ageRange).toBeInTheDocument();

const createAccount = screen.getByText('CREATE ACCOUNT');
  expect(createAccount).toBeInTheDocument();

  const cancel = screen.getByText('CANCEL');
  expect(cancel).toBeInTheDocument(); 
});
