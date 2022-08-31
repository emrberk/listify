import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScTopBar from './ScTopBar';
import { TABS } from './utils/constants';

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <ScTopBar>
      <h1>Listify</h1>
      <button className="topbar-tab" onClick={() => navigate(TABS.getFeatures)}>
        Get Album Features
      </button>
      <button className="topbar-tab" onClick={() => navigate(TABS.getRecommendations)}>Get Recommendations</button>
    </ScTopBar>
  )
}

export default TopBar;