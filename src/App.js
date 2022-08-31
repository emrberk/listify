import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import TopBar from './components/TopBar';
import AlbumFeatures from './components/AlbumFeatures';
import Recommendations from './components/Recommendations';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopBar />} default />
        <Route path="/features" element={<AlbumFeatures />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
