import { render, screen } from '@testing-library/react';
import App from './App';
import {logRoles} from '@testing-library/dom'
test('button has the correct initial color', () => {
const{container} =  render(<App />);
logRoles(container)
const colorButton = screen.getByRole('button',{name:'change to blue'})
expect(colorButton).toHaveStyle({background:'red'})
});


// assertions allow the test to pass or fail



// log roles 