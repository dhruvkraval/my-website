import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Advice from './pages/Advice';
import Books from './pages/Books';
import Research from './pages/Research';
import Principles from './pages/Principles';
import BookOfElon from './pages/BookOfElon';

function Nav() {
  return (
    <nav>
      <Link to="/" className="nav-name">Dhruv Raval</Link>
      <span className="nav-sep">·</span>
      <NavLink to="/advice" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>advice I liked</NavLink>
      <span className="nav-sep">·</span>
      <NavLink to="/books" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>favorite books</NavLink>
      <span className="nav-sep">·</span>
      <NavLink to="/research" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>interesting research</NavLink>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Nav />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/books" element={<Books />} />
            <Route path="/research" element={<Research />} />
            <Route path="/principles" element={<Principles />} />
            <Route path="/book-of-elon" element={<BookOfElon />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
