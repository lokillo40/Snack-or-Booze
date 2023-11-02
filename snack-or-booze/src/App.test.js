// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

/**
 * A basic test to ensure that the App component renders without crashing.
 */
test('renders without crashing', () => {
  render(<App />);
});
