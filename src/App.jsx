import * as React from 'react';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import MovieCardPage from './pages/MovieCardPage';
import HomePage from './pages/HomePge';

const preventDefault = (event) => event.preventDefault();
export default function Links() {
  return (
    <>
          <Box
      sx={{
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <RouterLink to ="/HomePage">Home</RouterLink> | {" "}
      <RouterLink to ="/MovieCardPages">
        Movie Cards
      </RouterLink>

      <Routes>
        <Route path = "/HomePage" element = {<HomePage/>} />
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/MovieCardPages" element = {<MovieCardPage />} />
      </Routes>
    </Box>
    </>

  );
}
