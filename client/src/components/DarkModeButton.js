import React from 'react';

import useDarkMode from '../hooks/useDarkMode';

export default function DarkModeButton() {
    const [darkMode, setDarkMode] = useDarkMode(false);
    return(
        <>
        <button onClick={setDarkMode}>change theme!</button>
        </>
    );
}