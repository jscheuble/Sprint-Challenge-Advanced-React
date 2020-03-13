import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './DarkModeButton';

test('renders correctly', () => {
    const { getByText } = render(<Button />);
    const button = getByText(/change theme!/i);
    expect(button).toBeDefined();
});

test('when clicked, dark-mode class is added to body', () => {
    const { getByText } = render(<Button />);
    const button = getByText(/change theme/i);

    fireEvent.click(button);

    const body = document.querySelector('body');
    expect(body.classList.length === 1);
})
