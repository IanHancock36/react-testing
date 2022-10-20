import { render, screen } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
  render(<App />);
const colorButton = screen.getByRole('button',{name:'change to blue'})
expect(colorButton).toHaveStyle({background:'red'})
});


// assertions allow the test to pass or fail



