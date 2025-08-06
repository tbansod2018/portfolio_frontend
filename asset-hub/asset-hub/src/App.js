// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';  // Correct path
import Footer from './components/Footer';  // Correct path
import About from './pages/About';  // Correct path
import Stocks from './pages/Stocks';  // Correct path
import RealEstate from './pages/RealEstate';  // Correct path
import Contact from './pages/Contact';  // Correct path


import Profile from './pages/Profile';  // Correct path, check if file exists


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <Header />

        <main>
          <Routes>
            {/* Redirect from "/" to "/profile" */}
            <Route path="/" element={<Navigate to="/profile" />} />

            {/* Define Routes for different pages */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/realestate" element={<RealEstate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
