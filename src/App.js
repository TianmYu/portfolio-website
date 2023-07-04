import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Lost from './Pages/LostPage';
import Contact from './Pages/Contact';

import Navbar from './Components/Navbar';
import {Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';



function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Lost />}/>
      </Routes>
    </div>
  );
}

export default App;
