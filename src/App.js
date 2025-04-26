import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeIcons, createTheme, ThemeProvider } from '@fluentui/react';
import DocLayout from './components/DocLayout';
import HomePage from './pages/HomePage';
import GettingStarted from './pages/GettingStarted';
import Components from './pages/Components';
import ApiReference from './pages/ApiReference';
import './App.css';

// Initialize Fluent UI icons
initializeIcons();

// Create a custom theme (optional)
const myTheme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Router basename={process.env.NODE_ENV === 'production' ? '/my-docs-site' : '/'}>
        <DocLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/components" element={<Components />} />
            <Route path="/api-reference" element={<ApiReference />} />
          </Routes>
        </DocLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;