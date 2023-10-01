import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home';
import NavBar from './component/navbar';
import FootBar from './component/footbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <FootBar />
  </React.StrictMode>
);