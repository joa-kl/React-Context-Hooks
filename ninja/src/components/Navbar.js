import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
    // const [isLightTheme, setIsLightTheme] = useState(true);
    // const [light, setLight] = useState({ syntax: '#555', ui: '#ddd', bg: '#eee' });
    // const [dark, setDark] = useState({ syntax: '#ddd', ui: '#333', bg: '#555' });
    const { isLightTheme, light, dark } = useTheme();
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;