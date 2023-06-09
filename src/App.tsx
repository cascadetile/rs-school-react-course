import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import './App.css';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
