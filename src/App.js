import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeIcons, createTheme, ThemeProvider } from '@fluentui/react';
import DocLayout from './components/DocLayout';
import HomePage from './pages/HomePage';
import GettingStarted from './pages/GettingStarted';
import FyersConfiguration from './pages/FyersConfiguration';
import './App.css';

// Initialize Fluent UI icons
initializeIcons();

// Create light theme
const lightTheme = createTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
  },
});

// Create dark theme
const darkTheme = createTheme({
  palette: {
    themePrimary: '#2899f5',
    themeLighterAlt: '#020609',
    themeLighter: '#282828',
    themeLight: '#0c2a43',
    themeTertiary: '#185387',
    themeSecondary: '#2378c5',
    themeDarkAlt: '#3fa2f7',
    themeDark: '#60b2f8',
    themeDarker: '#8ac7fa',
    neutralLighterAlt: '#282828',
    neutralLighter: '#313131',
    neutralLight: '#3f3f3f',
    neutralQuaternaryAlt: '#484848',
    neutralQuaternary: '#4f4f4f',
    neutralTertiaryAlt: '#6d6d6d',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#1f1f1f',
  }
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check for system theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Listen for changes in system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };
    
    // Add event listener for theme changes
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  // Apply theme based on state
  const currentTheme = isDarkMode ? darkTheme : lightTheme;
  
  // Apply theme to body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);
  
  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <DocLayout isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/fyers-configuration" element={<FyersConfiguration />} />
          </Routes>
        </DocLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;