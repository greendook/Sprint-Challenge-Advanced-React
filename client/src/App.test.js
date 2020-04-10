import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';

//render tests is the components load without crashing

// App component renders to UI
test('App renders without crashing', () => {
  render(<App />);
});

// Navbar renders to UI
test('Navbar renders without crashing', () => {
  render(<Navbar />);
});
