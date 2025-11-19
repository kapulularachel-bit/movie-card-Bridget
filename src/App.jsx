import * as React from 'react';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import MovieCardPage from './pages/MovieCardPage';
import HomePage from './pages/HomePge';
import NavBar from './components/NavBar';
import '../components/NavBar.css';

const preventDefault = (event) => event.preventDefault();

export default function App() {
  return (
    <>
      <NavBar />
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
        <RouterLink to="/MovieCardPages">
          Movie Cards
        </RouterLink>
      </Box>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MovieCardPages" element={<MovieCardPage />} />
      </Routes>
    </>
  );
}
