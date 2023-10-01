import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/index.css';
import Home from './pages/Home';
import NavBar from './component/navbar';
import FootBar from './component/footbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<><Home /></>} />
      <Route path="/support-us" element={<></>} />
    </Routes>
    <FootBar />
  </Router>

);