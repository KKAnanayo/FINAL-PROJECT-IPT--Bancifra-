import React from 'react';
import{BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Location from './Pages/Location';
import Menu from './Pages/Menu';
import About from './Pages/About';
import TopBar from './Pages/TopBar';
import Admin from './Pages/Admin';
import SocialMedia from './Pages/SocialMedia';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <TopBar/>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/about" element={<About />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element ={<Menu />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
