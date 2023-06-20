import React, { useState } from 'react';
import { ThemeContext, useTheme } from '../contexts/ThemeContext';
import { AuthContext, useAuthContext } from './AuthContext';

const Navbar = () => {
    // const [isLightTheme, setIsLightTheme] = useState(true);
    // const [light, setLight] = useState({ syntax: '#555', ui: '#ddd', bg: '#eee' });
    // const [dark, setDark] = useState({ syntax: '#ddd', ui: '#333', bg: '#555' });
    
    return (
        <AuthContext.Consumer>{(authContext) => {
            <ThemeContext.Consumer>{(themeContext) => {
                const { isAuthenticated, toggleAuth } = authContext;
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return (
                <nav style={{background: theme.ui, color: theme.syntax}}>
                    <h1>Context App</h1>
                    <div>
                        {isAuthenticated ? "Logged in" : "logged out"}
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                )
            }}
            </ThemeContext.Consumer>
        }} 
        </AuthContext.Consumer>
    );
};

export default Navbar;