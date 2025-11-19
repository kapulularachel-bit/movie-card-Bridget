import * as React from 'react';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import './NavBar.css';

const preventDefault = (event) => event.preventDefault();

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MovieSearch</h1>
      <div className="nav-links">
        <Box
          sx={{
            typography: 'body1',
            '& > :not(style) ~ :not(style)': {
              ml: 2,
            },
            p: 2,
          }}
          onClick={preventDefault}
        >
          <RouterLink to="/">Home</RouterLink> | {" "}
          <RouterLink to="/MovieCardPages">Movie Cards</RouterLink>
        </Box>
      </div>
    </nav>
  );
}