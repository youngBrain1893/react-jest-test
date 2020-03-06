import React from 'react';
import Customer from 'pages/customer';
import { render, cleanup } from '@testing-library/react';

jest.useFakeTimers();

afterEach(cleanup);

describe('<Customer /> render correct', () => {
  test('<Customer /> first render correct', () => {
    const { getByText } = render(<Customer />);
    expect(getByText(/loading/)).toBeTruthy();
  })

  test('<Customer /> loaded after 1000ms', () => {
    const { getByText } = render(<Customer />);
    expect(getByText(/loading/)).toBeTruthy();
    jest.runOnlyPendingTimers();
    expect(getByText(/loaded/)).toBeTruthy();
  })

  test('<Customer>Customer Children</Customer> render correct', () => {
    const { getByText } = render(<Customer>Customer Children</Customer>);
    expect(getByText(/customer children/i)).toBeTruthy();
    expect(getByText(/loading/)).toBeTruthy();
  })
})
test('fake test', () => {
  const { getByText } = render(<Customer />);
  expect(getByText(/loading/)).toBeTruthy();
  expect(setTimeout).toBeCalled();
  jest.runAllTimers();
  expect(getByText(/loaded/)).toBeTruthy();
})
