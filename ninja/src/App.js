// import React form 'react';

import { useContext } from "react";
import BookList from "./components/Booklist";
import Navbar from "./components/Navbar";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";


function App() {

  // const themes = useContext(ThemeContext);

  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
