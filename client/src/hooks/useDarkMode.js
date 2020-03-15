import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const body = document.querySelector('body');
    useEffect(() => {
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode]);

    const toggle = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return [darkMode, toggle];
}

export default useDarkMode;