import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePge';
import MovieCardPage from './pages/MovieCardPage';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MovieCardPages" element={<MovieCardPage />} />
      </Routes>
    </>
  );
}
