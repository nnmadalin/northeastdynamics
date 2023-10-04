import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/index.css';

import Home from './pages/Home';
import SupportUs from './pages/SupportUs';
import OurTeam from './pages/OurTeam';
import Portofolio from './pages/Portofolio';

import NavBar from './component/navbar';
import FootBar from './component/footbar';

import Loading from './component/loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.overflow = 'visible';
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'visible';
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/support-us" element={<><SupportUs /></>} />
        <Route path="/our-team" element={<><OurTeam /></>} />
        <Route path="/portofolio" element={<><Portofolio /></>} />
      </Routes>
      <FootBar />
      {loading && <Loading />}
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);