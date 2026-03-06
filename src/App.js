import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Componets/Gallery';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Display the Gallery component on all pages (or move inside a route if needed) */}
      <Gallery />
    </div>
  );
}

export default App;
