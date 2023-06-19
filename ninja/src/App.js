// import React form 'react';

import { useContext } from "react";
import BookList from "./components/Booklist";
import Navbar from "./components/Navbar";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider, { AuthContext } from "./components/AuthContext";


function App() {

  // const themes = useContext(ThemeContext);

  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
