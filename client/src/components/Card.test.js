import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders player data', async () => {
    const { getByText } = render(<Card />);

    const name = getByText(/name/i);
    const country = getByText(/country/i);
    const searches = getByText(/searches/i);

    await expect(name).toBeDefined();
    await expect(country).toBeDefined();
    await expect(searches).toBeDefined();
});
