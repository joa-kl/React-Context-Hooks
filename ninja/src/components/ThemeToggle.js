import { useTheme } from "../contexts/ThemeContext"

const ThemeToggle = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>Toggle the theme</button>
    )
}

export default ThemeToggle