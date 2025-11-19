import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {Routes, Route} from 'react-router';
import MovieCardPage from './pages/MovieCardPage';

const preventDefault = (event) => event.preventDefault();
export default function Links() {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link to ="/">Home</Link> | {" "}
      <Link to ="/MovieCardPages">
        Movie Cards
      </Link>

      <Routes>
        <Route path = "/" element = {<h1>Home Page</h1>} />
        <Route path = "/MovieCardPages" element = {<MovieCardPage />} />
      </Routes>
    </Box>
  );
}
