import React from 'react';
import TopBar from './TopBar';
import './global.css';
import AlbumFeatures from './AlbumFeatures';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopBar />} default>
        </Route>
        <Route path="/features" element={<AlbumFeatures />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
