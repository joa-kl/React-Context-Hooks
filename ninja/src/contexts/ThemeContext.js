import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext();
 
export const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [light, setLight] = useState({ syntax: '#555', ui: '#ddd', bg: '#eee' });
    const [dark, setDark] = useState({ syntax: '#ddd', ui: '#333', bg: '#555' });

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }

    return (
        <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

