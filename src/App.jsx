// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <ScrollTopButton /> 
    </div>
  );
}

export default App;
