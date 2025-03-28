// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import WebDevelopment from './components/WebDevelopment';
import Contact from './components/Contact';
import ScrollTopButton from './components/ScrollTopButton';
import Animation from './components/Animation'; 

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <WebDevelopment />
      <Animation />
      <Contact />
      <ScrollTopButton /> 
    </div>
  );
}

export default App;
