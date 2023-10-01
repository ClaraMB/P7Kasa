import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.jsx';
import About from './pages/About/about.jsx';
import Header from './components/Header.jsx';
import Error from './pages/Error/error.jsx';
import Logement from './pages/Logement/logement.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" /* l'URL renvoie vers la page logement suivi de l'id du logement*/ element={<Logement />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);
