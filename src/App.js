import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Recipes from './components/Recipes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideDish from './components/SideDish';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sidedish" element={<SideDish />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
