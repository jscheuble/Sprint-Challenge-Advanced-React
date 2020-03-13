import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders proper data', async () => {
  const { findByText } = render(<App />);
  const testName = await findByText(/carli lloyd/i);
  expect(testName).toBeDefined();
});

test('renders multiple player cards', async () => {
  const { findAllByText } = render(<App />);
  const names = findAllByText(/name/i);
  expect(names.length > 100);
})