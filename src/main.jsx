import React from 'react' 
import ReactDOM from 'react-dom/client' 
import { BrowserRouter } from 'react-router-dom' 
import { ThemeProvider, createTheme } from '@mui/material/styles' 
import CssBaseline from '@mui/material/CssBaseline' 
 
// Import Roboto font 
import '@fontsource/roboto/300.css' 
import '@fontsource/roboto/400.css' 
import '@fontsource/roboto/500.css' 
import '@fontsource/roboto/700.css' 
 
// Import your main App component 
import App from './App.jsx' 
 
// Create your theme 
const theme = createTheme({ 
  palette: { 
    primary: { 
      main: '#1976d2', 
    }, 
    secondary: { 
      main: '#dc004e', 
    }, 
  }, 
  typography: { 
    fontFamily: 'Roboto, Arial, sans-serif', 
  }, 
}) 
 
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode> 
    <BrowserRouter> 
      <ThemeProvider theme={theme}> 
        <CssBaseline /> 
        <App /> 
      </ThemeProvider> 
    </BrowserRouter> 
  </React.StrictMode> 
) 