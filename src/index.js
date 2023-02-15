import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Pages/LandingPage';
import Message from './Pages/Message.jsx';

import Navbar from './Components/Navbar.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/Message' element={<Message />} />
    </Routes>
  </BrowserRouter>
);

