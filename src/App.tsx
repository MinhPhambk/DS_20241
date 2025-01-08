import './App.css';
import { Route, Routes } from 'react-router';
import React from 'react';
import Page1 from './ui/pages/Page1';
import Page2 from './ui/pages/Page2';
import Page3 from './ui/pages/Page3';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;