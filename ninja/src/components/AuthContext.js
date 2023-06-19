import { createContext, useState, useContext } from "react"

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated);
    }
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;