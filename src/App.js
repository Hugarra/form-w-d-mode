import React, { useState } from 'react';

import Navbar from "./components/Navbar.jsx";
import LoginContainer from "./components/LoginContainer.jsx"

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme.js';
import { GlobalStyles } from './components/global.js';

import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Navbar theme={setDarkMode} aTheme={darkMode}></Navbar>
        <br></br>
        <LoginContainer></LoginContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
