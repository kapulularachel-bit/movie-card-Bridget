import * as React from 'react';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MovieSearch</h1>
      <div className="nav-links">
        <Box
          sx={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <RouterLink to="/" className="nav-link">Home</RouterLink>
          <RouterLink to="/MovieCardPages" className="nav-link">Movie Cards</RouterLink>
        </Box>
      </div>
    </nav>
  );
}