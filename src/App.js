
import React from 'react';
import Album from './AlbumGrid/Album';
import './App.css';
import Hero from './HeroSection/Hero';
import Navbar from './Navbarfold/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Album/>
    </div>
  );
}

export default App;
