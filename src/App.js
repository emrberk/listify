import React from 'react';
import TopBar from './TopBar';
import './global.css';
import AlbumFeatures from './AlbumFeatures';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recommendations from './Recommendations';

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
