// import React form 'react';

import { useContext } from "react";
import BookList from "./components/Booklist";
import Navbar from "./components/Navbar";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext";


function App() {

  const themes = useContext(ThemeContext);

  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
